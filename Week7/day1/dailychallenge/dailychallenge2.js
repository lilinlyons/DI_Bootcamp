const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJS(morse) {
    return new Promise((resolve, reject) => {
        if (Object.keys(morse).length === 0) {
            reject("The JSON is empty");
        } else {
            resolve(JSON.parse(morse));
        }
    });
}

async function toMorse() {
    const jsonmorse = await toJS(morse);
    return new Promise((resolve, reject) => {// Replace with your actual morse JSON object or fetch logic
            console.log(jsonmorse)
            var input = prompt("Enter a word or a sentence: ");
            const arr = [];
            input.split('').forEach((char) => {
                if (char in jsonmorse) {
                    arr.push(jsonmorse[char]);
                } else {
                    return reject(`${char} key could not be found in the Morse JavaScript object.`);
                }
            });

            resolve(arr);
        });
    }


async function joinWords() {
    const morseString = await toMorse().join("\n");
    console.log(morseString);
}

const results = new Promise((resolve, reject) => {
    resolve();
}).then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.error("Error:", error));