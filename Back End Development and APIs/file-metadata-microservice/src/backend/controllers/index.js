

module.exports = {

  root: {
    get: (req, res) => res.sendFile(process.cwd() + '/views/index.html'),
  },

  api: {

    fileanalysis: {
      post: require("./api/fileanalysis")
    },

    upload: require("./api/multer")

  },

  rateLimiter: {
    post: require("./rateLimiter").post,
    get: require("./rateLimiter").get
  }
}