const express = require("express");
const hbTemplate = require("express-handlebars");
const path = require("path");

const PORT = 8080;
const projects = require("./projectsList.json");
const app = express();

app.engine("handlebars", hbTemplate());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.render("homepage", {
        title: "Portfolio-Handlebars",
        projects,
    });
});

app.listen(PORT, () => console.log(`Server is listening to port: ${PORT}`));
