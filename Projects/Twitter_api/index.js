const https = require("https");

const { Key, Secret } = require("./secrets.json");

const getAuthHeader = () => Buffer.from(`${Key}:${Secret}`).toString("base64");

// neccessary params for making a request to api to get the Token
const params = {
    method: "POST",
    host: "api.twitter.com",
    path: "/oauth2/token",
    headers: {
        Authorization: `Basic ${getAuthHeader()}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
};

// prepare a makeRequest function (like spotify example but with requestBody for method POSt)
const makeRequest = (requestParams, requestBody, responseCallback) => {
    console.log("[Request Headers]", requestParams);

    //parameters validation
    if (!requestParams.host) {
        responseCallback(new Error("host data is missing"));
    }
    if (!requestParams.method) {
        responseCallback(new Error("method data is missing"));
    }
    if (!requestParams.path) {
        responseCallback(new Error("path data is missing"));
    }
    // define callback function for https.request
    const requestCallback = (response) => {
        console.log("[Request Callback]");
        let responseBody = "";
        response
            .on("data", (chunk) => (responseBody += chunk))
            .on("end", () => {
                console.log("[Request Callback: body from response-on end]");
                try {
                    const parsedBody = JSON.parse(responseBody);
                    responseCallback(null, parsedBody);
                } catch (error) {
                    responseCallback(new Error("JSON Parse error"));
                }
            });
    };

    const request = https.request(requestParams, requestCallback);
    request
        .on("error", (error) => {
            responseCallback(error);
        })
        .end(requestBody);
};

// define getToken function to make request to api and get the token
const getTwitterToken = (callback) => {
    makeRequest(params, "grant_type=client_credentials", (error, data) => {
        if (error) {
            callback(error);
            return;
        }
        // coming data is token data
        console.log("[Request was successful!]", data);
        // we only need the access token from the data
        callback(null, data.access_token);
    });
};

getTwitterToken((error, token) => {
    console.log("[Token]", token);
});
