

// constants for ratio 
const aspectRatioIndex = '1/2';
const aspectRatioForTutors = '1/1.8';
const aspectRatioSessions = '1/1.6';
const aspectRatioProfiles = '1/2';

const mainContent = document.getElementById("mainContent");


mainContent.innerHTML = indexText;
mainContent.style.aspectRatio = aspectRatioIndex;

function indexTextChanger(){

    mainContent.innerHTML = indexText;
    mainContent.style.aspectRatio = aspectRatioIndex;

}

function forTutorsChanger(){
    
    mainContent.innerHTML = forTutorsText;
    mainContent.style.aspectRatio = aspectRatioForTutors;

}

function sessionChanger(){

    mainContent.innerHTML = sessionsText;
    mainContent.style.aspectRatio = aspectRatioSessions;

}

function profileChanger(){

    mainContent.innerHTML = profilesText;
    mainContent.style.aspectRatio = aspectRatioProfiles;

}

