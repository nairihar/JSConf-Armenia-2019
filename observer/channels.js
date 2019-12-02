class Observable {
    // each instance of the Observer class
    // starts with an empty array of things (observers)
    // that react to a state change
    constructor() {
        this.observers = []
    }

    // add the ability to subscribe to a new object / DOM element
    // essentially, add something to the observers array
    subscribe(f) {
        this.observers.push(f)
    }

    // add the ability to unsubscribe from a particular object
    // essentially, remove something from the observers array
    unsubscribe(f) {
        this.observers = this.observers.filter((subscriber) => subscriber !== f)
    }

    // update all subscribed objects / DOM elements
    // and pass some data to each of them
    notify(data) {
        this.observers.forEach((observer) => observer(data))
    }
}

// instantiate new Observer class
const observer = new Observable()


// subscribe to some observers

// sub 1
observer.subscribe('channelName', (msg) => console.log(msg)) // Hello

// sub 2
observer.subscribe('channelName2', (msg) => console.log(msg)) // Hello


observer.notify('channel', 'Hello')
