import { chromium, firefox } from "playwright";

function chromiumOpts() {
  return {
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--disable-gpu",
      "--no-xshm",
      "--disable-features=VizDisplayCompositor",
    ],
  };
}

function firefoxOpts() {
  return {
    args: [
      "--no-sandbox",
    ],
    firefoxUserPrefs: {
      "gfx.webrender.all": false,
      "media.hardware-video-decoding.enabled": false,
    },
  };
}

async function main(browserKind) {
  const opts = browserKind === "firefox" ? firefoxOpts() : chromiumOpts();
  const browser = await (browserKind === "firefox" ? firefox : chromium)
    .launch({
      headless: true,
      ...opts,
    });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();
  console.log(`title: ${title}`);
  await page.close();
  await browser.close();
}

await main(process.argv[2]);
