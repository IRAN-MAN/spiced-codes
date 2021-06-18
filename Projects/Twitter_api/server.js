const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;
const { getNewsHeadlines } = require("./makeRequests");

app.use(express.static(path.join(__dirname, "public")));

app.get("/links.json", (request, response) => {
    const tweetsRequests = Promise.all([
        getNewsHeadlines("TheOnion", 3),
        getNewsHeadlines("CNN", 3),
        getNewsHeadlines("BBCNews", 3),
    ]);

    tweetsRequests.then((allTweets) => response.json(allTweets.flat()));
});

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
