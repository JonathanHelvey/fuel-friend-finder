const puppeteer = require('puppeteer');
// const $ = require('cheerio');
// const url = 'https://www.gasbuddy.com/gasprices/Kentucky/Walton';

const gasPriceScrapper = async (city, state) => {
    const url = `https://www.gasbuddy.com/gasprices/${state}/${city}`
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.goto(url);

    // get gas details
    let gasData = await page.evaluate(() => {
        let gasStations = [];
        // get the gas elements
        let gasElms = document.querySelectorAll('tr.accordion-toggle');
        // get the gas data
        gasElms.forEach((gasElement) => {
            let gasJson = {};
            try {
                gasJson.name = gasElement.querySelector('strong').innerText;
                gasJson.price = gasElement.querySelector('div.gb-price').innerText;
                gasJson.location = gasElement.innerText; // parse string.
                // if(gasElement.querySelector('strong.price')){
                //     gasJson.price = gasElement.querySelector('strong.price').innerText;
                // }
            }
            catch (exception){

            }
            gasStations.push(gasJson);
        });
        return gasStations;
    });

    console.dir(gasData);
};

module.exports = gasPriceScrapper('Walton', 'Kentucky');