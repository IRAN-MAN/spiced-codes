const https = require("https");

const makeRequest = (requestParams, responseCallback) => {
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
        .end();
};

makeRequest(
    {
        method: "GET",
        host: "spicedify.herokuapp.com",
        path: "/spotify?q=madonna&type=artist",
    },
    (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(
            "Request was successful, results:",
            data.artists.items.length
        );
    }
);
