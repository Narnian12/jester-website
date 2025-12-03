const { FlatCompat } = require('@eslint/eslintrc')
const compat = new FlatCompat({ baseDirectory: __dirname })

module.exports = [
  // Reuse the existing shareable config via FlatCompat so older configs keep working
  ...compat.extends('@kouts/eslint-config/vue3-typescript'),
  // Keep the project-specific overrides from the legacy .eslintrc.js
  {
    files: ['src/views/**/*.vue', 'src/layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
