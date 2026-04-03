import { test, expect } from '@playwright/test'

test.describe('School District - Non-demo mode', () => {
  test('homepage loads with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Excellence in Education', { exact: true })).toBeVisible()
    await expect(page.getByText('Enroll Your Child Today', { exact: true })).toBeVisible()
  })

  test('homepage shows stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('12,500+')).toBeVisible()
    await expect(page.getByText('96%')).toBeVisible()
    await expect(page.getByText('Graduation Rate', { exact: true })).toBeVisible()
  })

  test('schools listing page shows schools', async ({ page }) => {
    await page.goto('/schools')
    await expect(page.locator('h1')).toContainText('Our Schools')
    await expect(page.getByText('Oakridge Elementary School', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Oakridge High School', { exact: true }).first()).toBeVisible()
  })

  test('board members listing page shows members', async ({ page }) => {
    await page.goto('/board')
    await expect(page.locator('h1')).toContainText('Board of Education')
    await expect(page.getByText('Sarah Thompson', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Michael Garcia', { exact: true }).first()).toBeVisible()
  })

  test('programs listing page shows programs', async ({ page }) => {
    await page.goto('/programs')
    await expect(page.locator('h1')).toContainText('Programs')
    await expect(page.getByText('STEM Initiative', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Fine Arts Program', { exact: true }).first()).toBeVisible()
  })

  test('events listing page shows events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.getByText('Board Meeting', { exact: false }).first()).toBeVisible()
  })

  test('news listing page shows articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('District News')
    await expect(page.getByText('Bond Measure', { exact: false }).first()).toBeVisible()
  })

  test('about page loads via slug routing', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Oakridge School District')
  })

  test('school detail page loads via slug routing', async ({ page }) => {
    await page.goto('/oakridge-elementary-school')
    await expect(page.locator('h1')).toContainText('Oakridge Elementary School')
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/schools"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/board"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/programs"]').first()).toBeVisible()
  })
})
