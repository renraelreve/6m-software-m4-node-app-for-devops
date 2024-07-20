
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello world!");
}

// Function for the /home endpoint
function home(req, res) {
  res.send("This is the home page. To test github circleci testing");
}

// Function for the /user endpoint
function createUser(req, res) {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}`);
  res.send(`User created with Name: ${name} and Email: ${email}`);
}

module.exports = {
  print,
  home,
  createUser
};
