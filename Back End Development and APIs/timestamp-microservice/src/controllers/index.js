module.exports = {
  root: {
    get: (req, res) => res.sendFile(process.cwd() + '/views/index.html'),
  },

  api: {

    hello: {
      get: (req, res) => res.json({greeting: 'hello API'}),
    },

    date: {
      get: require("./api/date")
    }
  }
}