var data = {
    'KGF': {
        director: 'Prashant Neel',
        lang: 'Kannada',
        Country: 'India',
        Starring: 'Yash, Srinidhi Shetty',
        desc: 'KGF 2 starts where the first part ended. Rocky kills Garuda and takes over KGF. He becomes a super power in no time but obstacles come in the form of Adheera, the head of the Vikings clan. Rocky faces him head on and puts Adheera on the back step. This is also the time more problems get created for Rocky as the prime minister of India comes to know about Rocky’s power and orders for his downfall.',
        image: '../static/Sarkaru-Vaari-Paata-Trailer-Image.jpg',
    },
    'Bahubali': {
        director: 'S.S. Rajamouli',
        lang: 'Tamil',
        Country: 'India',
        Starring: 'Prabhas, Anushka, Ramya, Shraddha, Sathya, Sreelakshmi',
        desc: 'A story of a war hero and his struggle to save his country from a corrupt king.',
        image: '../static/Ante-Sundharaniki-Trailer-Image.jpg',
    },
    '3 idiots': {
        director: 'Rajkumar Hirani',
        lang: 'Hindi',
        Country: 'India',
    }
}

const root = document.getElementsByClassName('container')[0];

const imgElement = document.createElement('img');
imgElement.src = data['Bahubali'].image;

root.appendChild(imgElement);
