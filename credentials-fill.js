const { google } = require("googleapis");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const question = async text =>
  new Promise((resolve, reject) => {
    rl.question(text, result =>
      result ? resolve(result) : reject("Nothing entered")
    );
  });

// Client ID and client secret are available at
// 1. Go to https://console.cloud.google.com/apis/dashboard
// 2. Click "Enable APIs and Services"
// 3. Search "Sheets"
// 4. Click "Enable"
// 5. Go to https://console.developers.google.com/apis/credentials/oauthclient
// 6. IMPORTANT: Choose "Other" and choose a name
// 8. Should find a form with: Client ID, Client secret
// 9. Run this script

async function fill() {
  const clientId = await question("Enter the client ID here: ");
  const clientSecret = await question("Enter the client secret here: ");
  // create new oauth client for the app
  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    "urn:ietf:wg:oauth:2.0:oob"
  );
  // generate consent page url
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/spreadsheets"]
  });
  // url provides access, then returns a code
  console.log("Visit this url:\n%s", url);
  // paste in code
  const code = await question("Enter the code here: ");
  console.log("Converting to refresh token...");
  // convert into refresh token
  const resp = await oauth2Client.getToken(code);
  const creds = {
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: resp.tokens.refresh_token
  };
  const str = JSON.stringify(creds, true, 2);
  console.log(`Your 'credentials.json' has been set to: ${str}`);
  fs.writeFileSync("./credentials.json", str);
}

fill().then(
  () => {
    console.log("done");
    rl.close();
  },
  err => {
    console.error("ERR", err);
    rl.close();
  }
);
