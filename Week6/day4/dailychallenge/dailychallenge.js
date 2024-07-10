let loginForm = document.getElementById("myForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    let jsonData = JSON.stringify(data);
    console.log(jsonData);


});
