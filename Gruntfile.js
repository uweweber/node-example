module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ts: {
      default : {
        src: ["src/**/*.ts"],
        outDir: "./",
        options: {
          rootDir: 'src',
          verbose: true,
          allowJs:true
        }
      }
    },

    watch: {
      files: 'src/*.ts',
      tasks: ['ts']
    }
  });

  grunt.registerTask('default', ['watch']);

}