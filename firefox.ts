import { firefox } from "npm:playwright@1.47.2";

async function main() {
  await using browser = await firefox.launch({
    headless: true,
    args: [
      "--no-sandbox",
    ],
    firefoxUserPrefs: {
      "gfx.webrender.all": false,
      "media.hardware-video-decoding.enabled": false,
    },
  });
  await using page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();
  console.log(`title: ${title}`);
}

if (import.meta.main) {
  await main();
}
