window.addEventListener('keydown', function(event) {
    event.preventDefault();
    console.log(event);
    const getSounds = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    console.log(key);
    console.log(getSounds);
    if (!getSounds) {
        return;
    } else {
        getSounds.currentTime = 0;
        getSounds.play();
        key.classList.add('playing');
    }

    window.addEventListener('keyup', function(event) {
        event.preventDefault();
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        if (!key) {
            return;
        } else {
            key.classList.remove('playing');
        }
    });
});
