import React, { Component } from 'react';
import '../../style/search-bar.css'

// class SearchBar extends Component {

//   render() {
//   	let { searchVideos } = this.props
//     return (
//       <div className='search-wrapper'>
//      	<label htmlFor='search'> Search: 
//      		<input id='search' onChange={(event) => searchVideos(event)} type='text' />
//  		</label>
//       </div>
//     );
//   }
// }

function SearchBar(props) {

    return (
      <div className='search-wrapper'>
     	<label htmlFor='search'> Search: 
     		<input id='search' onChange={(event) => props.searchVideos(event)} type='text' />
 		</label>
      </div>
    );
}

export default SearchBar;
