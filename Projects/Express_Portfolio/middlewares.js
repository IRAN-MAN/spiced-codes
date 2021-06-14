const basicAuth = require("basic-auth");
var userURL;
const userName = "milado";
const UserPass = "miladi";

const cookieCheckMiddleware = (request, response, next) => {
    if (request.cookies.accepted || request.url === "/cookie") {
        return next();
    } else {
        userURL = request.url;
        response.redirect("/cookie");
    }
};

const cookieHandler = (request, response) => {
    console.log(request.body);
    if (request.body.cookie) {
        response.cookie("accepted", "true").redirect(userURL);
    }
};

const basicAuthMiddleware = (request, response, next) => {
    const credentials = basicAuth(request);
    console.log(credentials);
    if (
        !credentials ||
        credentials.name !== userName ||
        credentials.pass !== UserPass
    ) {
        response.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to proceed."'
        );
        response.sendStatus(401);
        return;
    }
    next();
};
module.exports = { cookieCheckMiddleware, cookieHandler, basicAuthMiddleware };
