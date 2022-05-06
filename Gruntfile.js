module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.license %> License */\n\n", 
        footer: "\n/*! Author: <%= pkg.author.name %> <<%= pkg.author.email %>>\n Updated: <%= grunt.template.today('dS mmm yyyy @ h:MM:ss TT') %> */"},
      js: {
        src: ["src/init.js", "src/axios.js", "src/fetch.js", "src/data.js", "src/string.js", "src/export.js"],
        dest: "dist/serve.js"}
    },
    uglify: {
      target: {
        files: {
          "dist/serve.min.js": ["dist/serve.js"]
        }
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("default", ["concat", "uglify"]);
};