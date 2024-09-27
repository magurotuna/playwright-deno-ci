import { chromium } from "npm:playwright@1.47.2";

async function main() {
  await using _browser = await chromium.launch({
    headless: true,
  });
}

if (import.meta.main) {
  await main();
}
