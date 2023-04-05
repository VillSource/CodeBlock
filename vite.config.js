import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from "vite-plugin-dts";
import path from 'path';

/**
 * Trick to use Vite server.open option on macOS
 * @see https://github.com/facebook/create-react-app/pull/1690#issuecomment-283518768
 */
process.env.BROWSER = 'open';

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      name: 'tmptool',
      formats: ['umd', 'es'],
      fileName: 'tmptool'
    },
  },

  server: {
    port: 3300,
    open: true,
  },

  plugins: [
    cssInjectedByJsPlugin(),
    dts({
      outputDir: "dist/types",
      entryRoot:"src",
      // insertTypesEntry: true
    })
  ]
}