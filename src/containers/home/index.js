import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { search } from '../../services/reducer/reducer';
import SearchBar from "../../components/search-bar";
import NoResults from "../../components/no-results";
import DisplayData from '../../components/display-data';

import logo from '../../assets/ITunes_logo.svg';
class Home extends PureComponent {
    render() {
        return (
            <div className="body-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <SearchBar onSearchSubmit={this.props.search}></SearchBar>                                
                            </header>                            
                            {this.props.data <= 0 ? ( <NoResults/>) : null}
                            <DisplayData data={this.props.data} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.search.data
});


const mapDispatchToProps = dispatch => bindActionCreators({
    search
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)