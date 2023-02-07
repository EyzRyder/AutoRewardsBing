const playwright = require('playwright')
require('dotenv').config();

const browserType = 'chromium';

async function main(){
  
  // Ganhe até 90 pontos por dia, 3 pontos por pesquisa no COMPUTADOR, 90 / 3 = 30. Então o script tem que logar, abrir o bing e efetuar 30 pesquisas
  
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://login.live.com') // Abre a pagina de login da microsoft 

    //Login e Senha

    const input =  await page.$('[name ="loginfmt"]')
    await input.type(process.env.EMAIL)
    await input.press('Enter');

    const pass =  await page.$('[name ="passwd"]')
    await pass.type(process.env.KEY)
    await page.click('#idSIButton9') // clica no botão de logar da senha, pq o Enter n funciona
    await page.click('#idSIButton9') // clica no botão para continuar que possui o mesmo id


    //Abrir Bing

    await page.goto('https://www.bing.com/search?q=&form=QBLH&sp=-1&pq=&sc=8-0&qs=n&sk=&cvid=C642DE3A760C43F497A0F0B3187CA68F&ghsh=0&ghacc=0&ghpl=')

    //Pesquisa
    
    const Term1 = '0';
    const SInput = await page.$('[name = "q"]');
    await SInput.type(Term1)
    await SInput.press('Enter')

    //Loop de Pesquisa
    setTimeout(async () => {

      // oque cada operação faz esta comentando apartir da linha 71

      await page.click("#bnp_btn_accept");

        for (let i = 1; i < 31; i++) {
          await page.click('#sb_form_q');
          await page.click('#sw_clx');
      
          await page.click('#sb_form_q');
          const Input = await page.$('#sb_form_q');
          await Input.type(`Pesquisa Numero ${i}`);
          await Input.press('Enter');
      
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        await page.click('#sb_form_q');
        await page.click('#sw_clx');

        await page.click('#sb_form_q');
        const Input = await page.$('#sb_form_q');
        await Input.type(`Por Hoje é Só 👏👏👏`);

      }, 4000);
    }

main()


        // await page.click('#sb_form_q') aperta no input
        // await page.click('#sw_clx') aperta o x para limpar o texto
    
        // await page.click('#sb_form_q')
        // const tst = await page.$('#sb_form_q');
        // await tst.type('oii')
        // await tst.press('Enter')
    
        // setTimeout(async () => {
        //   await page.reload();
        // }, 1000);// atualiza a pagina para atualizar os pontos

        // await page.click("#bnp_btn_accept"); // aceita o modal de pedido de cookies