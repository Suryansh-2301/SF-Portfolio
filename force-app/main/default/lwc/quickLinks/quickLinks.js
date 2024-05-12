import { LightningElement } from 'lwc';
import Images_URL from '@salesforce/resourceUrl/portfolio_images';
import {NavigationMixin} from 'lightning/navigation';

export default class QuickLinks extends NavigationMixin(LightningElement) {
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

handleClick(event){
    let selectedcard = event.currentTarget.dataset.id;
    if(selectedcard == 1){
        this.navigateToPages('projects__c');
    }else if(selectedcard == 2){
        this.navigateToPages('certifications__c');
    }else{
        this.navigateToPages('skills__c');
    }
}

navigateToPages(pageApiName){
    console.log(pageApiName);
    try {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: pageApiName
            }
        });
    } catch(error) {
        console.error('Navigation error:', error);
    }
}
}