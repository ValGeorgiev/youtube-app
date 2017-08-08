import React, { Component } from 'react';
import SelectedVideo from './selected-video/SelectedVideo'


class Video extends Component {
  constructor() {
  	super()

  	this.state = {
  		selectedVideo: {}
  	}
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
  	let { selectedVideo } = this.state

    return (
      <div className="video-wrapper">
      	<SelectedVideo video={selectedVideo} />
      </div>
    );
  }
}

export default Video
