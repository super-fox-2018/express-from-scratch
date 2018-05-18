const app = require("express");
const routes = app.Router();

routes.get("/", function(req,res){
  // res.send("Welcome to: 🏡 127.0.0.1 🏡")
  res.render("Home.ejs", {home: "Welcome to: 🏡 127.0.0.1 🏡",
  paragraph: "There is no place like here."});
});

routes.get("/students", function(req,res){
  res.render("Student.ejs", {titleStudent: 'New Student Form'})
});

routes.post("/students", function(req,res){
  let input = req.body;
  let result = "Ini isiny!: " + input.firstName + " " +  input.lastName + " " +  input.email;
  res.render("submittedStudent.ejs", {
    Submitted: "Your form has been submitted!",
    paragraph: "These are the input you have filled: ",
    displayInput: `${result}`
  });
});

routes.get("/teachers", function(req,res){
  // res.send("Masuk k dalem teachers form!")
  res.render("Teachers.ejs", {titleTeachers: "Teacher's data"})
});


module.exports = routes;