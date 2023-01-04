function fileanalysis(req, res) {

  try {
    if (req.file === undefined) {
      throw new Error("Empty File")
    }
    const fileInfo = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    };

    res.status(200).json(fileInfo)

  }
  catch (error) {
    res.status(500).json({"error": error.message  })
  }


};

module.exports = fileanalysis