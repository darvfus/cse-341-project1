const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Users API",
        description: "API for managing user contacts"
    },
    host: "localhost:3000", // o la URL de tu servidor
    schemes: ["http"]
};

const outputFile = "./swagger.json"; // Este es el archivo que se generará
const endpointFiles = ["./routes/index.js"]; // Los archivos que contienen las rutas de la API

swaggerAutogen(outputFile, endpointFiles, doc); // Generar el swagger.json automáticamente
