import { LightningElement } from 'lwc';

import Images_URL from '@salesforce/resourceUrl/portfolio_images';

export default class Navbar extends LightningElement {
    logoImage = Images_URL + '/Portfolio_Images/logo.png';

    toggleMenu(event){
        const evt = event.currentTarget
        evt.classList.toggle('open');
    }

}