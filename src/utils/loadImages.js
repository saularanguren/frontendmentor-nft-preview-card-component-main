/**
 * loadImages
 * @param {Array<String>} arrayIDs 
 * @param {Array<String>} arrayUrlImages 
 */
export const loadImages = (arrayIDs, arrayUrlImages) => {    
    for(let i = 0; i < arrayIDs.length; i++) {
        const imgElement = document.getElementById(arrayIDs[i])
        imgElement.src = arrayUrlImages[i]
    }
}