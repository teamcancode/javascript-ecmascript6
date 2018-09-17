(function () {
    let lightIcon, buttonA, buttonB;

    window.addEventListener('load', () => {
        lightIcon = document.getElementById('lightIcon');
        buttonA = document.getElementById('buttonA');
        buttonB = document.getElementById('buttonB');

        buttonA.addEventListener('click', updateLight);
        buttonB.addEventListener('click', updateLight);
    });

    function updateLight() {
        const valueA = buttonA.checked,
            valueB = buttonB.checked;
        let className;

        if (valueA ^ valueB) {
            className = 'far fa-lightbulb';
        } else {
            className = 'fas fa-lightbulb';
        }

        lightIcon.className = className;
    }
})();
