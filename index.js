const dateFormatter = require('./dateFormatter');

function helloHTTP(req, res) {
    res.status(200).send(dateFormatter.formattedDate());
}

function helloPubSub(event, callback) {
    console.log(`Hello PubSub ${dateFormatter.formattedDate()}`);
    callback();
}

function helloStorage(event, callback) {
    console.log(`Hello Storage ${dateFormatter.formattedDate()}`);
    callback();
}

exports.helloHTTP = helloHTTP;
exports.helloPubSub = helloPubSub;
exports.helloStorage = helloStorage;