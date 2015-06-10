'use strict';

module.exports = function(grunt) {
  
  grunt.registerMultiTask('jest', 'Run tests with Jest.', function() {
    var options = this.options();
    // rootDir is a required config option
    options.rootDir = process.cwd();
    require('jest-cli').runCLI({config: options}, process.cwd(), this.async());
  });

};
