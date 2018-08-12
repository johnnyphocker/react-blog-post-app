import React, { Component } from 'react';
import './App.css';

import Formulario from './componentes/Formulario';
import Posts from './componentes/Posts';

class App extends Component {

  state = {
    posts: {}
  }

  agregarPost= (post) => {
    const posts = {...this.state.posts}
    posts[`post${Date.now()}`] = post;
    this.setState({
      posts
    });

  }

  render() {
    return (
      <div className="container" style={{margin: '25px'}}>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Formulario
              agregarPost={this.agregarPost}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Posts posts={this.state.posts} />
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
