import Papa from 'papaparse';

export async function parseCSV(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
}

export function findRowByValue(csvData, value) {
  return csvData.find(row => Object.values(row).includes(value));
}
