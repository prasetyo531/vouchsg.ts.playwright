import { test, expect } from '@playwright/test';

test.describe('Snake Game - Mocked Food Spawn', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      const realRandom = Math.random;
      let calls = 0;
      Math.random = () => {
        calls++;
        if (calls === 1) return 11 / 20; // x
        if (calls === 2) return 10 / 20; // y
        return realRandom(); // fallback to real randomness
      };
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });

  test('@EndToEnd - Ensure snake eats first food and gameover then restart', async ({ page }) => {
    await page.click('#startBtn');
    await page.waitForTimeout(500);
    await expect(page.locator('#score')).toHaveText('10');

    await expect(page.locator('#gameOver')).toBeVisible();
    await page.click('#playAgainBtn');

    await expect(page.locator('#gameOver')).toBeHidden();
    await expect(page.locator('#score')).toHaveText('0');
  });
});
