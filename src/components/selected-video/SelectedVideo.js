import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../style/selected-video.css'

const YOUTUBE_LINK = 'https://www.youtube.com/embed/'

class SelectedVideo extends Component {
  render() {
  	let { video } = this.props
  	
    return !!video ? (
      <div className="selected-video-wrapper">
  	    <iframe title={video.title} frameBorder="0" allowFullScreen src={`${YOUTUBE_LINK}${video.id}`}></iframe>     	
    		<div className='video-description'>
    			<h2>{video.title}</h2>
    			<p>{video.description}</p>
    		</div>
      </div>
    ) : null;
  }
}

SelectedVideo.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string
  })
}

export default SelectedVideo;
