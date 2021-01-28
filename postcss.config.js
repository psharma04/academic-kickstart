module.exports = {
  plugins: {
      '@fullhuman/postcss-purgecss': {
          content: [
              './themes/academic/layouts/**/*.html', 
              './themes/academic/assets/js/*.js',
              './themes/academic/static/js/*.js',
              './layouts/**/*.html',
              './static/js/*.js'
            ],
          whitelist: [
              'highlight',
              'language-bash',
              'pre',
              'video',
              'code',
              'content',
              'h3',
              'h4',
              'ul',
              'li'
          ]
      },
      autoprefixer: {},
      cssnano: {preset: 'default'}
  }
};