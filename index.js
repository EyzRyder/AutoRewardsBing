const playwright = require('playwright')
require('dotenv').config();

const browserType = 'chromium';

async function main(){
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://login.live.com') // Abre a pagina de login

    // Login e Senha

    const input =  await page.$('[name ="loginfmt"]')
    await input.type(process.env.EMAIL)
    await input.press('Enter');

    const pass =  await page.$('[name ="passwd"]')
    await pass.type(process.env.KEY)
    await page.click('#idSIButton9') //clica no botão de logar da senha, pq o Enter n funciona
    await page.click('#idSIButton9') // clica no botão para continuar que possui o mesmo id


    //Abrir Bing

    await page.goto('https://www.bing.com/search?q=awdawd&form=QBLH&sp=-1&pq=&sc=8-0&qs=n&sk=&cvid=C642DE3A760C43F497A0F0B3187CA68F&ghsh=0&ghacc=0&ghpl=')

    setTimeout(async () => {
        await page.reload();
      }, 3000); // atualiza a pagina para atualizar os pontos

      await page.click("#bnp_btn_accept"); // aceita o modal de pedido de cookies


    //Pesquisa
    
    //Ganhe até 90 pontos por dia, 3 pontos por pesquisa no COMPUTADOR, 90 / 3 = 30, ent tem que efetuar 30 pesquisas

    const Term1 = '1';
    const SInput = await page.$('[name = "q"]');
    await SInput.type(Term1)
    await SInput.press('Enter')
    

}

main()

//     const searchTerm = 'eu amo automação'; // texto a ser inserido
//     const input =  await page.$('[name ="q"]') // pegando o input pelo name
//     await input.type(searchTerm);
//     await input.press('Enter');