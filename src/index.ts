/**
 * Import styles library
 */
import styles from './index.module.css';

/**
 * Import icons
 */
import { IconStar } from '@codexteam/icons';


/**
 * Import types
 */
import { tmptoolData, tmptoolConfig } from './types';
export * from './types';
import { API, BlockAPI, BlockTool, BlockToolData } from '@editorjs/editorjs';


/**
 * tmptool Tool for Editor.js
 */
export class tmptool implements BlockTool {
  /**
   * Code API — public methods to work with Editor
   * 
   * @link https://editorjs.io/api
   */
  private readonly api: API;

  /**
   * Block API — methods and properties to work with Block instance
   * 
   * @link https://editorjs.io/blockapi
   */
  private readonly block: BlockAPI;

  /**
   * Read-only mode flag
   */
  private readonly readOnly: boolean;

  /**
   * Tool data for input and output
   */
  private data: tmptoolData;

  /**
   * Configuration object that passed through the initial Editor configuration.
   */
  private config?: tmptoolConfig;

  /**
   * Tool's HTML nodes
   */
  private nodes: { [key: string]: HTMLElement | null };

  /**
   * Class constructor
   * 
   * @link https://editorjs.io/tools-api#class-constructor
   */
  constructor( { data, config, api, block, readOnly } : { data: tmptoolData, config?: tmptoolConfig, api: API, block: BlockAPI, readOnly: boolean }) {
    this.data = data;
    this.config = config;
    this.api = api;
    this.block = block;
    this.readOnly = readOnly;

    /**
     * Declare Tool's nodes
     */
    this.nodes = {
      wrapper: null,
      monaco: null,
      cs: null
    };
  }

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
  render() {
    // this.nodes["wrapper"] = document.createElement('div');
    // this.nodes["wrapper"].classList.add(styles['tmptool-tool']);
    // let p = document.createElement('p');
    // p.classList.add(styles['p']);
    // p.innerText = "hello world";
    // this.nodes["wrapper"].appendChild(p)
    this.createBlock();

    return this.nodes.wrapper!;
  }

  /**
   * Extracts Block data from the UI
   * Required
   * @link https://editorjs.io/tools-api#save
   * 
   * @returns {tmptoolData} saved data
   */
  save(): tmptoolData {
    this.data.code = this.getCode();
    return this.data;
  }

  /**
   * Validates Block data after saving
   * @link https://editorjs.io/tools-api#validate
   * 
   * @param {tmptoolData} savedData
   * @returns {boolean} true if data is valid, otherwise false
   */
  // validate(saveedData:tmptoolData): boolean {
  //   console.log(saveedData);    
  //   return false;
  // }

  /**
   * 
   * Returns HTML that will be appended at the top of Block-settings
   * @link https://editorjs.io/tools-api#render-settings
   * 
   * @returns {HTMLElement}
   */
  // renderSettings() {}

  /**
   * Clear Tools stuff: cache, variables, events.
   * Called when Editor instance is destroying.
   * @link https://editorjs.io/tools-api#destroy
   * 
   * @returns {void}
   */
  // destroy() {}

  /**
   * Handle content pasted by ways that described by pasteConfig static getter
   * @link https://editorjs.io/tools-api#on-paste
   * 
   * @param {PasteEvent} event - event with pasted content
   * @returns {void}
   */
  // onPaste() {}

  /**
   * Specifies how to merge two similar Blocks
   * @link https://editorjs.io/tools-api#merge
   * 
   * @param {tmptoolData} data - data of second Block
   * @returns {tmptoolData} - merged data
   */
  // merge() {} 

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
  // static get pasteConfig() {
  //   return {
  //     /**
  //      * Paste HTML into Editor
  //      */
  //     tags: [],

  //     /**
  //      * Paste URL of media into the Editor
  //      */
  //     patterns: {},

  //     /**
  //      * Drag n drop file from into the Editor
  //      */
  //     files: {
  //       mimeTypes: [ ],
  //     },
  //   };
  // }

  /**
   * Clean unwanted HTML tags or attributes
   * @link https://editorjs.io/tools-api#sanitize
   * 
   * @returns {{[string]: boolean|object}} - Sanitizer rules
   */
  // static get sanitize() {
  //   return {};
  // } 

  /**
   * Describe an icon and title here
   * Required if Tools should be added to the Toolbox
   * @link https://editorjs.io/tools-api#toolbox
   * 
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      title: 'tmptool',
      icon: IconStar,
    };
  }

  /**
   * Shortcut that fires render method and inserts new Block
   * @link https://editorjs.io/tools-api#shortcut
   * 
   * @returns {string}
   */
  // static get shortcut() {
  //   // return 'CMD+SHIFT+I';
  // }

