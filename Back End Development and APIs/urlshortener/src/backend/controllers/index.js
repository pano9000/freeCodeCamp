

module.exports = {
  
  rootGet: (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
  },

  helloGet: (req, res) => {
    res.json({ greeting: 'hello API' });
  },

  shorturlGet: require("./shorturlGet"),

  shorturlPost: require("./shorturlPost"),
}