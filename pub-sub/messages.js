const subscriber1 = new Subscriber()
const subscriber2 = new Subscriber()

const publisher = new Publisher()

subscriber1.sub('something', (msg) => {
    console.log(msg) // Hello
})

subscriber2.sub('something', (msg) => {
    console.log(msg) // Hello
})

publisher.pub('something', 'Hello')
