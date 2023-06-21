console.log('Main JS loaded');

//fetch van de brass instrument
let brassObjecten = [];
fetch('https://mbo-sd.nl/period3-fetch/music-instrument-brass')
    .then(function (brassData) {
        return brassData.json(); //return van het brassData
    })
    //
    .then(function (brassObjecten) {
        console.log(brassObjecten);
        createLayout(brassObjecten);
    });

function createLayout(brassObjecten) {

    let brassEl = document.querySelector('.brass')


    //zet de brassObjecten in de console
    for (let brass = 0; brass < brassObjecten.length; brass++) {
        const InstrumentBrass = brassObjecten[brass];
        console.log(InstrumentBrass)

        brassEl.innerHTML += layout
    }
}