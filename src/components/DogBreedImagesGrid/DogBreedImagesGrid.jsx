import React from "react"
import DogThumbnail from "../../components/DogThumbnail/DogThumbnail"
import PropTypes from 'prop-types';

export default function DogBreedImagesGrid({ dogImages }) {

    return (
        <div className="grid-gallery">
            {dogImages.length > 0 && dogImages.map((image, index) => <DogThumbnail source={image} key={index} />)}
        </div>
    )

}

DogBreedImagesGrid.propTypes = {
    dogImages: PropTypes.array.isRequired
}