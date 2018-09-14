import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card}) => {
    const {id, photo_url} = card;
    return (
        <div id={`card-${id}`} className="card">
            <img src={photo_url} alt={id} />
            <div className="details">
                <span className="index">{id+1}</span>
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;