const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta public
app.use(serveStatic(path.join(__dirname, 'public')));

// Redirigir todas las rutas no encontradas a index.html para SPA
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log('Servidor iniciado en el puerto: ' + port);
