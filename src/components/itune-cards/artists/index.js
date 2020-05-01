import React, { PureComponent } from 'react';
import moment from 'moment';

import './style.scss';

class ItunesCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isPreviewVisible: false,
            isPlaying: false
        };
    }

    playPerview() {
        this.setState({
            isPreviewVisible: !this.state.isPreviewVisible,
            isPlaying: !this.state.isPlaying
        });

        let audios = document.getElementsByTagName("audio");
        for (let i = 0, len = audios.length; i < len; i++) {
            audios[i].pause();
        }
    }
    truncate(input){
        return input.length > 25 ? `${input.substring(0, 25)}...` : input;
    }
    render() {
        const imageUrl = this.props.data.artworkUrl100;
        const releaseDate = moment(this.props.data.releaseDate).format('DD MMM YY');
        

        return (
            <div className="card-wrapper">
                <div className="card-holder">
                    <div className="card-poster">
                        <div className={"poster-preview " + (this.state.isPreviewVisible ? 'preview-show' : '')} style={{ backgroundImage: `url(${imageUrl})` }}>
                            <div className="itune-preview" onClick={() => this.playPerview()}>
                                {(this.state.isPlaying) ? "Stop" : "Preview"}
                            </div>
                        </div>
                    </div>
                    <div className="card-data">
                        <h2>{this.props.data.artistName}</h2>
                        <div className="card-content">
                            <p><b>Release Date </b>: {releaseDate}</p>
                            {this.props.data.collectionName ? <p><b>Collection </b>: {this.truncate(this.props.data.collectionName)}</p> : null }
                            {this.props.data.shortDescription ? (
                                <p><b>Description </b>: {this.truncate(this.props.data.longDescription)} </p>) : null}
                        </div>
                    </div>
                    {this.state.isPreviewVisible ? (
                        <audio controls autoPlay>
                            <source src={this.props.data.previewUrl} type="audio/ogg"></source>
                            <source src={this.props.data.previewUrl} type="audio/mpeg"></source>
                        </audio>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default ItunesCard;