const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();
document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.getElementById('animatedDiv');

    // Reset the animation
    animatedDiv.addEventListener('animationiteration', function() {
        animatedDiv.style.opacity = 1;
    });
});
const tween2 = KUTE.fromTo(
    '#pg1',
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // Starting translate position
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween3 = KUTE.fromTo(
    '#pg2',
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // Starting translate position
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween4 = KUTE.fromTo(
    '#pg3',
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // Starting translate position
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween5 = KUTE.fromTo(
    '#pg4',
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // Starting translate position
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween6 = KUTE.fromTo(
    '#pg5',
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // Starcyanmagentayellowting translate position
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween7 = KUTE.fromTo(
    '#pg6',
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // Starting translate position
    { translate: [Math.random() * 1000, Math.random() * 1000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween8 = KUTE.fromTo(
    '#pg7',
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // Starting translate position
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween9 = KUTE.fromTo(
    '#pg8',
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // Starting translate position
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween10 = KUTE.fromTo(
    '#pg9',
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // Starting translate position
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween11 = KUTE.fromTo(
    '#pg10',
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // Starting translate position
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween12 = KUTE.fromTo(
    '#pg11',
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // Starcyanmagentayellowting translate position
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();
const tween13 = KUTE.fromTo(
    '#pg12',
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // Starting translate position
    { translate: [Math.random() * 2000, Math.random() * 2000] }, // New translate coordinates
    {
        repeat: 999,
        duration: 1000,
        yoyo: true,
        easing: 'easingCubicInOut'
    }// Easing function 
).start();