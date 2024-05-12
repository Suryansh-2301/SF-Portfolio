import { LightningElement } from 'lwc';
import Images_URL from '@salesforce/resourceUrl/portfolio_images';

export default class SkillsSection extends LightningElement {
    skillImage = Images_URL + '/Portfolio_Images/Skills2.jpg';

    skills = [
        { 
            id : 1,
            name : 'Apex',
            value : 80
        },
        { 
            id : 2,
            name : 'HTML',
            value : 90
        },
        { 
            id : 3,
            name : 'CSS',
            value : 100
        },
    ]
}