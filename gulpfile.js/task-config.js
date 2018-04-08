module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    }
  },

  svgSprite: {
    svgstore: {
      inlineSvg: true
    },

    svgmin: {
      plugins: [{
        cleanupIDs: {
          minify: true
        }
      }]
    },

    cheerio: {
      run: function($) {
        $('svg').attr('style',  'display:none');
      },

      parserOptions: {
        xmlMode: true
      }
    }
  },

  stylesheets: {
    autoprefixer: ['> 1%', 'last 2 version'],
    cleancss: {
      level: {
        1: {
          specialComments: false
        }
      }
    }
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    rev: true
  }
}
