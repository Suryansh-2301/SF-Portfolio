import { LightningElement } from 'lwc';
import Images_URL from '@salesforce/resourceUrl/portfolio_images';

export default class CertificationsSection extends LightningElement {
    certificationdata = [
        {
            id: 1,
            name: 'Salesforce Certified Administrator',
            image: Images_URL + '/Portfolio_Images/Administrator.png',
            date: 'Jul 2023',
        },

        {
            id: 2,
            name: 'Salesforce Certified Platform Developer 1',
            image: Images_URL + '/Portfolio_Images/platform_developer.png',
            date: 'Mar 2022',
        },

        {
            id: 3,
            name: 'Salesforce Certified Associate',
            image: Images_URL + '/Portfolio_Images/Associate.webp',
            date: 'Nov 2023',
        }
    ]
    

    
}