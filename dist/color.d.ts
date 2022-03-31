declare type ColorStrings = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "brightBlack" | "brightRed" | "brightGreen" | "brightYellow" | "brightBlue" | "brightMagenta" | "brightCyan" | "brightWhite" | "default";
declare type TextMode = "italic" | "underline" | "blinkingSlow" | "blinkingFast" | "reverse" | "hide" | "cross-out" | "bold" | "faint";
declare type ColorFunction = (str: string, options?: Partial<Options>) => string;
declare type Options = {
    bg: ColorStrings;
    mode: TextMode[] | TextMode;
};
interface ColorInterface {
    black: ColorFunction;
    red: ColorFunction;
    green: ColorFunction;
    yellow: ColorFunction;
    blue: ColorFunction;
    magenta: ColorFunction;
    cyan: ColorFunction;
    white: ColorFunction;
    brightBlack: ColorFunction;
    brightRed: ColorFunction;
    brightGreen: ColorFunction;
    brightYellow: ColorFunction;
    brightBlue: ColorFunction;
    brightMagenta: ColorFunction;
    brightCyan: ColorFunction;
    brightWhite: ColorFunction;
    textMode: ColorFunction;
}
declare const colors: ColorInterface;
export default colors;
