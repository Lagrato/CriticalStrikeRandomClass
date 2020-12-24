'use strict';
window.onload = () => {
    const button = document.getElementById('bu');
    const classLabel = document.getElementById('class');

    const marksman = {color: ['hsl(210, 30%, 65%)','#323232'], classes: ['Scout','Hunter','Archer','Musketeer','Sniper','Blaster','Mercenary','Gunner']};
    const brawler = {color: ['hsl(40,70%,55%)','#323232'], classes: ['Warrior','Destroyer','Spearman','Ravager','Samurai','Fighter','Slayer','Berserker']};
    const burst = {color: ['hsl(270,30%,55%)','#E7E7E7'], classes: ['Mage','Grenadier','Astronaut','Bomber','Illusionist','Necromancer','Wizard']};
    const assassin = {color: ['hsl(0,50%,65%)','#323232'], classes: ['Thief','Ninja','Stalker','Trickster','Gambler','Hitman','Recon']};
    const support = {color: ['hsl(60, 40%, 45%)','#323232'], classes: ['Priest','Bishop','Alchemist','Controller','Programmer','Medic']};
    const tank = {color: ['hsl(120, 40%, 25%)','#E7E7E7'], classes: ['Defender','Guardian','Monk','Admiral','Juggernaut','Paladin','Knight']};
    const special = {color: ['hsl(240, 60%, 43%)','#E7E7E7'], classes: ['Phantom','Jester','Cowboy','Turkey','Snowman','Santa','Firecracker','Wind Dancer','Gladiator','Bunny','Frost']};
    const gamepass = {color: ['#D2D2D2','#323232'], classes: ['Fairy','Chrono','Shroom','Rocketeer','Demon','Elementalist','Valkyrie','Duelist','Ghost','Beast','Reaper']};

    const classList = [marksman,brawler,burst,assassin,support,tank,special,gamepass];

    button.onclick = () => {
        const selectedCategory = classList[randomIntFromInterval(0,classList.length-1)];
        classLabel.children[0].textContent = selectedCategory.classes[randomIntFromInterval(0,selectedCategory.classes.length-1)];
        classLabel.style.backgroundColor = selectedCategory.color[0];
        classLabel.style.color = selectedCategory.color[1];
    };
}
const randomIntFromInterval = (min, max) => { return Math.floor(Math.random() * (max - min + 1) + min) };
