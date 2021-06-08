const fs = require("fs");
const path = require("path");

const rootFolder = ".";

const logSizes = (folder) => {
    fs.readdir(folder, { withFileTypes: true }, (error, entries) => {
        if (error) {
            console.log("error", error);
            return;
        }
        entries.forEach((entry) => {
            if (entry.isDirectory()) {
                const fullDirectoryPath = path.join(folder, entry.name);
                logSizes(fullDirectoryPath);
            } else {
                const fullFilePath = path.join(folder, entry.name);
                fs.stat(fullFilePath, (error, stat) => {
                    if (error) {
                        console.log("error", error);
                        return;
                    }
                    console.log(`${fullFilePath}: ${stat.size} bytes`);
                });
            }
        });
    });
};

logSizes(rootFolder);
