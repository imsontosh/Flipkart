module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      development: {
        options: {
          paths: ["assets/css"],
          cleancss: true,
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/styles.css": "less/styles.less"
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          cleancss: true
        },
        files: {
          "css/styles.css": "less/styles.less"
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    csscomb: {
        development: {
            options: {
                config: '.csscomb.json'
            },
            files: {
                'css/styles-combed.css': ['css/styles.css']
            }
        }
    },

    watch: {
      options:{
        livereload: true,
      },
      css: {
        files: ['**/*.less','**/*.html','**/*.js'],
        tasks: ['less:development', 'csscomb:development'],
        options: {
          spawn: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:development','csscomb:development', 'watch']);
  grunt.registerTask('production', ['less:production', 'cssmin:target']);
  

};

