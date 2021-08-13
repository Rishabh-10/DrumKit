var info = {
    "w": "tom-1",
    "a": "tom-2",
    "s": "tom-3",
    "d": "tom-4",
    "j": "snare",
    "k": "crash",
    "l": "kick-bass"
};

function btnAnimation(currentKey) {
    
    var activeBtn = document.querySelector('.'+currentKey);

    activeBtn.classList.add('pressed');
    setTimeout(() => {
        activeBtn.classList.remove('pressed');
    }, 100);
}

function handleClick(className) {
    var audioSrc = "sounds/" + info[className] + ".mp3";
    
    if (className === 'l') {
        audioSrc = "sounds/kick-bass.wav";
    }

    var audio = new Audio(audioSrc);
    audio.play();

    btnAnimation(className);
}

var buttons = document.querySelectorAll('button.drum');

// for clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // providing our class name
        handleClick(button.getAttribute("class")[0]);
    });
});

// for keyboard
document.addEventListener('keydown', (event) => {
    var keysCollection = "kjlwasd";

    if (keysCollection.includes(event.key)) {

        handleClick(event.key);
    }
})
