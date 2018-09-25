import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };

  }

  componentDidMount() {
    var that = this;

    $.ajax({
      method: 'GET',
      url: '/repos.json'
    })
      .done(function (result) {
        // console.log('GET repos.json, result" ', result);
        that.setState({
          repos: result
        });
      });
  }

  search(term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: { term: term }
    })
      .done(function (msg) {
        console.log('Search term posted to server: ' + msg);
      });
  }

  render() {
    return (
      <div id="layout" className="pure-g">
        <div className="sidebar pure-u-1 pure-u-md-1-4">
          <div className="header">
            <h1 className="brand-title">Github Fetcher</h1>
            <h2 className="brand-tagline">Add more repos!</h2>
            <Search onSearch={this.search.bind(this)} />
          </div>
        </div>
        <RepoList repos={this.state.repos} />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));