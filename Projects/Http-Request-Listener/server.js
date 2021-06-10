const http = require("http");

const {
    requestsLog,
    postHandler,
    headHandler,
    getHandler,
} = require("./utilities");

http.createServer((request, response) => {
    const { method, url, headers } = request;
    const userAgent = headers["user-agent"];
    let body = [];

    console.log(`incoming '${method}' request on '${url}' with headers:\n`);
    console.log(headers);

    request
        .on("error", (error) => console.log("[Error]", error))
        .on("data", (chunk) => body.push(chunk))
        .on("end", () => {
            body = Buffer.concat(body).toString();

            if (method === "HEAD") {
                headHandler(response);
            }

            if (method === "GET") {
                getHandler(response, url);
            }

            if (method === "POST") {
                postHandler(body, response);
            }

            response.statusCode = 405;
            response.end();
            requestsLog(method, url, userAgent);
        });
    response.on("error", (error) => console.log("[Error]", error));
}).listen(8081);
