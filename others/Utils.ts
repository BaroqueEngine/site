export const domain = (): string => {
  return process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://baroqueengine.net/";
};

export const tagNames: { [key: string]: string } = {
  td: "TouchDesigner",
  js: "JavaScript",
  p5js: "p5.js",
  cs: "C#",
  mj: "MarkovJunior",
  rust: "Rust",
  wfc: "WaveFunctionCollapse",
  ai: "AI",
  blender: "Blender",
  python: "Python",
  pixi: "PixiJS",
  ae: "AfterEffects",
  all: "All",
};
export const shortTagNames: { [key: string]: string } = {
  td: "TD",
  js: "JS",
  p5js: "p5",
  cs: "C#",
  mj: "MJ",
  rust: "Rust",
  wfc: "WFC",
  ai: "AI",
  blender: "Blender",
  python: "Python",
  pixi: "PixiJS",
  ae: "AE",
  all: "All",
};
export const tagColors: { [key: string]: string } = {
  td: "#0000ff",
  js: "#ff9900",
  p5js: "#ed1a3d",
  cs: "#ed1a3d",
  mj: "#009ad6",
  rust: "#4499aa",
  wfc: "#aa9944",
  ai: "#ff00ff",
  blender: "#ffff00",
  python: "#ff00ff",
  pixi: "#ff23fb",
  ae: "#552bff",
};
