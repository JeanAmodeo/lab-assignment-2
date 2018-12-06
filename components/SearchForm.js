
import React, { Component } from "react";

export default class SearchForm extends Component {
    constructor(props) {
    super(props);

    this.state = {};
  }

 
  formSubmitted = event => {

    if (event.target.newsSource.value != "") {
      this.props.setNewsSource(event.target.newsSource.value);
    }
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {/* Search Input */}
        <div id="search">
          <h3>Enter newsapi.org source</h3>
          {/* Note event handler */}
          <form onSubmit={this.formSubmitted}>
            {/* The input field */}
            <input
              name="newsSource"
              placeholder="News Source name"
              type="text"
            />
            {/* Button click will trigger submit */}
            <button>Update News</button>
          </form>
        </div>
      </div>
    );
  }
}
