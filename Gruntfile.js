module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style.css': 'style.sass'
        }
      }
    },

    browserSync: {
      bsFiles: {
        src: ['./css/*.css', './cv.html']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      },
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['sass', 'browserSync', 'imagemin']);
};