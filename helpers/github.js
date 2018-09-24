const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, function (error, response, body) {
    if (error) {
      console.error('getReposByUsername request error: ' + response.statusCode);
    } else if (response.statusCode === 200) {
      console.log('getReposByUsername request body: ', body);
      callback(body);
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;
