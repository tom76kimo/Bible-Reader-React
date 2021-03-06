'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['build'],
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/css/',
                src: ['bootstrap.min.css'],
                dest: 'build/css/',
                filter: 'isFile'
            },
            bootstrapFont: {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/fonts/',
                src: ['*'],
                dest: 'build/fonts/',
                filter: 'isFile'
            },
            style: {
                expand: true,
                cwd: 'public/css/',
                src: ['*.css'],
                dest: 'build/css/',
                filter: 'isFile'
            },
            images: {
                expand: true,
                cwd: 'public/image/',
                src: ['*.jpg'],
                dest: 'build/image/',
                filter: 'isFile'
            }
        },
        concurrent: {
            dev: ['nodemon:app', 'webpack:dev', 'watch:scripts'],
            options: {
                logConcurrentOutput: true
            }
        },
        jshint: {
            all: [
                '*.js',
                '{actions,configs,components,services,stores}/**/*.js'
            ],
            options: {
                jshintrc: true
            }
        },
        nodemon: {
            app: {
                script: './server.js',
                options: {
                    ignore: ['build/**'],
                    ext: 'js,jsx'
                }
            }
        },
        watch: {
            scripts: {
                files: 'public/**/*.css',
                tasks: ['copy-css'],
                options: {
                  spawn: false,
                }
            }
        },
        webpack: {
            dev: {
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './client.js',
                output: {
                    path: './build/js',
                    publicPath: '/public/js/',
                    filename: '[name].js'
                },
                module: {
                    loaders: [
                        { test: /\.css$/, loader: 'style!css' },
                        { test: /\.jsx$/, loader: 'jsx-loader' },
                        { test: /\.json$/, loader: 'json-loader'}
                    ]
                },
                stats: {
                    colors: true
                },
                devtool: 'source-map',
                watch: true,
                keepalive: true
            }
        }
    });

    // libs
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('default', ['clean', 'jshint', 'copy:bootstrap', 'copy:bootstrapFont', 'copy:style', 'copy:images', 'concurrent:dev']);
    grunt.registerTask('copy-css', ['copy:bootstrap', 'copy:bootstrapFont', 'copy:style', 'copy:images']);
};

