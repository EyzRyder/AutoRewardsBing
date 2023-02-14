const playwright = require('playwright')
require('dotenv').config();

const browserType = 'chromium';

async function main(){
  
  // Ganhe até 90 pontos por dia, 3 pontos por pesquisa no COMPUTADOR, 90 / 3 = 30. Então o script tem que logar, abrir o bing e efetuar 30 pesquisas
  
    const browser = await playwright[browserType].launch({
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', //abre o edge
      headless: false,
     });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://login.live.com') // Abre a pagina de login da microsoft 

    //Login e Senha

    const input =  await page.$('[name ="loginfmt"]')
    await input.type(process.env)
    await input.press('Enter');

    const pass =  await page.$('[name ="passwd"]')
    await pass.type(process.env)
    await page.click('#idSIButton9') // clica no botão de logar da senha, pq o Enter n funciona
    await page.click('#idSIButton9') // clica no botão para continuar que possui o mesmo id


    //Abrir Bing

    await page.goto('https://www.bing.com/search?q=Pesquisa+Numero+3&qs=n&form=QBRE&sp=-1&pq=&sc=10-0&sk=&cvid=AE59F13D55AE4443A173E4DA65169A6E&ghsh=0&ghacc=0&ghpl=')

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
      
          await new Promise(resolve => setTimeout(resolve, 500));
        }

        await page.click('#sb_form_q');
        await page.click('#sw_clx');

        await page.click('#sb_form_q');
        const Input = await page.$('#sb_form_q');
        await Input.type(`Por Hoje é Só 👏👏👏`);

      }, 5000);
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