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
  base: '/jester-website/',
  plugins: [
    vue(),
    transformHtmlPlugin({
      title: 'JesterTemplate',
      description: 'A single page application created using Vue.js 3'
    }),
    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: 'src/quasar-variables.scss'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables";`
      }
    }
  }
})
