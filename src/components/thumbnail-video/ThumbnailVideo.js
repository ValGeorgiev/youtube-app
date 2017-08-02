import React, { Component } from 'react';
import '../../style/thumbnail-video.css'

class ThumbnailVideo extends Component {

  render () {
    let { video, onClickVideo } = this.props
    return (
	  <div key={video.id} onClick={() => onClickVideo(video.id)} className='thumbnail-video'>
        <img src={video.thumbnails.medium.url} alt={video.title} />
        <span>{video.title}</span>
      </div>
    );
  }
}

export default ThumbnailVideo;
