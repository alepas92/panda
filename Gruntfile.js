module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {cwd: 'dev/', src: 'index.html', dest: 'build/', expand: true},
                    {cwd: 'dev/lib/jasmine-2.0.0', src: '*', dest: 'build/lib/jasmine-2.0.0', expand: true},
                    {cwd: 'dev/lib/pandastrap', src: '*', dest: 'build/lib/pandastrap', expand: true},
                    {cwd: 'dev/img/main', src: '*', dest: 'build/img/main', expand: true}
                ]
            },
        },

        concat: {
            options: {
                separator: ';',
            },

            dist: {
                src: ['dev/js/sourses.js', 'dev/js/LSmethods.js', 'dev/js/controls.js', 'dev/js/layoutPainting.js'],
                dest: 'build/js/script.js',
            },
        },

        sass: {
            dist: {
                files: [{
                    outputstyle: 'compressed',
                    expand: true,
                    cwd: 'dev/scss/',
                    src: ['*.scss'],
                    dest: 'build/css',
                    ext: '.css'
                }]
            }
        },

        insert: {
            options: {},
            main: {
                files: [
                    {src: "dev/nav.html", dest: "build/index.html", match: "<!--Stuff nav here-->"},
                    {src: "dev/calendar.html", dest: "build/index.html", match: "<!--Stuff calendar here-->"},
                    {src: "dev/categoriesPanel.html", dest: "build/index.html", match: "<!--Stuff categoriesPanel here-->"},
                    {src: "dev/todaySpendsField.html", dest: "build/index.html", match: "<!--Stuff todaySpendsField here-->"},
                ],
            },
        },

        watch: {
            html: {
                files: ['dev/*.html'],
                tasks: ['copy', 'insert'],
            },

            js: {
                files: ['dev/js/*.js'],
                tasks: ['concat'],
            },

            sass: {
                files: ['dev/scss/*.scss'],
                tasks: ['sass'],
            },
        }

      });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-insert');

    grunt.registerTask('default', ['copy', 'concat', 'sass', 'insert']);
    
};

