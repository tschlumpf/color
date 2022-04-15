declare type ColorStrings = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "brightBlack" | "brightRed" | "brightGreen" | "brightYellow" | "brightBlue" | "brightMagenta" | "brightCyan" | "brightWhite" | "default";
declare type TextMode = "italic" | "underline" | "blinkingSlow" | "blinkingFast" | "reverse" | "hide" | "cross-out" | "bold" | "faint";
declare type ColorFunction = (str: string, options?: Partial<OptionsColor>) => string;
declare type OptionsColor = {
    bg: ColorStrings;
    mode: TextMode[] | TextMode;
};
declare type InspectItem = {
    fg: ColorStrings;
    style: Partial<OptionsColor> | undefined;
};
declare type OptionsInspect = {
    number: Partial<InspectItem>;
    string: Partial<InspectItem>;
    hex: Partial<InspectItem>;
    bin: Partial<InspectItem>;
};
interface ColorInterface {
    inspect: (input: unknown, options?: Partial<OptionsInspect>) => string;
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
