import React from "react"
import PropTypes from 'prop-types';

export default function DogThumbnail({ source }) {

    return (
        <div className="grid-gallery__item">
            <img className="grid-gallery__image" src={source} alt={source} />
        </div>
    )
}

DogThumbnail.propTypes = {
    source: PropTypes.string.isRequired
}