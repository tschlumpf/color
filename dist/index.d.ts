declare type ColorStrings = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "default";
declare type TextMode = "italic" | "underline" | "blinkingSlow" | "blinkingFast" | "reverse" | "hide" | "cross-out";
declare type Options = {
    bg: ColorStrings;
    textMode: TextMode[] | TextMode;
};
declare class Colorizer {
    private static _getColoredString;
    static black(str: string, options?: Partial<Options>): string;
    static red(str: string, options?: Partial<Options>): string;
    static green(str: string, options?: Partial<Options>): string;
    static yellow(str: string, options?: Partial<Options>): string;
    static blue(str: string, options?: Partial<Options>): string;
    static magenta(str: string, options?: Partial<Options>): string;
    static cyan(str: string, options?: Partial<Options>): string;
    static white(str: string, options?: Partial<Options>): string;
    static textMode(str: string, options?: Partial<Options>): string;
}
export default Colorizer;
