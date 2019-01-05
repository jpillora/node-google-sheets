const { google } = require("googleapis");
const auth = require("./credentials-load");

async function run() {
  //create sheets client
  const sheets = google.sheets({ version: "v4", auth });
  //insert 3 new rows, then update them with data
  const res = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: "1t1oIvoknE9fye4LAd2ZYzfIYlu49r5Jf6XbwNKt1saE",
    requestBody: {
      requests: [
        {
          insertDimension: {
            range: {
              dimension: "ROWS",
              startIndex: 0,
              endIndex: 3
            }
          }
        },
        {
          updateCells: {
            fields: "*",
            range: {
              startRowIndex: 0,
              startColumnIndex: 0,
              endRowIndex: 3,
              endColumnIndex: 3
            },
            rows: [
              {
                values: [
                  {
                    userEnteredValue: {
                      stringValue: "bulk 1.1"
                    }
                  },
                  {
                    userEnteredValue: {
                      stringValue: "bulk 1.2"
                    }
                  },
                  {
                    userEnteredValue: {
                      stringValue: "bulk 1.3"
                    }
                  }
                ]
              },
              {
                values: [
                  {
                    userEnteredValue: {
                      stringValue: "bulk 2.1"
                    }
                  },
                  {
                    userEnteredValue: {
                      stringValue: "bulk 2.2"
                    }
                  },
                  {
                    userEnteredValue: {
                      stringValue: "bulk 2.3"
                    }
                  }
                ]
              },
              {
                values: [
                  {
                    userEnteredValue: {
                      stringValue: "bulk 3.1"
                    }
                  },
                  {
                    userEnteredValue: {
                      stringValue: "bulk 3.2"
                    }
                  },
                  {
                    userEnteredValue: {
                      stringValue: "bulk 3.3"
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  });
  //print results
  console.log(JSON.stringify(res.data, null, 2));
}

run().catch(err => console.error("ERR", err));
