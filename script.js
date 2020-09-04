'use strict';
window.onload = () => {
    const button = document.getElementById('bu');
    const classLabel = document.getElementById('class');
    const classList = ['Scout','Hunter','Archer','Musketeer','Sniper','Blaster','Mercenary','Gunner',
    'Warrior','Destroyer','Spearman','Ravager','Samurai','Fighter','Slayer','Berserker',
    'Mage','Grenadier','Astronaut','Bomber','Illusionist','Necromancer','Wizard',
    'Thief','Ninja','Stalker','Trickster','Gambler','Hitman','Recon',
    'Priest','Bishop','Alchemist','Controller','Programmer','Medic',
    'Defender','Guardian','Monk','Admiral','Juggernaut','Paladin','Knight',
    'Phantom','Jester','Cowboy','Turkey','Snowman','Santa','Firecracker','Wind Dancer','Gladiator','Bunny','Frost',
    'Fairy','Chrono','Shroom','Rocketeer','Demon','Elementalist','Valkyrie','Duelist','Ghost','Beast','Reaper'];

    button.onclick = () => {
        classLabel.textContent = classList[randomIntFromInterval(0,classList.length-1)];
    };
}
const randomIntFromInterval = (min, max) => { return Math.floor(Math.random() * (max - min + 1) + min) };