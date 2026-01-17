const fs = require('fs');
const pdfParse = require('pdf-parse');

const dataBuffer = fs.readFileSync('Signal_Intelligence_Definitions.pdf');

pdfParse(dataBuffer).then(function(data) {
  fs.writeFileSync('Signal_Intelligence_Definitions.txt', data.text);
  console.log('PDF extracted successfully');
  console.log('Total pages:', data.numpages);
}).catch(function(error) {
  console.error('Error:', error);
  console.error('Type of pdfParse:', typeof pdfParse);
  console.error('pdfParse:', pdfParse);
});
