const fs = require("fs");
const path = require("path");

const generateProjectsPage = () => {
    const projectsPath = path.join(__dirname, "projects");
    const projects = fs.readdirSync(projectsPath, { withFileTypes: true });
    var indexHtml = `
    <!doctype html>
    <html>
        <head>
            <title>Portfolio</title>
        </head>
        <body>
    <h3>List of contents:</h3>
    <ul>`;
    projects.forEach((project) => {
        indexHtml += `
        <li><a href=${project.name}>${project.name}</a></li>
        `;
    });

    indexHtml += `
    </ul>
    </body>
    </html>
    `;
    // console.log(indexHtml);
    return indexHtml;
};

const checkAndServeFiles = (filePath, response, url) => {
    fs.stat(filePath, (error, stats) => {
        if (error) {
            console.log("File not found", error);
            response.statusCode = 404;
            return response.end();
        } else {
            if (stats.isDirectory()) {
                if (!url.endsWith("/")) {
                    response.writeHead(302, {
                        location: url + "/",
                    });
                    return response.end();
                }
                makeReadStream(response, `${filePath}index.html`);
            } else {
                setFileHeader(response, filePath);
                makeReadStream(response, filePath);
            }
        }
    });
};

const makeReadStream = (response, filePath) => {
    try {
        const readStream = fs.createReadStream(`${filePath}`);
        readStream.pipe(response);
    } catch (error) {
        console.log("[File not found]", error);
        response.statusCode = 404;
        return response.end();
    }
};

const setFileHeader = (response, filePath) => {
    const fileExt = path.extname(filePath);
    switch (fileExt) {
        case ".html":
            response.setHeader("Content-Type", "text/html");
            break;
        case ".css":
            response.setHeader("Content-Type", "text/css");
            break;
        case ".js":
            response.setHeader("Content-Type", "text/javascript");
            break;
        case ".json":
            response.setHeader("Content-Type", "application/json");
            break;
        case ".gif":
            response.setHeader("Content-Type", "image/gif");
            break;
        case ".jpg":
            response.setHeader("Content-Type", "image/jpeg");
            break;
        case ".png":
            response.setHeader("Content-Type", "image/png");
            break;
        case ".svg":
            response.setHeader("Content-Type", "image/svg+xml");
            break;
    }
};

module.exports = { checkAndServeFiles, generateProjectsPage };
