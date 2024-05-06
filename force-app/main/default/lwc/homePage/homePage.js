import { LightningElement } from 'lwc';
import Images_URL from '@salesforce/resourceUrl/portfolio_images';

export default class HomePage extends LightningElement {
    heroImage = Images_URL + '/Portfolio_Images/Profile.png'
}
