import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import type { Plugin } from 'vite'
import { quasar } from '@quasar/vite-plugin'

const transformHtmlPlugin = (data: Record<string, string>): Plugin => ({
  name: 'transform-html',
  transformIndexHtml: {
    order: 'pre',
    handler(html: string) {
      return html.replace(/<%=\s*(\w+)\s*%>/gi, (match, p1) => data[p1] || '')
    }
  }
})

export default defineConfig({
  // Base path needs to be the same as router path
  // https://github.com/vuejs/router/issues/1550
  base: '/jester-website',
  plugins: [
    vue(),
    transformHtmlPlugin({
      title: 'JesterTemplate',
      description: 'A single page application created using Vue.js 3'
    }),
    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: resolve(__dirname, './src/quasar-variables.scss')
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  }
})
