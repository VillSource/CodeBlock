![](https://badgen.net/badge/Editor.js/v2.0/blue)

# tmptool Tool

Provides code runner Blocks for the [Editor.js](https://editorjs.io). And Using [Monaco Editor](https://microsoft.github.io/monaco-editor/) for text editor support.

![](https://capella.pics/017dca46-6869-40cb-93a0-994416576e33.jpg)

## Installation

<details>
    <summary> install via NPM (comming is soon) </summary>

### Install via NPM

Get the package

```shell
npm i --save-dev @editorjs/quote
```

Include module at your application

```javascript
const Quote = require('@editorjs/quote');
```

</details>

### Install via source code

Get the source code.

```shell
npm install <url to this repo>
```

Include module at your application

```typescript
import {tmptool} from 'editorjs-tmptool';
```

```javascript
const Quote = require('editorjs-tmptool');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/tmptool.umd.js` file to your page.

<!-- ### Load from CDN

You can load specific version of package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@editorjs/quote).

`https://cdn.jsdelivr.net/npm/@editorjs/quote@latest` -->

Then require this script on page with Editor.js.

```html
<script src="..."></script>
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```typescript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    quote: {
        class: tmptool, // as any if it cannot assign to class
        config: {
            onRun: (data:{title:string,code:string, language:string})=>{},
            onInput: (line:string)=>{},
            printOutput: (consoleWritter: (line:string)=>void)=>{}
        }
    },
  },
  
  ...
});
```

<!-- Or init Quote Tool with additional settings

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
  },
  
  ...
});
``` -->

## Config Params

| Field              | Type     | Description                 |
| ------------------ | -------- | ----------------------------|
| onRun   | `(data:{title:string,code:string,language:string})=>{}` | callback when click runbtn by passing data to the function  |
| onInput   | `(line:string)=>{}` | callback when user submit input by passing line as user line input  |
| printOutput   | `(consoleWriter:(line:string)=>void)=>{}` | callback when user runcode by passing the function `consoleWriter(line:string)` that use for print output to block  |

<!-- ## Tool's settings

![](https://capella.pics/0db5d4de-c431-4cc2-90bf-bb1f4feec5df.jpg)

You can choose alignment for the quote. It takes no effect while editing, but saved the «alignment» param. -->

## Output data

| Field     | Type     | Description          |
| --------- | -------- | -------------------- |
| title      | `string` | title of code blog         |
| language   | `string` | language of code |
| code | `string` | source dode in code block   |


```json
{
    "type" : "tmptool",
    "data" : {
        "title" : "Hello World",
        "language": "python",
        "code" : "print('hello world')"
    }
}
```
