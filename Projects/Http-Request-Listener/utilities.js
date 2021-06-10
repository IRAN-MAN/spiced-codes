const fs = require("fs");
const path = require("path");
var count = 0;

const responseForGET = `<!doctype html>
                       <html>
                         <title>Hello World!</title>
                         <p>Hello World!</p>
                       </html>`;

const requestsLog = (method, url, userAgent) => {
    const filePath = path.join(__dirname, "requests.txt");
    count++;
    let requestsLogs = `\nDate-and-Time: ${new Date().toString().slice(0, 24)}
Request Method: "${method}"
Request URL: "${url}"
User Agent Request Header: "${userAgent}"
total requests: ${count}
`;
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

const getHandler = (response, url) => {
    response.writeHead(200, {
        "Content-Type": "text/html",
    });
    if (url === "/requests.txt") {
        response.writeHead(200, {
            "Content-Type": "text/plain",
        });
        fs.createReadStream(`${__dirname}/requests.txt`).pipe(response);
        return;
    }
    response.end(responseForGET);
};

module.exports = { requestsLog, postHandler, headHandler, getHandler };
