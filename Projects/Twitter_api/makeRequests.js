const https = require("https");

const { Key, Secret } = require("./secrets.json");
const { extractInfoFromRawTweets } = require("./Tweets-Proccessors.js");

const getAuthHeader = () => Buffer.from(`${Key}:${Secret}`).toString("base64");
let token = null;
// neccessary params for making a request to api to get the Token(usage line 63)
const getTokenParams = {
    method: "POST",
    host: "api.twitter.com",
    path: "/oauth2/token",
    headers: {
        Authorization: `Basic ${getAuthHeader()}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
};

// prepare a makeRequest function (like spotify example but with requestBody for method POSt)
// we use it to make request for getting token and tweets
const makeRequestPromisified = (requestParams, requestBody) => {
    // console.log("[Request Headers]", requestParams);

    return new Promise((resolve, reject) => {
        //parameters validation
        if (!requestParams.host) {
            reject(new Error("host data is missing"));
            return;
        }
        if (!requestParams.method) {
            reject(new Error("method data is missing"));
            return;
        }
        if (!requestParams.path) {
            reject(new Error("path data is missing"));
            return;
        }
        // define callback function for https.request
        const requestCallback = (response) => {
            // console.log("[Request Callback]");
            let responseBody = "";
            response
                .on("data", (chunk) => (responseBody += chunk))
                .on("end", () => {
                    try {
                        const parsedBody = JSON.parse(responseBody);
                        // console.log(parsedBody);
                        resolve(parsedBody);
                    } catch (error) {
                        reject(new Error("JSON Parse error"));
                    }
                });
        };
        const request = https.request(requestParams, requestCallback);
        request
            .on("error", (error) => {
                reject(error);
            })
            .end(requestBody);
    });
};

// define getToken function to make request to api and get the token
const getTwitterTokenPromisified = () => {
    //make sure to get the token only once
    return new Promise((resolve) => {
        if (token) {
            console.log("[token was there]", token);
            resolve(token);
            return;
        }
        makeRequestPromisified(
            getTokenParams,
            "grant_type=client_credentials"
        ).then((tokenData) => {
            token = tokenData.access_token;
            console.log("[Token wasnt there]", token);
            resolve(token);
        });
    });
};

//define getTweets function to make a request to api to get the tweets
const getTweets = (screenName, tweetCount, TwitterToken) => {
    const queryString = `screen_name=${screenName}&tweet_mode=extended&count=${tweetCount}&exclude_replies=true`;

    // neccessary params for making a request to api to get the Tweets
    const getTweetParams = {
        method: "GET",
        host: "api.twitter.com",
        path: `/1.1/statuses/user_timeline.json?${queryString}`,
        headers: {
            Authorization: `Bearer ${TwitterToken}`,
        },
    };
    // body is null, because the method is GET
    return makeRequestPromisified(getTweetParams);
};

//use getToken function to get the token and tweets from api

const getNewsHeadlines = (screenName, tweetCount) => {
    return getTwitterTokenPromisified()
        .then((token) => getTweets(screenName, tweetCount, token))
        .then((rawTweets) => extractInfoFromRawTweets(rawTweets, screenName));
};

module.exports = { getNewsHeadlines };
