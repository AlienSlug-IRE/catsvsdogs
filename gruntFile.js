'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {

            dist: {
                files: {
                    "./app/css/app.css": "./app/sass/app.scss"
                },
                options: {
                    outputStyle: 'compressed'
                },
                dev: {
                    options: {
                        sourcemap: 'true'
                    }
                }

            }
        },
        exec: {
            build: {
                command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
            }
        },
        watch: {
            sass: {
                files: ["./app/sass/**/*.{scss,sass}", "./app/sass/_partials/**/*.{scss,sass}"],
                tasks: ["sass:dist"]
            },
            css: {
                files: '**/*.css',
                options: {
                    livereload: {
                        port: 9000
                    }
                }
            }

        }
    });
    grunt.registerTask('copy-require', function() {
        grunt.file.mkdir('build/js/libs');
        grunt.file.copy('node_modules/requirejs/require.js', 'build/js/libs/require.js');
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-require');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass', 'watch']);

};