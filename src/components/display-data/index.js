import React, { PureComponent } from 'react';
import './style.scss';
import ItunesCard from "../itune-cards/artists";

class DisplayData extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        };
    }

    render() {
        return (
            <div className="data-holder">
                {this.props.data ? (
                    this.props.data.map((item, index) => {
                        return <ItunesCard key={index} data={item} />
                    })
                ) : null}
            </div>
        );
    }
}

export default DisplayData;