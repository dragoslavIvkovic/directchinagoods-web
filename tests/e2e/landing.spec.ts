import { test, expect } from '@playwright/test';

// Before each test, we navigate to the base URL (landing page)
test.beforeEach(async ({ page }) => {
  await page.goto('/'); // Assumes baseURL is set in playwright.config.ts (e.g. http://localhost:5173)
});

// Group related tests for the Hero Section
test.describe('Landing Page - Hero Section & CTA', () => {
  test('should load the hero section correctly', async ({ page }) => {
    // 1. Verify the hero section is visible
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    // 2. Verify the main heading exists and has correct text
    // Replace this text with the actual text from your Hero section if needed
    const heading = page.locator('h1');
    await expect(heading).toContainText('Direct China Goods');
  });

  test('main CTA button should be visible and clickable', async ({ page }) => {
    // Locate the CTA button by its text content or aria-label
    // Example: The "CONTACT US" button in the Hero section
    const ctaButton = page.getByRole('button', { name: /CONTACT US/i }).or(page.locator('a:has-text("CONTACT US")')).first();
    
    // 1. Assert visibility
    await expect(ctaButton).toBeVisible();
    
    // 2. Check if it is enabled (clickable)
    await expect(ctaButton).toBeEnabled();

    // 3. Optional: Click it and verify it navigates or opens correct view
    // await ctaButton.click();
    // await expect(page).toHaveURL(/#contact/); 
  });
});

// Group tests for the Contact Form
test.describe('Landing Page - Contact Form Submission', () => {
  test('should submit the contact form successfully with valid inputs', async ({ page }) => {
    // 1. Scroll/navigate to the contact form section
    // Assuming you have a form element or a section with id #contact
    // Replace locators with your actual form fields' names or placeholders
    const nameInput = page.getByPlaceholder(/Name|Your Name/i);
    const emailInput = page.getByPlaceholder(/Email|Email Address/i);
    const messageInput = page.getByPlaceholder(/Message|How can we help/i);
    const submitBtn = page.getByRole('button', { name: /Send|Submit/i });

    // Skip if form doesn't exist on page yet (comment out if form is present)
    if (await submitBtn.count() === 0) {
      test.skip();
    }

    // 2. Fill out the form fields
    await nameInput.fill('QA Test User');
    await emailInput.fill('qa@example.com');
    await messageInput.fill('This is a test message from Playwright E2E testing.');

    // 3. Submit the form
    await submitBtn.click();

    // 4. Assert the success message appears or network request succeeded
    // const successMsg = page.locator('.success-message');
    // await expect(successMsg).toBeVisible();
    // await expect(successMsg).toContainText('successfully');
  });
});

// Group Visual Regression Tests
test.describe('Landing Page - Visual Regression', () => {
  test('should match the visual baseline for Desktop', async ({ page }) => {
    // 1. Ensure the page has fully loaded
    await page.waitForLoadState('networkidle');

    // 2. Take a full-page screenshot and compare it with the baseline image
    // Note: The first time this runs, it will create the baseline. Subsequent runs will compare.
    await expect(page).toHaveScreenshot('landing-page-desktop.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05, // Allow slight anti-aliasing differences
    });
  });

  test('should match the visual baseline for Mobile viewport', async ({ page }) => {
    // 1. Emulate a mobile device viewport (e.g. iPhone 12)
    await page.setViewportSize({ width: 390, height: 844 });
    
    // 2. Reload to ensure responsive layouts trigger properly
    await page.reload();
    await page.waitForLoadState('networkidle');

    // 3. Take screenshot and compare
    await expect(page).toHaveScreenshot('landing-page-mobile.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });
});
// Group Mobile Responsiveness Tests
test.describe('Landing Page - Mobile Responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport to mobile size before these tests
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X/11 Pro size
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should not have horizontal scrolling on mobile view', async ({ page }) => {
    // Check that the body width does not exceed the viewport width
    const isScrollable = await page.evaluate(() => {
      // If scrollWidth is strictly greater than clientWidth, there is horizontal scroll
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    
    expect(isScrollable).toBe(false);
  });

  test('hero section text should adjust and be visible on mobile', async ({ page }) => {
    // The main heading should be visible and within the viewport bounds
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // Verify it's within the horizontal bounds of the window
    const box = await heading.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.width).toBeLessThanOrEqual(375); // Should fit in viewport
    }
  });
});
