const http = require("http");
const path = require("path");

const { checkAndServeFiles } = require("./utilities.js");

const server = http.createServer((request, response) => {
    const { method, url } = request;

    request.on("error", (error) => console.log("[Error on request]", error));
    response.on("error", (error) => console.log("[Error on response]", error));

    if (method != "GET") {
        response.statusCode = 405;
        return response.end();
    }

    const projectsPath = path.normalize(`${__dirname}/projects/${url}`);

    if (!projectsPath.startsWith(__dirname + "/projects")) {
        response.statusCode = 403;
        return response.end();
    }

    if (url === "/") {
        return response.end("home page");
    }
    checkAndServeFiles(projectsPath, response, url);
});

server.listen(8080, () => console.log("Listening on port 8080"));
