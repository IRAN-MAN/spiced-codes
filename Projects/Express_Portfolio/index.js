const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8080;

const {
    cookieCheckMiddleware,
    basicAuthMiddleware,
    cookieHandler,
} = require("./middlewares.js");

const cookieHtml = `
<!DOCTYPE html>
<html>
<head>    
    <title>Cookie</title>
</head>
<body>
    <p>
        We use cookies to help our website work and to analyse our traffic. 
        We also share information about your use of our site with our analytics partner. 
        To continue using our website you need to accept our cookies policy.
    </p>
    <form method="POST" action="/cookie">
        <input id="cookie" type="checkbox" name="cookie" >
        <label for="cookie">I agree</label>
        <button type="submit">Submit</button>
    </form>
    
</body>
</html>`;

// app.use(basicAuthMiddleware);

app.use(cookieParser());
app.use(cookieCheckMiddleware);
app.use(express.urlencoded({ extended: true }));
app.get("/Pane", basicAuthMiddleware);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.send("Home Page");
});
app.get("/cookie", (request, response) => {
    response.send(cookieHtml);
});
app.post("/cookie", cookieHandler);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
