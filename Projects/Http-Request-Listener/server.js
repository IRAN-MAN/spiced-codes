const http = require("http");

const responseForGET = `<!doctype html>
                       <html>
                         <title>Hello World!</title>
                         <p>Hello World!</p>
                       </html>`;

const server = http.createServer((request, response) => {
    const { method, url, headers } = request;

    let body = [];

    console.log(`incoming '${method}' request on '${url}' with headers:\n`);
    console.log(headers);

    request
        .on("error", (error) => console.log("[Error]", error))
        .on("data", (chunk) => body.push(chunk))
        .on("end", () => {
            body = Buffer.concat(body).toString();

            if (method === "GET" && "HEAD") {
                response.writeHead(200, {
                    "Content-Type": "text/html",
                });
            }

            if (method === "HEAD") {
                response.end();
            }

            if (method === "GET") {
                response.end(responseForGET);
            }

            if (method === "POST") {
                console.log("Request Body on POST:", body);
                response.writeHead(302, {
                    location: "/",
                });
            }
            response.statusCode = 405;
            response.end();
        });
});
server.listen(8080);
