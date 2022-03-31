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
COLORS.set("default", { fg: "", bg: "", });
const TEXT_MODE = new Map();
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
        if (options.textMode) {
            if (typeof options.textMode === "string") {
                textMode = ";" + TEXT_MODE.get(options.textMode) || "";
            }
            else if (Array.isArray(options.textMode)) {
                options.textMode.forEach(value => {
                    textMode = ";" + TEXT_MODE.get(value);
                });
            }
        }
    }
    const output = `\u001B[0${textMode}${bg}${fg}m`;
    return output;
}
class Colorizer {
    static _getColoredString(str, color, options) {
        const endSequ = '\u001B[0m'; //end of sequence
        return `${getSequence(color, options)}${str}${endSequ}`;
    }
    static black(str, options) {
        return this._getColoredString(str, "black", options);
    }
    static red(str, options) {
        return this._getColoredString(str, "red", options);
    }
    static green(str, options) {
        return this._getColoredString(str, "green", options);
    }
    static yellow(str, options) {
        return this._getColoredString(str, "yellow", options);
    }
    static blue(str, options) {
        return this._getColoredString(str, "blue", options);
    }
    static magenta(str, options) {
        return this._getColoredString(str, "magenta", options);
    }
    static cyan(str, options) {
        return this._getColoredString(str, "cyan", options);
    }
    static white(str, options) {
        return this._getColoredString(str, "white", options);
    }
    static textMode(str, options) {
        if (!options?.bg && !options?.textMode)
            throw new Error("No options given!");
        return this._getColoredString(str, "default", options);
    }
}
exports.default = Colorizer;
//# sourceMappingURL=index.js.map