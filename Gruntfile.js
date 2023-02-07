module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.homepage %> | <%= pkg.license %> */\n\n", 
        footer: "\n/*! Author: <%= pkg.author.name %> <<%= pkg.author.email %>> | Updated: <%= grunt.template.today('dS mmm yyyy') %> */"},
      js: {
        src: ["src/init.js", "src/data.js", "src/checker.js", "src/setter.js", "src/sorter.js", "src/export.js"],
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