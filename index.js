const express = require("express");
const app = express();

app.listen(6890);

app.use(express.json());

app.get("/", async function (request, response) {
	response.json({ mensaje: "Hola Ctl" });
});