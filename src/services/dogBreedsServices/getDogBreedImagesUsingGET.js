import { breedUri, context, images, server } from "./dogServicesUris"

export default async function getDogBreedImagesUsingGET(dogBreed) {

    if (!dogBreed)
        return

    try {

        const endPoint = server
            .concat(context)
            .concat(breedUri)
            .concat(`/${dogBreed}`)
            .concat(images)

        const dogBreedImagesList = await ((await fetch(endPoint)).json())

        return Object.values(dogBreedImagesList.message)

    } catch (error) {

        throw new Error(error)

    }

}
