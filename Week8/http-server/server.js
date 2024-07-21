const http = require("http");

/** express */

const server = http.createServer((request, response) => {
  //   console.log(request.url);
  // console.log(request.method);
  /** send respone */

  if (request.url === "/users") {
    if (request.method === "GET") {
      let users = [
        { name: "John", age: 25 },
        { name: "Anne", age: 22 },
        { name: "Marry", age: 21 },
      ];
      response.end(JSON.stringify(users));
    } else if (request.method === "POST") {
    }
  }
  else {
    response.end('I dont know what you want from me')
  }
});

server.listen(3001, () => {
  console.log("run on port 3001");
});
