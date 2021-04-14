const puppy = require("puppeteer");
const id = "islacodexz89@gmail.com";
const pass = "yourisla";

async function main() {
    let browser = await puppy.launch({
        headless: false ,
        defaultViewport: false
    });
    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto("https://www.libas.in/account/login?return_url=%2Faccount");
    await tab.type("#CustomerEmail.input-full", id);
    await tab.type("#CustomerPassword.input-full", pass);
    await tab.click('.btn.btn--full');
    await tab.waitForNavigation({waitUntil:"networkidle2"});
    await new Promise(function(resolve,reject){
        setTimeout(function(){
            return resolve()
        },500)
    });
    // await tab.waitForSelector(".modal__close.js-modal-close.text-link",{visible:true})
    // let buttons = await tab.$$(".modal__close.js-modal-close.text-link");
    // console.log(buttons.length)
    // await buttons[1].click();
    await tab.waitForSelector(".site-nav__item.site-nav__expanded-item");
    let searchbutton = await tab.$$(".site-nav__item.site-nav__expanded-item");
   // await tab.waitForNavigation({waitUntil:"networkidle2"});
    
    await searchbutton[3].click();
    //console.log(searchbutton.length);
    //let searchbuttons = await tab.$$$$('.g.site-nav.site-navigation.small--hide li');
    //await searchbuttons[3].click();
    //await tab.click("")
    //await browser.close();
}

main();