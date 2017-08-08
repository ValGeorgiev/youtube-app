import React, { Component } from 'react';
import SearchBar from './search-bar/SearchBar'
import VideoWrapper from './video-wrapper/VideoWrapper'


class Home extends Component {
  constructor() {
  	super()

  	this.state = {
  		searchPhrase: ''
  	}
  }

  search(event) {
  	this.setState({
  	  searchPhrase:	event.target.value
  	})
  }

  render() {
  	let { searchPhrase } = this.state

    return (
      <div className="wrapper">
      	<SearchBar searchVideos={(event) => this.search(event)} />
       	<VideoWrapper phrase={searchPhrase} />
      </div>
    );
  }
}

export default Home
