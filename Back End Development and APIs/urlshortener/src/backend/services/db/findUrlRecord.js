const { UrlShortenerModel } = require("../../db/dbModels");

const findUrlRecord = {

  byId: function(id) {
    return this.find({shortenedUrlId: id});
  },

  byUrl: function(url) {
    return this.find({originalUrl: url});
  },

  find: async function(searchObject) {

    try {
      const searchResult = await UrlShortenerModel.findOne(searchObject).exec();
      return searchResult
    }
    catch(error) {
      console.log(error)
      throw new Error("Finding documents failed")
    }

  }
}



module.exports = findUrlRecord