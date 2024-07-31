const logger = (req, res, next) => {
  console.log("inside looger");
  console.log(req.url, req.method);
  //   if (req.method === "GET") {
  //     res.send("a get method");
  //   } else {
  next();
  //   }
};

const auth = (req, res, next) => {
  const { admin } = req.query;
  if(admin === 'john'){
    next()
  }
  else{
    res.send("not authorized")
  }
};

module.exports = {
  logger,auth
};
