const playwright = require('playwright')

const browserType = 'chromium';

async function main(){
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://google.com')
    // console.log("oi")

    const searchTerm = 'eu amo automação'; // texto a ser inserido
    const input =  await page.$('[name ="q"]') // pegando o input pelo name
    await input.type(searchTerm);
    await input.press('Enter');

}

main()