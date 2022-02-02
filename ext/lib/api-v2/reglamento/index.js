const express = require('express')
var https = require('https')
const fs = require('fs')

const app = module.exports = express.Router()

const filename = "presupuesto-participativo-mgp-2022.pdf";
const URL = "https://celeste.blob.core.windows.net/clients-assets/pp-mgp/pdf/";

app.get('/reglamento', (req, res) => {
  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"'),
  res.setHeader('Content-type', 'application/pdf')
  const file = https.get(URL+filename)
  data = fs.readFileSync(file);
  res.send(data)
})

// app.get('/reglamento2', express.static(URL + filename));