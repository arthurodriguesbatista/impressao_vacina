// http://www.printhtml.com/ é necessário para funcionar
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/", (req, res) => {
  const { nomeComecial, nomeGenerico, lote, aplicador, dataAplicacao } = {
    nomeComecial: "Teste 123",
    nomeGenerico: "teste 1234",
    lote: "5",
    aplicador: "Joao da silva",
    dataAplicacao: "hoje",
  };
  var exec = require("child_process").exec;
  exec(
    `printhtml.exe html=<html>  <style>body {width: 100px;height: 120px;}</style><body><div style="width:100px;height:120px;background-color:#f5f5f5;display:flex;flex-direction:column;justify-content:space-around; align-items:center;"><p  style="font-size:18px; margin: 0px; color:#424242"><b>${nomeComecial}</b></p><p style="font-size:15px; font-weight:bold;color:#424242; margin: 0px">${nomeGenerico}</p><p style="font-size:18px; font-weight:bold; margin:0px; color: color:#424242">Lote: ${lote}</p> <p style="font-size:18px; font-weight:bold; color:color:#424242; margin: 0px">${dataAplicacao}</p><p style="font-size:18px; font-weight: bold; margin: 0px; color:color:#424242">Enf. ${aplicador}</p></div></body></html>`,
    function (err, data) {
      console.log(data.toString());
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
