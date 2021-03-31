const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

let base = {
  currentAuthLogin: { login: "", password: "" },
  authLogins: [
    { login: "x12", password: "345" },
    { login: "atlas", password: "atlas" },
  ],
  collegs: [
    { name: "Elon Mask", isOnline: 1 },
    { name: "Steve Jobs", isOnline: 0 },
    { name: "Dan Abramov", isOnline: 1 }
  ],
};

app.use(cors());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.get('/api/v1/collegs', (req, res) => {
  res.send(base.collegs.filter(it => it.isOnline))
})

app.put("/api/v1/auth", (req, res) => {
  console.log(req.body);
  base = {
    ...base,
    currentAuthLogin: {
      ...base.currentAuthLogin,
      login: req.body.login,
      password: req.body.password,
    },
  };
  console.log(base.currentAuthLogin)
  base.authLogins.forEach((it) => {
    if (it.login === base.currentAuthLogin.login &&
    it.password === base.currentAuthLogin.password) {
      res.send(true)
    }}
)});

app.listen(PORT, () => {
  console.log(`Server start at port: ${PORT}`, new Date());
})
