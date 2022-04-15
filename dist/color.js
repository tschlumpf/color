"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const COLORS = new Map();
COLORS.set("black", { fg: "30", bg: "40", });
COLORS.set("red", { fg: "31", bg: "41", });
COLORS.set("green", { fg: "32", bg: "42", });
COLORS.set("yellow", { fg: "33", bg: "43", });
COLORS.set("blue", { fg: "34", bg: "44", });
COLORS.set("magenta", { fg: "35", bg: "45", });
COLORS.set("cyan", { fg: "36", bg: "46", });
COLORS.set("white", { fg: "37", bg: "47", });
COLORS.set("brightBlack", { fg: "90", bg: "100", });
COLORS.set("brightRed", { fg: "91", bg: "101", });
COLORS.set("brightGreen", { fg: "92", bg: "102", });
COLORS.set("brightYellow", { fg: "93", bg: "103", });
COLORS.set("brightBlue", { fg: "94", bg: "104", });
COLORS.set("brightMagenta", { fg: "95", bg: "105", });
COLORS.set("brightCyan", { fg: "96", bg: "106", });
COLORS.set("brightWhite", { fg: "97", bg: "107", });
COLORS.set("default", { fg: "", bg: "", });
const TEXT_MODE = new Map();
TEXT_MODE.set("bold", 1);
TEXT_MODE.set("faint", 2);
TEXT_MODE.set("italic", 3);
TEXT_MODE.set("underline", 4);
TEXT_MODE.set("blinkingSlow", 5);
TEXT_MODE.set("blinkingFast", 6);
TEXT_MODE.set("reverse", 7);
TEXT_MODE.set("hide", 8);
TEXT_MODE.set("cross-out", 9);
function getSequence(color, options) {
    if (!COLORS.has(color))
        throw new Error("Wrong text color!");
    let fg = "";
    let bg = "";
    let textMode = "";
    if (color !== "default") {
        fg = ";" + COLORS.get(color)?.fg;
    }
    if (options) {
        if (options.bg && options.bg !== "default") {
            if (!COLORS.has(options.bg))
                throw new Error("Wrong background color!");
            bg = ";" + COLORS.get(options.bg)?.bg;
        }
        if (options.mode) {
            if (typeof options.mode === "string") {
                textMode = ";" + TEXT_MODE.get(options.mode) || "";
            }
            else if (Array.isArray(options.mode)) {
                options.mode.forEach(value => {
                    textMode += ";" + TEXT_MODE.get(value);
                });
            }
        }
    }
    return `\u001B[0${textMode}${bg}${fg}m`;
}
function getColoredString(str, color, options) {
    const endSequ = '\u001B[0m'; //end of sequence
    return `${getSequence(color, options)}${str}${endSequ}`;
}
const colors = {};
COLORS.forEach((_, key) => {
    if (key === "default")
        return;
    Object.defineProperty(colors, key, {
        enumerable: false,
        writable: false,
        value: function (str, options) {
            return getColoredString(str, key, options);
        }
    });
});
Object.defineProperty(colors, "textMode", {
    enumerable: false,
    writable: false,
    value: function (str, options) {
        if (!options?.bg && !options?.mode)
            throw new Error("No options given!");
        return getColoredString(str, "default", options);
    }
});
Object.defineProperty(colors, "inspect", {
    enumerable: false,
    writable: false,
    // eslint-disable-next-line @typescript-eslint/ban-types
    value: function (input, options) {
        const defaultOptions = {
            number: { fg: "red", style: undefined },
            hex: { fg: "cyan", style: undefined },
            bin: { fg: "yellow", style: undefined },
            string: { fg: "green", style: undefined },
            ...options,
        };
        let str;
        switch (typeof input) {
            case "object":
                str = JSON.stringify(input, null, 2);
                break;
            case "undefined":
                str = "undefined";
                break;
            case "boolean":
            case "number":
            case "symbol":
            case "bigint":
                str = input.toString();
                break;
            case "string":
                str = input;
                break;
            default:
                throw new Error("unknown type.");
        }
        const regexStringDouble = /(["][^"^'+]+["])/g;
        const regexStringSingle = /([\s\n])('[^"^'+]+')/g;
        const regexNumber = /([+-]?\b[0-9.,+\-_]+\b)/g;
        const regexHex = /(\b0x[0-9a-fA-F]+\b)/g;
        const regexBin = /(\b0b[0-1_]+\b)/g;
        return str
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            .replace(regexNumber, this[defaultOptions.number.fg]("$1", defaultOptions.number.style))
            .replace(regexHex, this[defaultOptions.hex.fg]("$1", defaultOptions.hex.style))
            .replace(regexBin, this[defaultOptions.bin.fg]("$1", defaultOptions.bin.style))
            .replace(regexStringDouble, this[defaultOptions.string.fg]("$1", defaultOptions.string.style))
            .replace(regexStringSingle, "$1" + this[defaultOptions.string.fg]("$2", defaultOptions.string.style));
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
    }
});
exports.default = colors;
//# sourceMappingURL=color.js.map