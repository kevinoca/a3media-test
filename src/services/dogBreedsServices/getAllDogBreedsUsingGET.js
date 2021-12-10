import { all, breedsUri, context, list, server } from "./dogServicesUris"

export default async function getAllDogBreedsUsingGET() {

    try {

        const endPoint = server
            .concat(context)
            .concat(breedsUri)
            .concat(list)
            .concat(all)

        const dogBreedsList = await ((await fetch(endPoint)).json())

        return Object.keys(dogBreedsList.message)

    } catch (error) {

        throw new Error(error)

    }

}
