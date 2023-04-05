import { BlockToolData } from '@editorjs/editorjs';
/**
 * tmptool Tool's input and output data format
 */
export interface tmptoolData extends BlockToolData {
    title: string;
    code: string;
    language: string;
}
/**
 * tmptool Tool's configuration object that passed through the initial Editor config
 */
export interface tmptoolConfig {
    onRun: (data: tmptoolData) => void;
    onInput: (line: string) => void;
    printOutput: (printfunc: (line: string) => void) => void;
}
