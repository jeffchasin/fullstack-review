import React from 'react';

const RepoList = (props) => {

  const listRepos = props.repos.map(repo => {
    return (
      <section className="post" key={repo.id}>
        <h3 className="post-title"><a href={repo.html_url} >{repo.name}</a></h3>
        <p className="post-meta">by {repo.owner_login} with {repo.stargazers_count} stars</p>
      </section>
    );
  });

  return (
    <div className="content pure-u-1 pure-u-md-3-4">
      <h4> Top Github Repos </h4>
      <p>Here are the Top {props.repos.length} repos ranked by stars.</p>
      <div>
        <div className="posts">
          {listRepos}
        </div>
      </div>
    </div>
  );
};

export default RepoList;