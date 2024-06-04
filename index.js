// GLOBALS 

const shareBtn = document.getElementById('share-icon');
const speech = document.getElementById('speech');
const linksBar = document.getElementById('links-bar');
const shareBtnMob = document.getElementById('share-icon-mob');


// LO DE ABAJO MEDIO SIRVE

// function showSpeech() {
//     speech.classList.remove('hidden');
//     speech.classList.add('shown');
// }

// showSpeech();

// function hideSpeech() {
//     speech.classList.remove('shown');
//     speech.classList.add('hidden');
// }

// hideSpeech();

// function showLinksBar() {
//     linksBar.classList.remove('hidden');
//     linksBar.classList.add('shown');
// }

// showLinksBar();

// function hideLinksBar() {
//     linksBar.classList.remove('shown');
//     linksBar.classList.add('hidden');
// }


// //// kfjldkfldkf


function mobileOrDesktop(x) {
    if (x.matches) {
        linksBar.style.display = 'flex';
        speech.style.display = 'none';
        function toggleLinksBar() {
            if (linksBar.style.display === 'none') {
                linksBar.style.display = 'flex';
            } else {
                linksBar.style.display = 'none';
            }
        }
        toggleLinksBar();

        shareBtn.addEventListener('click', () => {
            toggleLinksBar();
        })

        shareBtnMob.addEventListener('click', () => {
            linksBar.style.display = 'none'
        })
        
    } else {
        speech.style.display = 'flex';
        linksBar.style.display = 'none' 
        function toggleSpeech() {
            if (speech.style.display === 'none') {
                speech.style.display = 'flex';
            } else {
                speech.style.display = 'none'
            }
        }
        toggleSpeech();
        
        shareBtn.addEventListener('click', () => {
            toggleSpeech();
        });

    }
}

var x = window.matchMedia('(max-width: 768px');

mobileOrDesktop(x);

x.addEventListener('change', () => {
    mobileOrDesktop(x);
});

