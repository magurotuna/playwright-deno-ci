import { chromium } from "npm:playwright@1.47.2";

async function main() {
  await using browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--headless=new", "--siable-dev-shm-usage"],
  });
  await using page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();
  console.log(`title: ${title}`);
}

if (import.meta.main) {
  await main();
}
