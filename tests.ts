import Color from "./color";

console.log("#################################");
console.log("fancy colored Strings");
console.log("#################################");
console.log(
  Color.inspect({ info: "custom colors", a: 1, b: 1.1, c: "abcdef", d: "abcdef: j" },
    {
      string: {
        fg: "magenta",
      },
      number: {
        fg: "red",
        style: {
          bg: "red",
          mode: "underline"
        }
      }
    })
);

console.log(Color.inspect("I'am a colored 'String' with numbers (+1, -22, 3, 3.14, 0x12FF, 0xf, 0b100011)\nand a new line.\n"));
console.log(Color.inspect("{ a: \"test\", b: 'test', c: 1, d: 'j!'}"));
console.log(Color.inspect(3.1415));
console.log(Color.inspect(69));
console.log(Color.inspect(null));
console.log(Color.inspect(undefined));
console.log(Color.inspect(BigInt("100000000000000000000000000000000000000000000000")));

console.log("\n\n#################################");
console.log("colored string")
console.log("#################################");
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