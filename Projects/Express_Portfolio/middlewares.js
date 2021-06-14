var userURL;

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

module.exports = { cookieCheckMiddleware, cookieHandler };
