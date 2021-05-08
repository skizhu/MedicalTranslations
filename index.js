const HINDI = {
    'turn on your left side': 'अपनी बाईं ओर मुड़ें',
    'turn on your right side': 'अपनी दाईं ओर मुड़ें',
    'are you comfortable?': 'क्या आप आराम से हैं?',
    'does it hurt?': 'दर्द हो रहा है क्या?',
    'this is a test': 'यह टेस्ट है',
}
const SPANISH = {
    'turn on your left side': 'Gira a tu izquierda',
    'turn on your right side': 'Gira a tu derecha',
    'are you comfortable?': 'Estas cómoda/comodo?',
    'does it hurt?': '¿Duele?',
    'this is a test': 'Esto es una prueba',
}

const allTranslations = {
    'HINDI': HINDI,
    'SPANISH': SPANISH,
}

window.onload = () => {
    const currentYear = new Date().getFullYear()
    const location = document.getElementById('copyrightText');
    location.textContent = 'Copyright © Zachary Gopinath ' + currentYear;

    const div = document.getElementById('btn-toolbar-id');
    const descendants = div.getElementsByTagName('*');
    for (let i = 0; i < 20; i++) {
        const button = descendants[i];
        //button.id.length ? document.getElementById(button.id).onclick = phraseButtonOnclick() : null
    }
}

function phraseButtonOnclick(val, context) {
    let nodes = document.getElementById('button-groupOne').childNodes;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].nodeName.toLowerCase() === 'button' ? nodes[i].style.backgroundColor = '#714cfe' : null
    }
    nodes = document.getElementById('button-groupTwo').childNodes;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].nodeName.toLowerCase() === 'button' ? nodes[i].style.backgroundColor = '#714cfe' : null
    }
    nodes = document.getElementById('button-groupThree').childNodes;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].nodeName.toLowerCase() === 'button' ? nodes[i].style.backgroundColor = '#714cfe' : null
    }
    nodes = document.getElementById('button-groupFour').childNodes;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].nodeName.toLowerCase() === 'button' ? nodes[i].style.backgroundColor = '#714cfe' : null
    }
    context.style.backgroundColor = '#03dac6';
    let langButtonNodes = document.getElementById('button-groupLanguages').childNodes;
    for (let i = 0; i < langButtonNodes.length; i++) {
        langButtonNodes[i].nodeName.toLowerCase() === 'button' ? langButtonNodes[i].style.backgroundColor = '#714cfe' : null
    }
    document.getElementById('originalEnglishText').textContent = val;
    document.getElementById('translatedText').textContent = 'No Language Selected'
}

function languageButtonOnclick(val, context) {
    const nodes = document.getElementById('button-groupLanguages').childNodes;
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].nodeName.toLowerCase() === 'button' ? nodes[i].style.backgroundColor = '#714cfe' : null
    }
    context.style.backgroundColor = '#03dac6';

    const languageObj = allTranslations[val.toUpperCase()];

    const untranslatedText = document.getElementById('originalEnglishText').textContent.toLowerCase();
    if (languageObj[untranslatedText].length) {
        document.getElementById('translatedText').textContent = (languageObj[untranslatedText])
    }
    else {
        document.getElementById('translatedText').textContent = 'No Translation Available';
    }


}
