const quotes = [
    {
        text: "I'm going to become king of the pirates. If I have to die fighting for it, then I die.",
        character: "- Monkey D. Luffy",
        image: "./images/1.png"
    },
    {
        text: "You can pour drinks on me. You can throw food at me... but for good reason or not, nobody hurts a friend of mine!",
        character: "- Shanks",
        image: "./images/3.png"
    },
    {
        text: "I devoted my entire life to becoming the World's Greatest Swordsman. I made my choice, so I'm the only one who gets to call me stupid.",
        character: "- Roronoa Zoro",
        image: "./images/4.png"
    },
    {
        text: "You want it to work out where nobody dies in this fight, isn't that right? We're up against one of the Warlord of the Sea and a million of your own people on top of that. And you still want everyone to end up all safe and sound — you'll never win that way.",
        character: "- Monkey D. Luffy",
        image: "./images/2.png"
    },
    {
        text: "When do you think a person dies? When a bullet from a pistol pierces his heart? No. When he's attacked by an incurable disease? No. When he eats a soup of deadly poisonous mushrooms? No. A man dies when people forget him!",
        character: "- Dr. Hiriluk",
        image: "./images/6.png"
    },
    {
        text: "Scars on the back are a swordsman's shame.",
        character: "- Roronoa Zoro",
        image: "./images/5.png"
    },
    {
        text: "While they may execute me, I won't die.",
        character: "- Gol D. Roger",
        image: "./images/7.png"
    },
    {
        text: "I Don't Want To Conquer Anything. I Just Think The Guy With The Most Freedom In The Entire Ocean Is The Pirate King.",
        character: "- Monkey D. Luffy",
        image: "./images/10.png"
    },
    {
        text: "If we lose credibility just by admitting fault, then we didn't have any in the first place.",
        character: "- Admiral Fujitora",
        image: "./images/9.png"
    },
    {
        text: "Luffy, your pain may be great, but it mustn't devour you. There is yet joy beyond your sorrows. What's gone may be gone, but you still have something left in this world to treasure. Don't you?",
        character: "- Jinbei",
        image: "./images/8.png"
    },
];

let interval = 3000;

let currentIndex = 0;

var quoteContainer = document.getElementById('quote-container');
var quoteImage = document.getElementById('quote-image');
var quoteText = document.getElementById('quote');
var quoteCharacter = document.getElementById('character');
var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow');

function showQuote(index) {
    var quote = quotes[index];
    quoteImage.src = quote.image;
    quoteText.innerText = quote.text;
    quoteCharacter.innerText = quote.character;
}

function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    showQuote(currentIndex);
    clearInterval(rotationInterval);
    rotationInterval = setInterval(nextQuote, interval);
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
    clearInterval(rotationInterval);
    rotationInterval = setInterval(nextQuote, interval);
}

var rotationInterval = setInterval(nextQuote, interval);

showQuote(currentIndex);

quoteContainer.addEventListener('mouseenter', function () {
    leftArrow.style.opacity = '1';
    rightArrow.style.opacity = '1';
    quoteContainer.style.transform = 'scale(1.1)';
});

quoteContainer.addEventListener('mouseleave', function () {
    leftArrow.style.opacity = '0';
    rightArrow.style.opacity = '0';
    quoteContainer.style.transform = 'scale(1)';
});