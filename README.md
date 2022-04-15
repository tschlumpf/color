# Color
simple script to colorize console output.
* [available colors](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)
* [available text modes](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters) 1-9

## install
```sh
npm i https://github.com/tschlumpf/color.git
```
## Usage
```Typescript
import Color from "colorize-string";

Color.setDefaults({
  number: {
    fg: "magenta", style: {
      mode: "underline"
    }
  },
  hex: { fg: "red", style: undefined },
  bin: { fg: "yellow", style: undefined },
  string: { fg: "blue", style: undefined }
});
Color.resetDefaults();

console.log(Color.inspect("I'am a colored 'String' with numbers (+1, -22, 3, 3.14, 0x12FF, 0xf, 0b100011)\nand a new line.\n"));

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

console.log(Color.black("black text, cyan background, unterline, italic", { bg: "cyan", textMode: ["italic", "underline"] }));
console.log(Color.red("red text, cyan background, unterline", { bg: "cyan", mode: "underline" }));
```
