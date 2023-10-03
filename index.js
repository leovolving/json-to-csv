const fs = require("fs");
const allData = require("./sql-dump-data.json"); // add your json to this file or update the import

const filteredAndFormatted = allData.reduce((acc, curr) => {
  if (false) return acc; // filter as needed

  const formatted = {}; // format/transform data as needed
  acc.push(formatted);
  return acc;
}, []);

const header = Object.keys(filteredAndFormatted[0]);
const csv = [
  header.join(","), // header row first
  ...filteredAndFormatted.map((row) =>
    header.map((fieldName) => JSON.stringify(row[fieldName])).join(",")
  ),
].join("\r\n");

const iso = new Date().toISOString();
const fileName = `${iso}.csv`;

fs.writeFile(`./${fileName}`, csv, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`${fileName} created successfully`);
});
