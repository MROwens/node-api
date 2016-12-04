module.exports = (express) => {
  // Instantiate express router method.
  const router = express.Router();
  // Include URL shortener logic
  const util = require('../modules/util.js');

 // Check if the connection to the server is good.
  router.post('/status', (req, res) =>{
    res.json({healthy: true});
  });

  // Set URL for the entry point for the API
  router.post('/api/v1/:url', (req, res) =>{
    // Contains the orgininal URL to be shortened

    const url = req.body.url;

    // Check if a URL to be shortened was given
    // If URL was given, run call the URL shortener
    if(url === ''){
      // Respond with error message if no URL was given
      res.json({"origin": "No URL Provided", "new": "error"});
    }else{
      // Call URL shortener from the util.js file
      const generateShortenedUrl = util.stringGen(6);
      // Respond with original URL generated shortened URL
      res.json({"origin": url, "new": generateShortenedUrl});
    }

  });

  return router;
}
