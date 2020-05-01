import React, { Component } from 'react';
import './style.scss';

let placeholderText = "Search iTune Music";
let items = ['all', 'movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm'];

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            isAboutVisible: false,
            searchedTerm: 'all',
            selectedTab: 0
        };
    }
    onSortClicked(e, id) {
        e.preventDefault();      
        this.setState({selectedTab: id});
        let temp = '?term=' + this.state.searchedTerm + '&media=' + e.target.parentElement.textContent
        return this.props.onSearchSubmit(temp)
    }
    onEnterPress(e) {
        if (e.keyCode === 13) {
            this.setState({
                searchedTerm: e.target.value
            })
            return this.props.onSearchSubmit('?term=' + e.target.value)
        }
    }
    componentDidMount(){
        this.props.onSearchSubmit('?term=all');
    }

    render() {
        return (
            <div className="search-wrapper">
                <div className="search-bar">
                    <input type="text" id="searchInput"
                        placeholder={placeholderText}
                        onKeyDown={e => this.onEnterPress(e)} />
                </div>
                <ul className="sorter">
                    {items.map((item, id) => {
                        return <li key={id}>

                            <a href="/#" 
                                className={(this.state.selectedTab === id ? 'active' : '')} 
                                name={item} 
                                onClick={(e) => this.onSortClicked(e, id)}>{item}
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default SearchBar;