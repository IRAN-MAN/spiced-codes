const fs = require("fs");
const path = require("path");

const contentsFolder = path.join(__dirname, "files");

const mapSizes = (pathToCheck) => {
    const treeObj = {};
    const contents = fs.readdirSync(pathToCheck, { withFileTypes: true });
    contents.forEach((content) => {
        const fullFilePath = path.join(pathToCheck, content.name);
        if (content.isDirectory()) {
            treeObj[content.name] = mapSizes(fullFilePath);
            return;
        }
        const { size } = fs.statSync(fullFilePath);
        treeObj[content.name] = `${size} bytes`;
    });
    return treeObj;
};

const results = mapSizes(contentsFolder);
const filePath = path.join(__dirname, "files.json");

const writeToFile = (pathToWrite, data) => {
    const jsonFile = JSON.stringify(data, null, 4);
    fs.writeFile(pathToWrite, jsonFile, { encoding: "utf8" }, (error) => {
        if (error) {
            console.log("Error", error);
            return;
        }
        console.log("the JSON file successfully created!");
    });
};

writeToFile(filePath, results);
