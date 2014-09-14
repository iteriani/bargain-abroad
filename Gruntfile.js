module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            basic: {
                files: {
                    'public/build/libs.js': [
                        'bin/js/client/libs/jquery-2.0.3.min.js',
                        'bin/js/client/libs/selectize.min.js',
                        'bin/js/client/libs/bootstrap.min.js',
                        'bin/js/client/libs/handlebars-v1.2.1.js',
                        'bin/js/client/libs/ember.prod.js',
                        'bin/js/client/libs/store.min.js',
                        'bin/js/client/libs/spin.min.js',
                    ],
                    'public/build/app.js': [
                        'bin/js/client/app.js',
                        'bin/js/client/models/*.js',
                        'bin/js/client/routes/*.js',
                        'bin/js/client/controllers/*.js',
                        'bin/js/client/components/*.js',
                        'bin/js/client/views/*.js',
                        'bin/js/client/templates.js'
                    ]
                }
            }
        },

        ember_handlebars: {
            compile: {
                options: {
                    processName: function(filePath) {
                        var fileParts = filePath.split('/');
                        var nameParts = fileParts[fileParts.length - 1].split('.');
                        nameParts.pop();
                        return nameParts.join('/');
                    }
                },
                files: {
                    "bin/js/client/templates.js": "templates/*.hb"
                }
            }
        },

        less: {
            dev: {
                files: {
                    "public/css/style.css": "bin/less/includes.less"
                }
            }
        },

        targethtml: {
            dev: {
                files: {
                    'public/index.html': 'bin/index.html'
                }
            },
            prod: {
                files: {
                    'public/index.html': 'bin/index.html'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ember-handlebars');

    grunt.registerTask('preview', [ 'ember_handlebars', 'concat', 'targethtml:prod' ]);
    grunt.registerTask('build', [ 'ember_handlebars', 'targethtml:dev' ]);
    grunt.registerTask('heroku', [ 'coffee', 'ember_handlebars', 'less', 'concat', 'targethtml:prod' ]);
};