  /**
   * Config allows Tool to specify how it can be converted into/from another Tool
   * 
   * @link https://editorjs.io/tools-api#conversionconfig
   * 
   * @returns {{export: string|function, import: string|function}}
   */
  // static get conversionConfig() {
  //   // return {
  //   //   export: (data) => {
  //   //     return data.items.join('.'); // in this example, all list items will be concatenated to an export string
  //   //   },
  //   //  
  //   //   /**
  //   //    * In this example, List Tool creates items by splitting original text by a dot symbol. 
  //   //    */
  //   //   import: (string) => {
  //   //     const items = string.split('.');
  //   //
  //   //     return {
  //   //       items: items.filter( (text) => text.trim() !== ''),
  //   //       type: 'unordered'
  //   //     };
  //   //   }
  //   // };
  // }

  /**
   * With this option, Editor.js won't handle Enter keydowns
   * @link https://editorjs.io/tools-api#enablelinebreaks
   * 
   * @returns {boolean}
   */
  // static get enableLineBreaks() {
  //   return true;
  // }

  /**
   * This flag tells core that current tool supports the read-only mode
   * @link https://editorjs.io/tools-api#isreadonlysupported
   * 
   * @returns {boolean}
   */
  // static get isReadOnlySupported() {
  //   return true;
  // } 

  /**
   * LIFE CYCLE HOOKS
   * 
   * These methods are called by Editor.js core
   * @link https://editorjs.io/tools-api#lifecycle-hooks
   */

  /**
   * Called after Block contents is added to the page
   */
  rendered() {
    this.renderMonaco();
  }

  /**
   * Called each time Block contents is updated
   */
  // updated() {}

  /**
   * Called after Block contents is removed from the page but before Block instance deleted
   */
  // removed() {}

  /**
   * Called after Block is moved by move tunes or through API
   * 
   * @param {MoveEvent} event 
   */
  // moved(event) {}



  
  private createBlock(){
    let block = new TagBuilder('div')
      .classes(styles['tmptool-tool'])
      .build();

    let header = new TagBuilder('div')
      .classes(styles['header'])
      .build();

    let title = new TagBuilder('span')
      .innerText(this.data.title)
      .classes(styles['header-title'])
      .build();

    let language = new TagBuilder('span')
      .innerHTML(
        ` | ${this.data.language}`
      )
// `<select name="language" id="language">
//   <option value="javascript">JavaScript</option>
//   <option value="python">Python</option>
//   <option value="c++">C++</option>
//   <option value="java">Java</option>
//   <option value="text">text</option>
// </select>`)
      .build()

    let runbtn = new TagBuilder('button')
      .innerText('run')
      .classes(styles['header-runbtn'])
      .build();
    runbtn.addEventListener('click',()=>{
      if(this.config?.onRun !== undefined){
        this.nodes.monaco?.remove();
        this.nodes.cs!.style.display = 'block';
        this.config.onRun(this.save());
        this.config.printOutput(this.writeConsole);
      }
    })
        

    let monaco = new TagBuilder('div')
      .classes(styles['monaco-editor'])
      .build();
    monaco.style.height = `${this.data.code.split('\n').length}em`;

    let cs = new TagBuilder('div').style({display:'none'}).build();
    cs.style.paddingLeft = '20px';
    let input = new InputBuilder('text').build();
    let send = new TagBuilder('button').innerText("send input").build();
    send.addEventListener('click',()=>{
      try{
        this.config?.onInput(input.value);
        this.writeConsole(`> ${input.value}`);
      }catch(e){}
    })

    cs.appendChild(input);
    cs.appendChild(send);

    header.appendChild(title);
    header.appendChild(language);
    header.appendChild(runbtn);

    block.appendChild(header);
    block.appendChild(monaco)
    block.appendChild(cs)


    this.nodes["wrapper"] = block;
    this.nodes["monaco"] = monaco;
    this.nodes["cs"] = cs;
    this.nodes["input"] = input;
    return this.nodes;
  }

  private monacoEditor:any;
  private declare getCode : () => string;

  private async renderMonaco(){
    let Monaco = await loader.init();
    this.monacoEditor = Monaco.editor.create(this.nodes.monaco!, {
        value: this.data ? this.data.code : "function hello() {\n\talert('Hello world!');\n}",
        language: this.data.language,
        scrollBeyondLastLine: false,
        wordWrap: 'off',
        wrappingStrategy: 'advanced',
        minimap: {
            enabled: false
        },
        overviewRulerLanes: 0,
      });

    this.getCode = () => this.monacoEditor.getValue();

  }

  writeConsole = (line:string) =>{
    let p = new TagBuilder("pre").build();
    p.textContent = line;
    this.nodes.cs!.insertBefore( p, this.nodes.input! );

  }

};


import loader, { Monaco } from '@monaco-editor/loader';
import {TagBuilder, InputBuilder, SpanBuilder} from "html-tag-builder"





