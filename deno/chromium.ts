import { chromium } from "npm:playwright@1.47.2";

async function main() {
  await using _browser = await chromium.launch({
    headless: true,
    args: [
      "--no-sandbox",
      //"--headless=new",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--disable-gpu",
      "--no-xshm",
      "--disable-features=VizDisplayCompositor",
    ],
  });
}

if (import.meta.main) {
  await main();
}
