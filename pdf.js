const puppeteer = require("puppeteer-core")

;(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  })
  const page = await browser.newPage()
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" })
  await page.emulateMediaType("print")
  await page.pdf({
    path: "antony_holmes_resume.pdf",
    format: "letter",
    printBackground: true,
    margin: { top: 0, left: 0, bottom: 0, right: 0 },
  })
  await browser.close()
})()

// puppeteer.launch({ headless: true, args: ['--no-sandbox'] }).then((browser) => {
//     browser.newPage().then((page) => {
//         page.goto('http://localhost:9000/').then((p1) => {
//             console.log(page)
//             page.emulateMedia('print').then((p2) => {
//                 console.log(page);
//                 page.pdf({ path: 'resume.pdf', format: 'letter', printBackground: true}).then(function (res) {
//                     browser.close();
//                 })
//             })
//         })
//     })
// })
