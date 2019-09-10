const app = require(`express`)();
const server = require(`http`).Server(app);

server.listen(80, () => console.log(`listening`));

app.get(`/`, (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

// app.get(`/socket-io-script`, (req, res) => {
//   res.sendFile(__dirname + `/node_modules/socket.io-client/dist/socket.io.js`);
// });
