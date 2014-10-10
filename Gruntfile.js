module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            src: ['build']
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'node_modules/requirejs/', src: ['require.js'], dest: 'build/js/lib'}
                ]
            }
        }
    });
    grunt.registerTask('minify', ['clean', 'copy']);
    grunt.registerTask('default', ['minify']);
};