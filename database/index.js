const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let db = mongoose.connection;
db.on('error', console.error('DB connection error: ', error));

db.once('open', function () {
  let repoSchema = mongoose.Schema({
    id: {
      type: Number,
      required: true,
      index: true,
      unique: true
    },
    name: { type: String, required: true, },
    owner_login: { type: String, required: true },
    html_url: { type: String, required: true },
    stargazers_count: { type: Number },
    updated_at: { type: String },
    timestamp: { type: Number },
  });

  let Repo = mongoose.model('Repo', repoSchema);

  let save = (/* TODO */) => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
  };
});

module.exports.save = save;