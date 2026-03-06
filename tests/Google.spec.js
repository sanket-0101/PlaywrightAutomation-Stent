const {test, expect} = require('@playwright/test');

test.only('Page Playwright test', async ({page})=>
{   
    
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").fill("google patents");
    await page.locator("#APjFqb").press("Enter");
    await page.locator('a:has-text("Google Patents")').first().click();
    await page.locator("#searchInput").fill("stent")
    await page.keyboard.press("Enter");
    await page.getByText("Modular stent device for multiple vessels and method").click();
    const popupPromise = page.waitForEvent('popup');
    await page.getByText("Download PDF").click();
    const pdfPage = await popupPromise;
    await pdfPage.waitForLoadState();
    expect(pdfPage.url()).toContain(".pdf");  
    console.log("PDF URL:", pdfPage.url());









});