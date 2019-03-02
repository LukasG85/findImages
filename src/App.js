import React, { Component } from "react";
import Header from "./components/Header";
import SearchImages from "./components/SearchImages";
import Result from "./components/Result";

import "./style/App.css";

class App extends Component {
  state = {
    searchText: "",
    amount: "15",
    imageApiUrl: "https://pixabay.com/api",
    VideoApiUrl: "https://pixabay.com/api/videos/",
    apiKey: "11759085-f0e1db1670c9f8efc32ef66c2",
    images: [],
    videos: []
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      searchText: e.target.value
    });
  };

  handleAmountChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchText === "") return;
    if (prevState.searchText !== this.state.searchText) {
      const { searchText, amount, imageApiUrl, apiKey } = this.state;

      fetch(
        `${imageApiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true&lang=pl`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            images: data.hits
          })
        );
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchImages
          changeInput={this.handleInputChange}
          amountChange={this.handleAmountChange}
          state={this.state}
        />
        <Result images={this.state.images} />
      </div>
    );
  }
}

export default App;
