const privateList = [];

function wait(timeout) {
    return new Promise((r) => {
        setTimeout(r, timeout);
    });
}

function find() {
    // ...
}

function each() {
    // ...
}

module.exports = {
    wait, find, each,
};
