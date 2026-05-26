import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log('Navigating...');
  const response = await page.goto('https://muxindd-cyber.github.io/onlineSchool/', { waitUntil: 'networkidle0' });
  console.log('Status:', response.status());
  
  await browser.close();
})();
