const subscriber1 = new Subscriber();
const subscriber2 = new Subscriber();

const publisher = new Publisher();

subscriber1.sub('t.me/javascript', (msg) => {
    console.log(msg);
});

subscriber2.sub('t.me/javascript', (msg) => {
    console.log(msg);
});

publisher.pub('t.me/javascript', 'Quiz #123');
