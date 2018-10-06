let mongoose = require('mongoose')

const server = 'localhost'
const database = 'article'
const user = ''
const password = ''

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

let ArticleSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    publisher_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);
