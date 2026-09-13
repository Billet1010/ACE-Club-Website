

// constants for ratio 
const aspectRatioIndex = '1/0.8';
const aspectRatioForTutors = '1/0.8';

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


