const rateLimiter = require("express-rate-limit");

const post = rateLimiter({
  windowMs: 1 * 30 * 1000, // 30 sec
  max: (process.env.PROJECTENV_ENV === "test") ? 1000 : process.env.RATELIMIT_API_POST || 10 // limit each IP to x requests per windowMs in production, or 1000 in test
});


const get = rateLimiter({
  windowMs: 5 * 60 * 1000, // 5 minute
  max: process.env.RATELIMIT_ALL_GET || 500 // limit each IP to 500 requests per windowMs
});

module.exports = { post, get }