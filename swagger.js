const swaggerAutogen = require('swagger-autogen')();

const doc = {
<<<<<<< HEAD
  info: {
    title: "Users API Romero VErgara",
    description: "API for managing user contacts_final "
  },
  host: 'https://project2-p1-cse341.onrender.com', // URL pública de tu servidor en producción
  schemes: ["https"], // Usar HTTPS en producción
=======
    info: {
        title: "Users API",
        description: "API for managing user contacts"
    },
    host: "https://cse-341-project1-kiy0.onrender.com", // o la URL de tu servidor
    schemes: ["http"]
>>>>>>> parent of 564dd64 ("corrections of week 02")
};

const outputFile = "./swagger.json"; // Este es el archivo que se generará
const endpointFiles = ["./routes/index.js"]; // Los archivos que contienen las rutas de la API

<<<<<<< HEAD
swaggerAutogen(outputFile, endpointFiles, doc); // Genera el swagger.json automáticamente
=======
swaggerAutogen(outputFile, endpointFiles, doc); // Generar el swagger.json automáticamente
>>>>>>> parent of 564dd64 ("corrections of week 02")
