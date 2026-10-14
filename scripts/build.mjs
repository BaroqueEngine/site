// サイト本体を Vite でビルドし、games.txt に並んだ各ゲームのビルド結果を dist/<リポジトリ名>/ に追加する。
//
// CI:      node scripts/build.mjs
//          GAMES_TOKEN を使って各リポジトリの release ブランチを clone してビルドする。
// ローカル: node scripts/build.mjs --local（npm run build:all）
//          隣のフォルダ（../lost001 など）にある作業コピーをそのままビルドする。
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OWNER = "BaroqueEngine";
const REF = process.env.GAMES_REF ?? "release";
const local = process.argv.includes("--local");

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");

const run = (command, cwd) => execSync(command, { cwd, stdio: "inherit" });

const games = readFileSync(join(root, "games.txt"), "utf8")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));

run("npx vite build", root);

const work = local ? null : mkdtempSync(join(tmpdir(), "games-"));
try {
  for (const game of games) {
    console.log(`\n== ${game}`);
    let src;
    if (local) {
      src = resolve(root, "..", game);
      if (!existsSync(join(src, "node_modules"))) run("npm ci", src);
    } else {
      const token = process.env.GAMES_TOKEN;
      if (!token) throw new Error("GAMES_TOKEN is not set");
      src = join(work, game);
      run(
        `git clone --depth 1 --branch ${REF} https://x-access-token:${token}@github.com/${OWNER}/${game}.git "${src}"`,
      );
      run("npm ci", src);
    }
    run("npm run build", src);
    cpSync(join(src, "dist"), join(out, game), { recursive: true });
  }
} finally {
  if (work) rmSync(work, { recursive: true, force: true });
}

console.log(`\nBuilt site into ${out}`);
