import { test, expect } from '@playwright/test'

test('renders root page', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await expect(page).toHaveTitle('3d Area Chart')
  await expect(page.getByText('Loaded')).toBeInViewport()
})
