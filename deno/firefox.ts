import { firefox } from "npm:playwright@1.47.2";

async function main() {
  await using _browser = await firefox.launch({
    headless: true,
    args: [
      "--no-sandbox",
    ],
    firefoxUserPrefs: {
      "gfx.webrender.all": false,
      "media.hardware-video-decoding.enabled": false,
    },
  });
}

if (import.meta.main) {
  await main();
}
