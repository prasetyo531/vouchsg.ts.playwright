import { test, expect } from '@playwright/test';

test.describe('Snake Game', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('@EndToEnd - Validate should restart game when clicking Play Again', async ({ page }) => {
    await page.click('#startBtn');

    await expect(page.locator('#gameOver')).toBeVisible();
    await page.click('#playAgainBtn');

    await expect(page.locator('#gameOver')).toBeHidden();
    await expect(page.locator('#score')).toHaveText('0');
  });
});
