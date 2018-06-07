import React, { Component } from "react";
import giph from "./giphy.gif";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/comment").then(res => {
      this.setState({
        comments: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Liste des commentaires</h3>
        <img src="http://static8.viadeo-static.com/NCBh_OuLjnWZ7mUpjiHmRyS0Ohg=/300x300/member/002wn04ququ6x6?ts=1487873557000" />
        {this.state.comments.length > 10 ? (
          <p>Il y en a trop!</p>
        ) : (
          <p>Pas assez</p>
        )}
        {this.state.comments.length === 0 && <img src={giph} />}
        {this.state.comments.map(comment => <p>{comment.content}</p>)}
      </div>
    );
  }
}

export default App;
