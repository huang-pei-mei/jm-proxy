module.exports = function (grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON('grunt-aws.json'),
    s3: {
      options: {
        accessKeyId: "<%= aws.key %>",
        secretAccessKey: "<%= aws.secret %>",
        bucket: "<%= aws.bucket %>"
      },
       aggReview: {
         cwd: "../FEC-Agg.review/public",
         src: "**",
         dest: "aggReview/"
      },
       price: {
        cwd: "../price-service/public",
        src: "**",
        dest: "Price/"
       },
       Proxy: {
         cwd: "./Public",
         src: "**",
         dest: "Proxy/"
       },
       Title: {
         cwd: "../title-service/public",
         src: "**",
         dest: "Title/"
       },
       Reviews: {
         cwd: "../reviews/dist",
         src: "**",
         dest: "Reviews/",
       },
       Sumary: {
         cwd: "../FEC-Publishers-Summary/public",
         src: "**",
         dest: "Summary/"
       },
       AlsoEnjoyed: {
        cwd: "../also-enjoyed-service/public",
        src: "**",
        dest: "alsoEnjoyed/"
       }

      // specificFiles: {
      //   files: [
      //   {
      //     src: "Public/Index.html",
      //     dest: "Proxy/index.html"
      //   }, {
      //     src: "Public/styles.css",
      //     dest: "Proxy/proxyStyles.css"
      //   }, {
      //     src: "../title-service/public/title-service.js",
      //     dest: "Title/title-service.js"
      //   }, {
      //     src: "../reviews/dist/reviews.js",
      //     dest: "Reviews/reviews.js"
      //   }, {
      //     src: "../FEC-Publishers-Summary/public/summary.js",
      //     dest: "Summary/summary.js"
      //   }]
      // }
    },

  });


  grunt.loadNpmTasks('grunt-aws');
  grunt.registerTask('default', ['s3']);

}