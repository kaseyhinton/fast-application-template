const path = require("path");
const polka = require("polka");
const send = require("@polka/send-type");
const app = polka();
const { createReadStream } = require("fs");

app.get("/index.js", (req, res) => {
  let file = createReadStream(path.join(__dirname, "build", "index.js"));
  send(res, 200, file, { "Content-Type": "text/js" });
});

app.get("*", (req, res) => {
  let file = createReadStream(path.join(__dirname, "build", "index.html"));
  send(res, 200, file, { "Content-Type": "text/html" });
});

var port = process.env["PORT"] || 8000;
app.listen(port, () => {
  console.log("server started on port", port);
});
