import React, { Component } from 'react';
import VideoWrapper from './video-wrapper/VideoWrapper'


class Video extends Component {
  constructor(props) {
  	super(props)

  	this.state = {
      searchPhrase: props.match.params.id
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
  		searchPhrase: nextProps.match.params.id
  	}  
  }
 
  render() {

  	let { searchPhrase } = this.state

    return (
      <div className="video-wrapper">
      	<VideoWrapper phrase={searchPhrase} />
      </div>
    );
  }
}

export default Video
