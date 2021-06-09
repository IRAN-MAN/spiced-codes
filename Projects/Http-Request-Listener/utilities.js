const fs = require("fs");
const path = require("path");
const responseForGET = `<!doctype html>
                       <html>
                         <title>Hello World!</title>
                         <p>Hello World!</p>
                       </html>`;

const requestsLog = (method, url, userAgent) => {
    const filePath = path.join(__dirname, "requests.txt");
    let requestsLogs = `\nDate-and-Time: ${new Date().toISOString()}
Request Method: ${method}
Request URL: ${url}
User Agent Request Header: ${userAgent}`;
    fs.appendFile(filePath, `${requestsLogs}\n`, (error) => {
        if (error) {
            console.log("[Error writing file!]", error);
        }
        console.log("Write Successfull!");
    });
};

const postHandler = (body, response) => {
    console.log("Request Body on POST:", body);
    response.writeHead(302, {
        location: "/",
    });
};

const headHandler = (response) => {
    response.writeHead(200, {
        "Content-Type": "text/html",
    });
    response.end();
};

const getHandler = (response) => {
    response.writeHead(200, {
        "Content-Type": "text/html",
    });
    response.end(responseForGET);
};

module.exports = { requestsLog, postHandler, headHandler, getHandler };
