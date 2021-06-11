const cluster = require("cluster");
const os = require("os");

const myCPUs = os.cpus();

// console.log(cluster.setupMaster({ exec: "server.js" }));

cluster.setupMaster({ exec: __dirname + "/server.js" });

for (let i = 0; i < myCPUs.length; i++) {
    cluster.fork();
}

cluster.on("exit", function (worker) {
    console.log(worker.process.pid + " bit the dust");
    cluster.fork();
});
