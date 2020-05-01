import React from 'react';
import './style.scss';

const NoResults = () => {
    let nothingToShowText = `Right now, We don't have any data to show you, Please enter value in saerch bar.`;
    return (
        <div className="d-flex justify-content-center">
            <div className="no-results">
                {nothingToShowText}
            </div>
        </div>
    );
};

export default NoResults;