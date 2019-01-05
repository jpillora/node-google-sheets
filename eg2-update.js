const { google } = require("googleapis");
const auth = require("./credentials-load");

async function run() {
  //create sheets client
  const sheets = google.sheets({ version: "v4", auth });
  //replace a range of values (3x3 grid, starting at H8)
  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: "1t1oIvoknE9fye4LAd2ZYzfIYlu49r5Jf6XbwNKt1saE",
    range: "Sheet1!H8",
    valueInputOption: "RAW",
    resource: {
      values: [
        ["first row, first col", "second", "third"],
        ["second row", "second", "third!"],
        ["third row", "second", "third!!"]
      ]
    }
  });
  //print results
  console.log(JSON.stringify(res.data, null, 2));
  // {
  //   "spreadsheetId": "1t1oIvoknE9fye4LAd2ZYzfIYlu49r5Jf6XbwNKt1saE",
  //   "updatedRange": "Sheet1!H8:J10",
  //   "updatedRows": 3,
  //   "updatedColumns": 3,
  //   "updatedCells": 9
  // }
}

run().catch(err => console.error("ERR", err));
