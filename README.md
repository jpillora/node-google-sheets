# Google spreadsheets V4 API using Node

Instead of upgrading my old Google Spreadsheets module [`edit-google-spreadsheet`](https://github.com/jpillora/node-edit-google-spreadsheet) to support the Google Sheets v4 API, I've chosen to deprecate it, and provide a guide on how to use the `googleapis` module directly. The `googleapis` module, along with the Sheets v4 API provides:

- Faster responses
- More features
- Uses JSON instead of XML
- `async`/`await` support

See example (`eg`) files in this repository for more information

---

Tips:

- The Node.js API mirrors the "REST Resources" found in the documentation https://developers.google.com/sheets/api/reference/rest/.
- Use a TypeScript enabled editor for useful auto-completes

### Finding your credentials

The following process creates a new OAuth application (Client ID/Secret) and gives it access to your Google account's spreadsheets (Refresh token) and stores the results into `credentials.json`

1. Get your credentials
    1. Go to https://console.cloud.google.com/apis/dashboard
    1. Click "Enable APIs and Services"
    1. Search "Sheets"
    1. Click "Enable"
    1. Go to https://console.developers.google.com/apis/credentials/oauthclient
    1. **IMPORTANT** Choose "Other" and choose a name
    1. Should find a form with: Client ID, Client secret
    1. Run `node credentials-fill.js` to generate `credentials.json`
1. Run the examples (`eg-*.js`)

#### MIT License

Copyright © 2018 Jaime Pillora &lt;dev@jpillora.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
