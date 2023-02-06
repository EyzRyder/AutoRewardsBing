const playwright = require('playwright')

const browserType = 'chromium';

async function main(){
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://google.com')
    // console.log("oi")
}

main()