/**
 * Import types
 */
import { tmptoolData, tmptoolConfig } from './types';
export * from './types';
import { API, BlockAPI, BlockTool } from '@editorjs/editorjs';
/**
 * tmptool Tool for Editor.js
 */
export declare class tmptool implements BlockTool {
    /**
     * Code API — public methods to work with Editor
     *
     * @link https://editorjs.io/api
     */
    private readonly api;
    /**
     * Block API — methods and properties to work with Block instance
     *
     * @link https://editorjs.io/blockapi
     */
    private readonly block;
    /**
     * Read-only mode flag
     */
    private readonly readOnly;
    /**
     * Tool data for input and output
     */
    private data;
    /**
     * Configuration object that passed through the initial Editor configuration.
     */
    private config?;
    /**
     * Tool's HTML nodes
     */
    private nodes;
    /**
     * Class constructor
     *
     * @link https://editorjs.io/tools-api#class-constructor
     */
    constructor({ data, config, api, block, readOnly }: {
        data: tmptoolData;
        config?: tmptoolConfig;
        api: API;
        block: BlockAPI;
        readOnly: boolean;
    });
    /**
     * PUBLIC METHODS
     *
     * @link https://editorjs.io/tools-api#public-methods
     */
    /**
     * Creates UI of a Block
     * Required
     * @link https://editorjs.io/tools-api#render
     *
     * @returns {HTMLElement}
     */
    render(): HTMLElement;
    /**
     * Extracts Block data from the UI
     * Required
     * @link https://editorjs.io/tools-api#save
     *
     * @returns {tmptoolData} saved data
     */
    save(): tmptoolData;
    /**
     * Validates Block data after saving
     * @link https://editorjs.io/tools-api#validate
     *
     * @param {tmptoolData} savedData
     * @returns {boolean} true if data is valid, otherwise false
     */
    /**
     *
     * Returns HTML that will be appended at the top of Block-settings
     * @link https://editorjs.io/tools-api#render-settings
     *
     * @returns {HTMLElement}
     */
    /**
     * Clear Tools stuff: cache, variables, events.
     * Called when Editor instance is destroying.
     * @link https://editorjs.io/tools-api#destroy
     *
     * @returns {void}
     */
    /**
     * Handle content pasted by ways that described by pasteConfig static getter
     * @link https://editorjs.io/tools-api#on-paste
     *
     * @param {PasteEvent} event - event with pasted content
     * @returns {void}
     */
    /**
     * Specifies how to merge two similar Blocks
     * @link https://editorjs.io/tools-api#merge
     *
     * @param {tmptoolData} data - data of second Block
     * @returns {tmptoolData} - merged data
     */
    /**
     * STATIC GETTERS
     *
     * @link https://editorjs.io/tools-api#static-getters
     */
    /**
     * Process pasted content before appending to the Editor
     * @link https://editorjs.io/tools-api#pasteconfig
     *
     * @returns {tags?: string[], files?: { mimeTypes: string[], extensions: string[] }, patterns?: { [string]: RegEx }}
     */
    /**
     * Clean unwanted HTML tags or attributes
     * @link https://editorjs.io/tools-api#sanitize
     *
     * @returns {{[string]: boolean|object}} - Sanitizer rules
     */
    /**
     * Describe an icon and title here
     * Required if Tools should be added to the Toolbox
     * @link https://editorjs.io/tools-api#toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
        title: string;
        icon: any;
    };
    /**
     * Shortcut that fires render method and inserts new Block
     * @link https://editorjs.io/tools-api#shortcut
     *
     * @returns {string}
     */
    /**
     * Config allows Tool to specify how it can be converted into/from another Tool
     *
     * @link https://editorjs.io/tools-api#conversionconfig
     *
     * @returns {{export: string|function, import: string|function}}
     */
    /**
     * With this option, Editor.js won't handle Enter keydowns
     * @link https://editorjs.io/tools-api#enablelinebreaks
     *
     * @returns {boolean}
     */
    /**
     * This flag tells core that current tool supports the read-only mode
     * @link https://editorjs.io/tools-api#isreadonlysupported
     *
     * @returns {boolean}
     */
    /**
     * LIFE CYCLE HOOKS
     *
     * These methods are called by Editor.js core
     * @link https://editorjs.io/tools-api#lifecycle-hooks
     */
    /**
     * Called after Block contents is added to the page
     */
    rendered(): void;
    /**
     * Called each time Block contents is updated
     */
    /**
     * Called after Block contents is removed from the page but before Block instance deleted
     */
    /**
     * Called after Block is moved by move tunes or through API
     *
     * @param {MoveEvent} event
     */
    private createBlock;
    private monacoEditor;
    private getCode;
    private renderMonaco;
    writeConsole: (line: string) => void;
}
