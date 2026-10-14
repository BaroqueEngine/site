import { games } from "./games.js";

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const gameLink = (game, className, text) => {
  const a = el("a", className, text);
  a.href = `${game.id}/`;
  return a;
};

// 上部バーの時計
const clock = document.getElementById("clock");
const tick = () => {
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent = now.toLocaleString("ja-JP", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
tick();
setInterval(tick, 10_000);

// エディタ: 行番号つきの README。ゲーム名の行はリンクにする
const readme = document.getElementById("readme");
const lines = [
  { cls: "md-h", text: "# BAROQUE ENGINE" },
  { text: "" },
  { cls: "md-dim", text: "ブラウザで遊べる小さなゲームを置いています。" },
  { text: "" },
  { cls: "md-h", text: "## Games" },
  { text: "" },
  ...games.map((game) => ({ game })),
  { text: "" },
  { cls: "md-dim", text: "<!-- release に push で追加 -->" },
];
for (const line of lines) {
  const li = el("li");
  if (line.game) {
    li.append(el("span", "md-dim", "- "));
    li.append(gameLink(line.game, "md-link", `${line.game.title} ${line.game.subtitle}`));
    li.append(el("span", "md-dim", ` (${line.game.id}/)`));
  } else {
    li.append(el("span", line.cls, line.text || " "));
  }
  readme.append(li);
}
readme.lastElementChild.classList.add("is-cursor");

// fastfetch 風の情報
const facts = document.getElementById("facts");
const rows = [
  ["host", "baroqueengine.net"],
  ["games", String(games.length)],
  ["latest", games.at(-1).id],
  ["engine", "vite + html"],
  ["deploy", "github pages"],
  ["theme", "solitude"],
];
for (const [key, value] of rows) {
  facts.append(el("dt", null, key), el("dd", null, value));
}
const swatches = el("dd", "swatches");
for (let i = 0; i < 8; i++) swatches.append(el("span", `sw sw-${i}`));
facts.append(el("dt", null, ""), swatches);

// ターミナル: ls の結果としてゲームを並べる
const term = document.getElementById("term");
const prompt = (command) => {
  const p = el("p", "prompt");
  p.append(el("span", "p-path", "~"), el("span", "p-arrow", " ❯ "), el("span", null, command));
  return p;
};
term.append(prompt("ls -l games/"));
for (const game of games) {
  const p = el("p", "ls");
  p.append(el("span", "md-dim", "drwxr-xr-x  "));
  p.append(gameLink(game, "ls-name", `${game.id}/`));
  p.append(el("span", "md-dim", `  ${game.subtitle}`));
  term.append(p);
}
term.append(prompt("cat games/*/motto"));
for (const game of games) term.append(el("p", "md-dim", game.line));
const last = prompt("");
last.append(el("span", "caret"));
term.append(last);

// ファイルマネージャー: ゲームをフォルダとして並べる
const folders = document.getElementById("folders");
for (const game of games) {
  const li = el("li");
  const a = gameLink(game, "folder");
  a.append(el("span", "folder-icon"), el("span", "folder-name", game.id), el("span", "folder-sub", game.subtitle));
  li.append(a);
  folders.append(li);
}
