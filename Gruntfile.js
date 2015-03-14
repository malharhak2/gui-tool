module.exports = function (grunt) {
	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
		sass : {
			compile : {
				files : [{
					expand: true,
					cwd : 'public/scss',
					src : ['*.scss'],
					dest: 'public/css',
					ext: '.css'
				}]
			}
		},
		jshint: {
			client: {
				files: {
					src: ['public/js/**/*.js']
				}
			},
			server: {
				files: {
					src: ['server/**/*.js']
				}
			}
		},
		watch: {
			css: {
				files: ['public/scss/*.scss'],
				tasks: ['sass']
			},
			options: {
				livereload: true
			},
			client: {
				files: ['public/js/**/*.js'],
				tasks: ['jshint:client']
			},
			server: {
				files: ['server/**/*.js'],
				tasks: ['jshint:server']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('launch', ['watch']);
}