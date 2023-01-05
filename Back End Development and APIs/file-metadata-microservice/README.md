# [File Metadata Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)

My solution for the "File Metadata Microservice" project from [freeCodeCamp](https://www.freecodecamp.org/).

Check the code in action: [Live Demo on Replit](https://boilerplate-project-filemetadata.panagiotispapa3.repl.co)

Backend:
* Nodejs
* Express (for the HTTP Server)
* Multer (for handling file upload)
* express-rate-limit (for rate limiting POST request to reduce risk of DDOS a bit)

Frontend (for simplicity's sake not using any JS framework):
* Plain JS
* Plain CSS
* Plain HTML

TODO:
* Check if Multer's memory store "empties" itself, or if something needs to be done manually
* Add loading spinner to frontent, when uploading files

---

FCC Ressources
* [Github with Original Boilerplate from FCC](https://github.com/freeCodeCamp/boilerplate-project-filemetadata)
* [FCC Version Live Replit Demo](https://file-metadata-microservice.freecodecamp.rocks/)