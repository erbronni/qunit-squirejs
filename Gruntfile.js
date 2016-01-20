// Generated on 2016-01-20 using
// generator-webapp 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    copy: {
      bootstrap: {
        files: [
          {
            expand: true,
            cwd: 'app/components/bootstrap-sass/assets',
            src: [
              '**/*.png',
              '**/*.eot',
              '**/*.svg',
              '**/*.ttf',
              '**/*.woff',
              '**/*.woff2'
            ],
            dest: 'app'
          }
        ]
      }
    },
    compass: {
      app: {
        options: {
          cssDir: 'app/styles',
          sassDir: 'app/styles',
          importPath: [
            'app/components/bootstrap-sass/assets/stylesheets'
          ],
          force: true
        }
      }
    }
  });

  grunt.registerTask('default', [
    'compass:app',
    'copy:bootstrap'
  ]);
};
