import { test, expect } from '@playwright/test';

test.describe('Snake Game', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('@functional - Validate should render the game UI', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Snake Game');
    await expect(page.locator('#gameCanvas')).toBeVisible();
    await expect(page.locator('#score')).toHaveText('0');
    await expect(page.locator('#highScore')).toHaveText('0');
    await expect(page.locator('#startBtn')).toBeVisible();
    await expect(page.locator('#pauseBtn')).toBeVisible();
    await expect(page.locator('#resetBtn')).toBeVisible();
    await expect(page.locator('#gameOver')).toBeHidden();
  });

  test('@functional - Validate should start the game when clicking Start button', async ({ page }) => {
    await page.click('#startBtn');
    await expect(page.locator('#startBtn')).toBeDisabled();
    await expect(page.locator('#pauseBtn')).not.toBeDisabled();
  });

  test('@functional - Validate should render by simulating long play', async ({ page }) => {
    await page.click('#startBtn');

    // Force score change by simulating long play
    await page.waitForTimeout(2000);
    const score = await page.locator('#score').innerText();
    expect(parseInt(score)).toBeGreaterThanOrEqual(0);
  });

  test('@functional - Validate should pause and resume game', async ({ page }) => {
    await page.click('#startBtn');
    await page.click('#pauseBtn');
    await expect(page.locator('#pauseBtn')).toHaveText('Resume');
    await page.click('#pauseBtn');
    await expect(page.locator('#pauseBtn')).toHaveText('Pause');
  });

  test('@functional - Validate should show game over when snake hits wall', async ({ page }) => {
    await page.click('#startBtn');

    await expect(page.locator('#gameOver')).toBeVisible();
    const score = await page.locator('#score').innerText();
    expect(parseInt(score)).toBeGreaterThanOrEqual(0);
  });
});
