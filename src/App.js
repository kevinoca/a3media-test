import React, { useState, useEffect } from "react"
import ControlledSelect from "./components/ControlledSelect/ControlledSelect"
import DogBreedImagesGrid from "./components/DogBreedImagesGrid/DogBreedImagesGrid"
import { getAllDogBreedsUsingGET, getDogBreedImagesUsingGET } from "./services"
import DogLoader from "./components/DogLoader/DogLoader"
import './App.css';

function App() {

  const [dogImages, setDogImages] = useState([])

  const [breeds, setBreeds] = useState([""])

  const [isLoading, setIsLoading] = useState(false)

  async function updateBreedOptionsList() {

    const allBreedsList = await getAllDogBreedsUsingGET()

    setBreeds(allBreedsList)

    setIsLoading(false)

  }

  async function onBreedSelection(dogBreed) {

    setIsLoading(true)

    const breedImagesList = await getDogBreedImagesUsingGET(dogBreed)

    setDogImages(breedImagesList)

    setIsLoading(false)

  }

  useEffect(() => {

    updateBreedOptionsList()

  }, [])

  return (

    <div className="App">

      <header className="App-header">
        <h1 id="breed-select-label">Please, select a dog breed from the list below</h1>
        <ControlledSelect options={breeds} onChange={onBreedSelection} isDisabled={isLoading} />
      </header>

      {
        (isLoading)
          ? <DogLoader />
          : <DogBreedImagesGrid dogImages={dogImages} />
      }

    </div>

  )

}

export default App;
