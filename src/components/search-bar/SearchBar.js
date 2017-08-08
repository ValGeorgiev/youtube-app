import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../style/search-bar.css'

class SearchBar extends Component {

  componentDidMount() {
  	// console.log(this.searchInput)
  	this.searchInput.focus()
  }

  render() {
  	let { searchVideos } = this.props
  	
    return (
      <div className='search-wrapper'>
     	  <label htmlFor='search'> Search: 
     		  <input id='search' ref={(input) => { this.searchInput = input }} onChange={(event) => searchVideos(event)} type='text' />
 		    </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchVideos: PropTypes.func
}

// function SearchBar(props) {

//     return (
//       <div className='search-wrapper'>
//      	<label htmlFor='search'> Search: 
//      		<input id='search' onChange={(event) => props.searchVideos(event)} type='text' />
//  		</label>
//       </div>
//     );
// }

export default SearchBar;
