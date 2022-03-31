import Color from "./color";

console.log(Color.black("black"));
console.log(Color.red("red"));
console.log(Color.green("green"));
console.log(Color.yellow("yellow"));
console.log(Color.blue("blue"));
console.log(Color.magenta("magenta"));
console.log(Color.cyan("cyan"));
console.log(Color.white("white"));

console.log(Color.brightBlack("bright black"));
console.log(Color.brightRed("bright red"));
console.log(Color.brightGreen("bright green"));
console.log(Color.brightYellow("bright yellow"));
console.log(Color.brightBlue("bright blue"));
console.log(Color.brightMagenta("bright magenta"));
console.log(Color.brightCyan("bright cyan"));
console.log(Color.brightWhite("bright white"));

console.log(Color.textMode("italic", { mode: "italic" }));
console.log(Color.textMode("bold", { mode: "bold" }));
console.log(Color.textMode("faint", { mode: "faint" }));

console.log(Color.black("black text, cyan background, unterline, italic, bold", { bg: "cyan", mode: ["bold", "italic", "underline"] }));
console.log(Color.red("red text, cyan background, unterline", { bg: "cyan", mode: "underline" }));