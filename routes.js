const express = require("express");
const routes = express.Router();
const teachers = require("./teachers");

routes.get("/", function(req, res){
    return res.redirect("/teachers");
});

routes.get("/teachers", function(req, res){
    return res.render("teachers/index");
});

routes.get("/teachers/create", function(req, res){
    return res.render("teachers/create");
});

routes.get("/teachers/:index", teachers.show);

routes.get("/teachers/:index/edit", teachers.edit);

routes.get("/members", function(req, res){
    return res.render("members");
});

//post

routes.post("/teachers", teachers.post);

//exports

module.exports = routes;


