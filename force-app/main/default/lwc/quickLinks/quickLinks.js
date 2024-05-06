import { LightningElement } from 'lwc';
import Images_URL from '@salesforce/resourceUrl/portfolio_images';

export default class QuickLinks extends LightningElement {
    data = [
        { 
            id : 1,
            image : Images_URL + '/Portfolio_Images/Projects.png',
            text : 'Projects'
        },
        { 
            id : 2,
            image : Images_URL + '/Portfolio_Images/Certifications.jpg',
            text : 'Certifications'
        },
        { 
            id : 3,
            image : Images_URL + '/Portfolio_Images/Skills.jpg',
            text : 'Skills'
        }
]
}