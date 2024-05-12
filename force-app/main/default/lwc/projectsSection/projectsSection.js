import { LightningElement } from 'lwc';
import Images_URL from '@salesforce/resourceUrl/portfolio_images';

export default class ProjectsSection extends LightningElement {
    projectImage = Images_URL + '/Portfolio_Images/Projects2.jpg';

    projectInfo = [
        {
            id: 1,
            name: 'Memory Game',
            description: 'Memory Game built on Salesforce leveraging Apex, LWC, Aura, and LWC.',
            technology : 'HTML, CSS, JS, Apex, LWC',
            repo: 'https://github.com/Suryansh-2301/MemoryGame---LWC'
        },
        {
            id: 2,
            name: 'Portfolio Image',
            description: 'Personal portfolio webssite built on Salesforce Experience Cloud.',
            technology : 'HTML, CSS, JS, Apex, LWC, Experience Cloud',
            repo : 'https://github.com/Suryansh-2301/SF-Portfolio'
        }
    ]
}