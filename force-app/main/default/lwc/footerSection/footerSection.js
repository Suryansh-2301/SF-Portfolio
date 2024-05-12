import { LightningElement } from 'lwc';
import Images_URL from '@salesforce/resourceUrl/portfolio_images';

export default class FooterSection extends LightningElement {
    logoImage = Images_URL + '/Portfolio_Images/logo.png';
    linkedinImage = Images_URL + '/Portfolio_Images/Linkedin.webp';
    githubImage = Images_URL + '/Portfolio_Images/github.png';
    trailBlazerImage = Images_URL + '/Portfolio_Images/trailblazer.png';
}