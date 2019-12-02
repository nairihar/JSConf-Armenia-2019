const { MongoClient } = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017'

// there can be some other options too

export default MongoClient.connect(url)
