import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/test.ts(x)'],
    setupFiles: ['./vitestGlobalReact.ts']
  }
})
