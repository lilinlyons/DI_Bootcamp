fetch('https://v6.exchangerate-api.com/v6/a1a9d2173968e1bd032138f5/codes', {
    method: 'GET',
}).then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Failed to fetch supported codes.');
    }
}).then(data => {
    const existingList = document.getElementsByClassName("ccybuttons")[0]; // Assuming you have an element with class 'currencies' to append buttons

    data.supported_codes.forEach(element => {
        let ccy = element[0];

        let newElement = document.createElement('button'); // Use 'button' instead of 'btn'
        newElement.className = 'ccyBtn';
        newElement.textContent = ccy;
        newElement.appendChild(document.createElement('br')); // Append line break

        existingList.appendChild(newElement);
    });



    })
.catch(error => {
    console.error('Error fetching data:', error);
});


function filterFunction() {
    var input, filter, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    imgGrid = document.getElementsByClassName("ccybuttons")[0];
    imgWrappers = imgGrid.getElementsByClassName("ccyBtn");

    for (i = 0; i < imgWrappers.length; i++) {
        txtValue = imgWrappers[i].textContent || imgWrappers[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            imgWrappers[i].style.display = "";
        } else {
            imgWrappers[i].style.display = "none";
        }
    }
}

let inputElement = document.getElementById("filter");
inputElement.addEventListener('input', filterFunction);


let selectedFromCurrency = null;
let selectedToCurrency = null;
let exchangeRate = null;

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('ccyBtn')) {
        const selectedCurrency = event.target.textContent.trim();

        if (selectedFromCurrency === null) {
            selectedFromCurrency = selectedCurrency;
            console.log(`Selected From Currency: ${selectedFromCurrency}`);
            event.target.classList.add('from')
        } else if (selectedToCurrency === null) {
            selectedToCurrency = selectedCurrency;
            event.target.classList.add('to');
            console.log(`Selected To Currency: ${selectedToCurrency}`);
            console.log(`https://v6.exchangerate-api.com/v6/a1a9d2173968e1bd032138f5/pair/${selectedFromCurrency}/${selectedToCurrency}`)


        }
        updateCurrencyDisplay(selectedFromCurrency, selectedToCurrency)


    }
});

function updateCurrencyDisplay(fromCurrency, toCurrency) {
    const fromDisplay = document.getElementById('fromCurrencyDisplay');
    const toDisplay = document.getElementById('toCurrencyDisplay');
    const exchangeRate = document.getElementById('exchangeRate');

    fetch(`https://v6.exchangerate-api.com/v6/a1a9d2173968e1bd032138f5/pair/${selectedFromCurrency}/${selectedToCurrency}` , {
        method: 'GET',
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch supported codes.');
        }
    }).then(response =>{
        fromDisplay.textContent = fromCurrency ? `From Currency: ${fromCurrency}` : 'From Currency: None';
        toDisplay.textContent = toCurrency ? `To Currency: ${toCurrency}` : 'To Currency: None';
        exchangeRate.textContent = exchangeRate? `Exchange Rate: ${response.conversion_rate}` : 'Exchange Rate: None';

        document.getElementById('convert').addEventListener('click', function () {
            const amount = parseFloat(document.getElementById('Amount').value);
            let exchangeRate = parseFloat(response.conversion_rate);

            if (isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount.');
                return;
            }

            const convertedAmount = amount * exchangeRate;
            console.log(amount)
            console.log(exchangeRate)

            const convertedDisplay = document.getElementById('convertedAmountDisplay');
            convertedDisplay.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${selectedToCurrency}`;
        });
    })



const deleteAll = document.getElementsByClassName('delete')[0];

deleteAll.addEventListener('click', function () {
    selectedFromCurrency = null;
    selectedToCurrency = null;

    const currencyButtons = document.querySelectorAll('.ccyBtn');
    currencyButtons.forEach(button => {
        button.classList.remove('from', 'to');
    });


    })}








