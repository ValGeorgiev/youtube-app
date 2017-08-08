import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

ThumbnailVideo.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    thumbnails: PropTypes.object,
    id: PropTypes.string
  }),
  onClickVideo: PropTypes.func
}

export default ThumbnailVideo;
