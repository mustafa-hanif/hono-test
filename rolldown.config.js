import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'client/main.js',
  output: {
    file: 'client/dist/bundle.js',
  },
  resolve: {
    alias: {
      '@/*': './client/*'
    },
    tsconfigFilename: './tsconfig.json'
  }
})