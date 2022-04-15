"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(require("./color"));
console.log("#################################");
console.log("fancy colored Strings");
console.log("#################################");
console.log(color_1.default.inspect({ info: "custom colors", a: 1, b: 1.1, c: "abcdef", d: "abcdef: j" }, {
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
}));
console.log(color_1.default.inspect("I'am a colored 'String' with numbers (+1, -22, 3, 3.14, 0x12FF, 0xf, 0b100011)\nand a new line.\n"));
console.log(color_1.default.inspect("{ a: \"test\", b: 'test', c: 1, d: 'j!'}"));
console.log(color_1.default.inspect(3.1415));
console.log(color_1.default.inspect(69));
console.log(color_1.default.inspect(null));
console.log(color_1.default.inspect(undefined));
console.log(color_1.default.inspect(BigInt("100000000000000000000000000000000000000000000000")));
console.log("\n\n#################################");
console.log("colored string");
console.log("#################################");
console.log(color_1.default.black("black"));
console.log(color_1.default.red("red"));
console.log(color_1.default.green("green"));
console.log(color_1.default.yellow("yellow"));
console.log(color_1.default.blue("blue"));
console.log(color_1.default.magenta("magenta"));
console.log(color_1.default.cyan("cyan"));
console.log(color_1.default.white("white"));
console.log(color_1.default.brightBlack("bright black"));
console.log(color_1.default.brightRed("bright red"));
console.log(color_1.default.brightGreen("bright green"));
console.log(color_1.default.brightYellow("bright yellow"));
console.log(color_1.default.brightBlue("bright blue"));
console.log(color_1.default.brightMagenta("bright magenta"));
console.log(color_1.default.brightCyan("bright cyan"));
console.log(color_1.default.brightWhite("bright white"));
console.log(color_1.default.textMode("italic", { mode: "italic" }));
console.log(color_1.default.textMode("bold", { mode: "bold" }));
console.log(color_1.default.textMode("faint", { mode: "faint" }));
console.log(color_1.default.black("black text, cyan background, unterline, italic, bold", { bg: "cyan", mode: ["bold", "italic", "underline"] }));
console.log(color_1.default.red("red text, cyan background, unterline", { bg: "cyan", mode: "underline" }));
//# sourceMappingURL=tests.js.map