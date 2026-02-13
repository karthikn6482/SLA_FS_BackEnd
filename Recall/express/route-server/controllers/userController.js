export const getUser = (req, res) => {
    console.log("Query:", req.query);
    console.log("Params:", req.params);
  
    res.send("GET Request Working");
  };

  export const createUser = (req, res) => {
    console.log("Body:", req.body);
  
    res.json({
      message: "POST Request Working",
      data: req.body
    });
  };
  