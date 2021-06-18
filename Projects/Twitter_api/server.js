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

    tweetsRequests.then((allTweets) => {
        const sortedTweets = allTweets.flat().sort((a, b) => {
            return new Date(a.created_at) < new Date(b.created_at) ? 1 : -1;
        });
        response.json(sortedTweets);
    });
});

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
