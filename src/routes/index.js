module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) =>{
    res.json({healthy: true});
  });

  router.get('/api/v1', (req, res) =>{
    var output = util.stringGen(6);

    console.log(output);

  });


  return router;
}
