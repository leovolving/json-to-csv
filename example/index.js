const fs = require("fs");
const allData = require("./cda_qualified_clients.json");

const filteredAndFormatted = allData.reduce((acc, curr) => {
  if (curr.count !== 5) return acc;

  const formatted = {
    provider: `P${curr.id}`,
    provider_email: `provider_${curr.id}@helloalma.com`,
    client: `C-${curr.slug}`,
    client_profile_link: `https://staging.joinalma.com/clients/${curr.slug}/details/assessments`,
    scores: curr.scores.split(",").map(Number).join(", "),
  };
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
