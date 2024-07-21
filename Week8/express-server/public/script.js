fetch("http://localhost:5000/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
