const fs = require("fs");
const path = require("path");

const rootFolder = ".";

const logSizes = (pathToCheck) => {
    fs.readdir(pathToCheck, { withFileTypes: true }, (error, entries) => {
        if (error) {
            console.log("error", error);
            return;
        }
        entries.forEach((entry) => {
            const fullFilePath = path.join(pathToCheck, entry.name);
            if (entry.isDirectory()) {
                logSizes(fullFilePath);
            }
            fs.stat(fullFilePath, (error, stat) => {
                if (error) {
                    console.log("error", error);
                    return;
                }
                console.log(`${fullFilePath}: ${stat.size} bytes`);
            });
        });
    });
};

logSizes(rootFolder);
