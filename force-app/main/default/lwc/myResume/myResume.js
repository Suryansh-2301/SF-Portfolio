import { LightningElement } from 'lwc';
import Resume_Url from '@salesforce/resourceUrl/myResume';

export default class ResumeDownloader extends LightningElement {
    downloadResume() {
        // Replace 'Your_Resume_File_Name' with the name of your resume file
        const resumeFileName = 'Suryansh_Gupta.pdf'; 

        // Fetch the static resource URL
        const resumeURL = Resume_Url;

        // Create an anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeURL;
        downloadLink.download = resumeFileName;
        downloadLink.click();
    }
}
