const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
]

for (planet in planets){
    const newDiv = document.createElement('div');
    newDiv.className = 'planets';
    document.body.appendChild(newDiv);
}