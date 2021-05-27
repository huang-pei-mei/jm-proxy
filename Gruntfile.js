module.exports = function (grunt) {

  grunt.initConfig({
    aws: grunt.file.readJSON('grunt-aws.json'),
      s3: {
      options: {
        accessKeyId: "<%= aws.key %>",
        secretAccessKey: "<%= aws.secret %>",
        bucket: "<%= aws.bucket %>"
      },
      build: {
        cwd: "../price-service/public",
        src: "**",
        dest: "Price/"
      },
      specificFiles: {
        files: [{
          src: "Public/Index.html",
          dest: "Proxy/Index.html"
        },{
          src: "Public/styles.css",
          dest: "Proxy/proxyStyles.css"
        }, {
          src: "../title-service/public/title-service.js",
          dest: "Title/title-service.js"
        }, {
          src: "../reviews/dist/reviews.js",
          dest: "Reviews/reviews.js"
        }, {
          src: "../FEC-Publishers-Summary/compiled/client/dist/summary.js",
          dest: "Summary/summary.js"
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-aws');
  grunt.registerTask('default', ['s3']);

}