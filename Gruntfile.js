module.exports = function (grunt) {

  grunt.initConfig({
    s3: {
      options: {
        key: './config.keys.AccessKeyID',
        secret: './config.keys.SecretAccessKey',
        bucket: './config.keys.AWSBucket',
        access: 'public-read',
        headers: {
          // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
          "Cache-Control": "max-age=630720000, public",
          "Expires": new Date(Date.now() + 63072000000).toUTCString()
        }
      },

      sync: [
        {
          // only upload this document if it does not exist already
          src: 'Index.html',
          options: { gzip: true }
        },
      ]
    }
  });

  grunt.loadNpmTasks('grunt-s3');
  grunt.registerTask('default', ['s3']);

}