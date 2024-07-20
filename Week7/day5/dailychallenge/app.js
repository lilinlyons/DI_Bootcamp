import express from 'express';

const app = express();

const port = 5000;

app.use(express.json());

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🎉', name: 'Party popper' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '📚', name: 'Books' },
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🎉', name: 'Party popper' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '📚', name: 'Books' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🌍', name: 'Earth globe' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🎳', name: 'Bowling' },
    { emoji: '🎨', name: 'Artist palette' },
    { emoji: '🎤', name: 'Microphone' },
    { emoji: '🏖️', name: 'Beach with umbrella' },
    { emoji: '🚲', name: 'Bicycle' },
    { emoji: '⌚', name: 'Watch' }
];


function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Example usage
const randomEmoji = getRandomEmoji();
console.log(randomEmoji);