import icon_clock_mobile from '../assets/images/icon-clock-mobile.svg'
import icon_clock_desktop from '../assets/images/icon-clock.svg'

export const updateUrlImageClock = () => {
    const card = document.querySelector('.equilibrium'),
          cardWidth = card.getBoundingClientRect().width,
          imgElement = document.getElementById('img4')
          
    cardWidth >= 340 ? imgElement.src = icon_clock_desktop : imgElement.src = icon_clock_mobile
}