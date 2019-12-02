const app = new App()

// call --> req: { number: 5 }

app.use((req, res, next) => {
    if (req.number < 0) {
        next(new Error('negative number'))
    }
    yield;
    req.number += 2;
})


app.use((req, res, next) => {
    req.number += 1
    yield;
    req.number += 1
})

