import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class App extends Component {
  render() {
    const { data: { refetch, loading, hero, error } } = this.props;
    if(loading) {
      return (<p>Loading…</p>);
    }
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>{error && error.message}</p>
          <h3>{!error && hero.name}</h3>
          <button onClick={() => refetch()}>
            Refetch
          </button>
        </header>
      </main>
    );
  }
}

export default graphql(
  gql`{
    hero {
      name
    }
}`,
)(App)
