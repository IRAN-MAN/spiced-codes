const extractURLFromTweets = (tweet) => {
    // check if any part of the entities is undefined then return null
    if (!tweet.entities) {
        return null;
    }
    if (!tweet.entities.urls) {
        return null;
    }
    // console.log(tweet.entities.urls);

    // return the url used in tweet
    const url = tweet.entities.urls[0]?.url;
    return url;
};

// define specific function to extract text from the tweet without url
const extractTextFromTweets = (tweet, url) => {
    let text = tweet.full_text.replace(url, "");
    return text.split("https")[0].trim();
};

//// define specific function to extract url from the tweet
const extractInfoFromRawTweets = (rawTweets, screenName) => {
    // console.log(rawTweets);

    return rawTweets
        .filter((tweet) => tweet.entities.urls.length)
        .map((tweet) => {
            // usage of isolated functions to retrieve url and text from the raw tweet json file
            const url = extractURLFromTweets(tweet);
            // the final object with text and url to use in ticker project
            return {
                title: `${extractTextFromTweets(tweet, url)} (${screenName}) `,
                url,
            };
        });
};

// console.log(extractInfoFromRawTweets(rawTweets));

module.exports = { extractInfoFromRawTweets };
