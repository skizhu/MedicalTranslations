

const FRENCH = {
    'turn on your left side': 'Tourne sur ton côté gauche',
    'turn on your right side': 'Tourne sur ton côté droit',
    'are you comfortable?': 'Es-tu installé confortablement?',
    'does it hurt?': 'Est-ce que ça fait mal?',
    'this is a test': "C'est un test",
}

const SPANISH = {
    'turn on your left side': 'Gira a tu izquierda',
    'turn on your right side': 'Gira a tu derecha',
    'are you comfortable?': 'Estas cómoda/comodo?',
    'does it hurt?': '¿Duele?',
    'this is a test': 'Esto es una prueba',
}

const MANDARIN = {
    'turn on your left side': '打开你的左边',
    'turn on your right side': '打开你的右边',
    'are you comfortable?': '你舒服吗？',
    'does it hurt?': '疼吗?',
    'this is a test': '这是一个测试',
}

const HINDI = {
    'turn on your left side': 'अपनी बाईं ओर मुड़ें',
    'turn on your right side': 'अपनी दाईं ओर मुड़ें',
    'are you comfortable?': 'क्या आप आराम से हैं?',
    'does it hurt?': 'दर्द हो रहा है क्या?',
    'this is a test': 'यह टेस्ट है',
}

const BELARUSIAN = {
    'turn on your left side': 'Павярніцеся на левы бок',
    'turn on your right side': 'Павярніцеся на правы бок',
    'are you comfortable?': 'Вам зручна?',
    'does it hurt?': 'Ці балюча?',
    'this is a test': 'Гэта тэст',
}

const allTranslations = {
    'FRENCH': FRENCH,
    'SPANISH': SPANISH,
    'MANDARIN': MANDARIN,
    'HINDI': HINDI,
    'BELARUSIAN': BELARUSIAN,
}

window.onload = () => {
    const currentYear = new Date().getFullYear()
    const location = document.getElementById('copyrightText');
    location.textContent = 'Copyright © Zachary Gopinath ' + currentYear;

    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width <= 820) {
        document.getElementById('button-groupOne').classList.remove('btn-group-lg');
        document.getElementById('button-groupOne').classList.add('btn-group-sm');
        document.getElementById('button-groupTwo').classList.remove('btn-group-lg');
        document.getElementById('button-groupTwo').classList.add('btn-group-sm');
        document.getElementById('button-groupThree').classList.remove('btn-group-lg');
        document.getElementById('button-groupThree').classList.add('btn-group-sm');
        document.getElementById('button-groupFour').classList.remove('btn-group-lg');
        document.getElementById('button-groupFour').classList.add('btn-group-sm');
        document.getElementById('button-groupLanguages').classList.remove('btn-group-lg');
        document.getElementById('button-groupLanguages').classList.add('btn-group-sm');

        let nodes = document.getElementById('button-groupOne').childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].classList != null || nodes[i].classList != undefined) {
                nodes[i].classList.add('btn-sm')
            }
        }
        nodes = document.getElementById('button-groupTwo').childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].classList != null || nodes[i].classList != undefined) {
                nodes[i].classList.add('btn-sm')
            }
        }
        nodes = document.getElementById('button-groupThree').childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].classList != null || nodes[i].classList != undefined) {
                nodes[i].classList.add('btn-sm')
            }
        }
        nodes = document.getElementById('button-groupFour').childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].classList != null || nodes[i].classList != undefined) {
                nodes[i].classList.add('btn-sm')
            }
        }
        let langNodes = document.getElementById('button-groupLanguages').childNodes;
        for (let i = 0; i < langNodes.length; i++) {
            if (langNodes[i].classList != null || langNodes[i].classList != undefined) {
                langNodes[i].classList.add('btn-sm')
            }
        }
        document.getElementById('FR').innerHTML = 'FR'
        document.getElementById('ES').innerHTML = 'ES'
        document.getElementById('ZH').innerHTML = 'ZH'
        document.getElementById('HI').innerHTML = 'HI'
        document.getElementById('BE').innerHTML = 'BE'
        document.getElementById('copyrightContainer').style.position = 'relative'
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
    document.getElementById('translatedText').textContent = getTranslation(val)
}

const getTranslation = (lang) => {
    const languageObj = allTranslations[lang.toUpperCase()];
    const untranslatedText = document.getElementById('originalEnglishText').textContent.toLowerCase();
    if (languageObj[untranslatedText].length) {
        return languageObj[untranslatedText]
    }
    else {
        return 'No Translation Available'
    }
}
