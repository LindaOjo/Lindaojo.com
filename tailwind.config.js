module.exports = { 
  purge: {
    content: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    options: {
        whitelist: ['gridsome-highlight', 'gridsome-code-title', 'token'],
        whitelistPatterns: [/^fa-/, /^svg-inline--fa/], 
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/], 
      }
  },

  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
