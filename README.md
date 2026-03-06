## Tools Used
- Playwright
- JavaScript
- Node.js

## Automation Steps
1. Launch Google Chrome and navigate to https://www.google.com
2. Search for **"google patents"**
3. Open the official **Google Patents** website from the search results
4. Search for the keyword **"stent"** on Google Patents
5. Open a relevant patent result
6. Click the **Download PDF** option
7. Verify that the patent PDF opens successfully

## Execution Steps

### Install Dependencies
Run the following command to install required dependencies:


```
npm install
```


### Run the Test
Execute the automation test using the following command:


```
npx playwright test
```


## Expected Result
The script successfully performs the following actions:

- Navigates to Google
- Searches for **Google Patents**
- Opens the official Google Patents website
- Searches for the keyword **"stent"**
- Opens a relevant patent result
- Accesses the **Download PDF** option
- Verifies that the patent PDF document opens successfully
