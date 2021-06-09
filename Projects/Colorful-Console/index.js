const http = require("http");
const querystring = require("querystring");
const chalk = require("chalk");

const htmlOnGET = `<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`;

http.createServer((request, response) => {
    const { method } = request;
    let body = [];

    request
        .on("error", (error) => console.log("[Error]", error))
        .on("data", (chunk) => body.push(chunk))
        .on("end", () => {
            body = Buffer.concat(body).toString();

            if (method === "GET") {
                getHandler(response);
            }

            if (method === "POST") {
                postHandler(body, response);
            }
        });
}).listen(8081);

const getHandler = (response) => {
    response.writeHead(200, {
        "Content-Type": "text/html",
    });
    response.end(htmlOnGET);
};

const postHandler = (body, response) => {
    const parsedBody = querystring.parse(body);
    console.log(chalk[parsedBody.color](parsedBody.text));
    response.end(htmlOnPost(parsedBody.color));
};

const htmlOnPost = (color) => {
    return `
    <!doctype html>
<html>
<title>it is better to have loved and lost than never to have loved at all</title>
<a href="/" style="color:${color}">it is better to have loved and lost than never to have loved at all</a>
</html>
    `;
};
