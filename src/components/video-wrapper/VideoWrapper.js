import React, { Component } from 'react'
import search from 'youtube-search'
import ThumbnailVideo from '../thumbnail-video/ThumbnailVideo'
import SelectedVideo from '../selected-video/SelectedVideo'
import '../../style/video-wrapper.css'

const OPTIONS = {
  maxResults: 10,
  key: 'AIzaSyCigI5Dmu4nnoaP0hb-5ijLNZZctYzvjGo'
}

class VideoWrapper extends Component {
  constructor(props) {
  	super(props)

  	this.state = {
  	  videos: [],
  	  selectedVideo: {},
      searchPhrase: props.phrase
  	}
  }

  componentWillReceiveProps(nextProps) {
    let { phrase } = nextProps
  	let self = this

    search(phrase, OPTIONS, function(err, videos) {
      if (!!err) {
        return console.log(err)
      }

      self.setState({
        searchPhrase: phrase,
        selectedVideo: videos[0],
        videos: videos.slice(1)
      })
    })
  }

  componentWillMount() {
    let self = this
    let { searchPhrase } = this.state

  	search(searchPhrase, OPTIONS, function(err, videos) {
  	  if (!!err) {
  	  	return console.log(err)
  	  }

  	  self.setState({
  	  	selectedVideo: videos[0],
  	  	videos: videos.slice(1)
  	  })
  	})
  }

  createOtherVideos() {
  	let { videos } = this.state

  	return videos.map((video) => {
  		return <ThumbnailVideo key={video.id} video={video} onClickVideo={(id) => this.selectVideo(id)}/>
  	})
  }

  selectVideo(id) {
  	let { videos, searchPhrase } = this.state
  	let length = !!videos ? videos.length : 0

  	for (let i = 0; i < length; i++) {
  		if (videos[i].id === id) {
  			let self = this
			  search(searchPhrase, OPTIONS, function(err, new_videos) {
  			  if (!!err) {
  			  	return console.log(err)
  			  }

			    self.setState({
		  		  selectedVideo: videos[i],
		  		  videos: new_videos.filter(v => v.id !== id)	
		  	  })
          window.scrollTo(0, 0)
		  	})
		  	break;
  		}
  	}
  }

  render() {
	  let { selectedVideo } = this.state

    return (
      <div className="video-wrapper">
   		  <SelectedVideo video={selectedVideo} />
        <div className='others-wrapper'>
   		 	  {this.createOtherVideos()}
   		  </div>
      </div>
    );
  }
}

export default VideoWrapper;
