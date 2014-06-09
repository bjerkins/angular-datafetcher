
'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Install watch task
    watch: {
      js: {
        files: ['lib/*.js'],
        tasks: ['newer:jshint:all']
      },
      jsTest: {
        files: ['test/*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'lib/*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/*.js']
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'karma',
  ]);

  grunt.registerTask('build', [
    'jshint',
    'karma',
    'watch'
  ]);
};
