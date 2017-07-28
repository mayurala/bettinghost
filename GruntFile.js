module.exports = function(grunt){
grunt.initConfig({
jslint: { 
    // configure the task    
      server: {
        src: [ 
          'index.js'
        ],
        exclude: [
          'node_module/**/*.js'
        ],
        options: {
          log: 'out/server-lint.log',
          errorsOnly: true,
          failOnError: false, 
          
        }
      }
}
})
grunt.loadNpmTasks('grunt-jslint');
grunt.registerTask('default', 'jslint');
}