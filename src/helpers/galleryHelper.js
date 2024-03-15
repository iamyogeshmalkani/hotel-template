import { TOTAL_ROOMS_BY_CATEGORY } from "../constants";
const getImageNamesByCategory = (category) => {
    switch (category) {
        case "Out Door":
            return ["outdoor"]
        case "Rooms":
            return ["room"]
        case "Dining":
            return ["dining"]
        case "Reception":
            return ["reception"]

        default:
            return ["outdoor", "room", "dining", "reception"]
    }
}
const getActiveImages = (category) => {
    let results = [];
    let images = getImageNamesByCategory(category);
    images.map((image) => {
        for (let i = 1; i <= TOTAL_ROOMS_BY_CATEGORY[image]; i++) {
            results.push(`${image + i}`);
        }
    })

    return results;

}



export { getActiveImages }