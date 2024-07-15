import './src/styles/css/style.css'
import { arrayElementsHtml, elementBodyHtml } from './src/helpers/pagesData'
import { renderElementsHtmlToDom } from './src/utils/renderElementsToDom'
import { updateUrlImageClock } from './src/helpers/updateUrl'

renderElementsHtmlToDom(elementBodyHtml, arrayElementsHtml)
setInterval(updateUrlImageClock, 100)