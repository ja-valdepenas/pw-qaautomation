import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests', // Make sure this points to the correct directory
    use: {
        browserName: 'chromium', // Use Chromium for Edge
        channel: 'msedge', // Specifies Microsoft Edge
        headless: false,
        baseURL: 'https://www.saucedemo.com',
        viewport: { width: 1280, height: 720 },
    },
};

export default config;
