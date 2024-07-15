import { arrayIDsElementsImages, arrayUrlsImages } from "../helpers/imageData"
import { loadImages } from "./loadImages"

/**
 * renderElementsHtmlToDom
 * @param {String} elementMain 
 * @param {Array<String>} elementsHtml 
 */
export const renderElementsHtmlToDom = (elementMain, elementsHtml) => {    
    document.querySelector(elementMain).innerHTML = elementsHtml
    loadImages(arrayIDsElementsImages, arrayUrlsImages)
}
