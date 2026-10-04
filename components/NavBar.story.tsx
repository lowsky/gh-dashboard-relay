import { expect, waitFor, within } from 'storybook/test';

import preview from '../.storybook/preview';

import { NavBar } from './NavBar';
import { darkColors, getColor, lightColors } from './theme-contrast';

type ColorMode = 'light' | 'dark';

// Relative luminance and contrast per WCAG, independent of the application's palette selection.
function contrastRatio(foreground: string, background: string) {
    const luminance = (color: string) => {
        const channels = color.startsWith('#')
            ? color
                  .slice(1)
                  .match(/.{2}/g)!
                  .map((channel) => parseInt(channel, 16))
            : color
                  .match(/[\d.]+/g)!
                  .slice(0, 3)
                  .map(Number);
        const [red, green, blue] = channels.map((channel) => {
            const value = channel / 255;
            return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    };
    const values = [luminance(foreground), luminance(background)];
    return (Math.max(...values) + 0.05) / (Math.min(...values) + 0.05);
}

function currentMode(): ColorMode {
    return document.documentElement.style.colorScheme === 'dark' ? 'dark' : 'light';
}

async function expectNavColors(navigation: HTMLElement, mode: ColorMode) {
    await waitFor(() => {
        expect(navigation).toHaveStyle({
            backgroundColor: getColor(mode, 'background'),
            color: getColor(mode, 'textPrimary'),
            borderBottomColor: getColor(mode, 'border'),
        });
    });
}

const meta = preview.meta({
    component: NavBar,
    globals: { theme: 'light' },
    beforeEach: async ({ globals }) => {
        // The installed Storybook addon still imports Vitest's old browser context.
        // Set the viewport explicitly for Vitest 5; Storybook uses its viewport global.
        if (import.meta.env.MODE === 'test') {
            const { page } = await import('vitest/browser');
            await page.viewport(globals.viewport?.value === 'mobile1' ? 320 : 1200, 900);
        }
    },
});

export default meta;

export const PaletteSelection = meta.story({
    play: async () => {
        const tokens = ['background', 'textPrimary', 'textSecondary', 'border', 'icon'] as const;
        for (const token of tokens) {
            await expect(getColor('light', token)).toBe(lightColors[token]);
            await expect(getColor('dark', token)).toBe(darkColors[token]);
            // Switching back must not retain the previously selected theme.
            await expect(getColor('light', token)).toBe(lightColors[token]);
            await expect(lightColors[token]).toMatch(/^#[\da-f]{6}$/i);
            await expect(darkColors[token]).toMatch(/^#[\da-f]{6}$/i);
        }
    },
});

export const PaletteContrast = meta.story({
    play: async () => {
        for (const mode of ['light', 'dark'] as const) {
            const background = getColor(mode, 'background');
            for (const token of ['textPrimary', 'textSecondary'] as const) {
                await expect(
                    contrastRatio(getColor(mode, token), background),
                    `${mode} ${token}`
                ).toBeGreaterThanOrEqual(4.5);
            }
            await expect(contrastRatio(getColor(mode, 'icon'), background), `${mode} icon`).toBeGreaterThanOrEqual(3);
        }
    },
});

export const Default = meta.story({
    play: async ({ canvas }) => {
        const mainNavigation = await canvas.findByRole('navigation', { name: 'Main navigation' });
        await expect(mainNavigation.tagName).toBe('NAV');
        const navigation = canvas.getByRole('navigation', { name: '' });
        await expect(navigation).toContainElement(mainNavigation);
        await expect(within(mainNavigation).getByRole('link', { name: 'Home', exact: true })).toHaveAttribute(
            'href',
            '/'
        );
        await expect(
            within(mainNavigation).getByRole('link', { name: 'GitHub Repository', exact: true })
        ).toHaveAttribute('href', 'https://www.github.com/lowsky/gh-dashboard-relay');
        await expect(canvas.queryByRole('button', { name: 'Toggle Navigation Menu' })).not.toBeInTheDocument();
    },
});

export const ThemeChanges = meta.story({
    play: async ({ canvas, userEvent }) => {
        const mainNavigation = await canvas.findByRole('navigation', { name: 'Main navigation' });
        const navigation = canvas.getByRole('navigation', { name: '' });
        const toggle = await canvas.findByRole('button', { name: 'Toggle color mode' });
        const initialMode = currentMode();

        const checkColors = async (mode: ColorMode) => {
            await expectNavColors(navigation, mode);
            for (const link of within(mainNavigation).getAllByRole('link')) {
                // Use rendered link colors to catch regressions in the global anchor styles too.
                await expect(
                    contrastRatio(getComputedStyle(link).color, getComputedStyle(navigation).backgroundColor)
                ).toBeGreaterThanOrEqual(4.5);
            }
        };

        await checkColors(initialMode);
        try {
            await userEvent.click(toggle);
            await checkColors(initialMode === 'light' ? 'dark' : 'light');
        } finally {
            await userEvent.click(toggle);
        }
        await checkColors(initialMode);
    },
});

export const Mobile = meta.story({
    globals: { viewport: { value: 'mobile1', isRotated: false } },
    play: async ({ canvas, userEvent }) => {
        const menuToggle = await canvas.findByRole('button', { name: 'Toggle Navigation Menu' });
        const navigation = canvas.getByRole('navigation', { name: '' });
        await expect(canvas.queryByRole('navigation', { name: 'Main navigation' })).not.toBeInTheDocument();
        await expect(canvas.queryByRole('link', { name: 'GitHub Repository' })).not.toBeInTheDocument();

        menuToggle.focus();
        await userEvent.keyboard('{Enter}');
        const repositoryLink = await canvas.findByRole('link', { name: 'GitHub Repository', exact: true });
        await waitFor(() => expect(repositoryLink).toBeVisible());
        await expect(repositoryLink).toHaveAttribute('href', 'https://www.github.com/lowsky/gh-dashboard-relay');
        const colorToggle = await canvas.findByRole('button', { name: 'Toggle color mode' });
        const initialMode = currentMode();

        const checkColors = async (mode: ColorMode) => {
            await expectNavColors(navigation, mode);
            const mobileMenu = repositoryLink.parentElement!;
            await waitFor(() => expect(mobileMenu).toHaveStyle({ backgroundColor: getColor(mode, 'background') }));
            await expect(
                contrastRatio(getComputedStyle(repositoryLink).color, getComputedStyle(mobileMenu).backgroundColor)
            ).toBeGreaterThanOrEqual(4.5);
        };

        await checkColors(initialMode);
        try {
            await userEvent.click(colorToggle);
            await checkColors(initialMode === 'light' ? 'dark' : 'light');
        } finally {
            await userEvent.click(colorToggle);
        }
        await checkColors(initialMode);

        menuToggle.focus();
        await userEvent.keyboard(' ');
        await waitFor(() => expect(canvas.queryByRole('link', { name: 'GitHub Repository' })).not.toBeInTheDocument());
        // Reopening must expose just the mobile link, with the same accessible name.
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(canvas.getByRole('link', { name: 'GitHub Repository', exact: true })).toBeVisible());
        await expect(canvas.getAllByRole('link', { name: 'GitHub Repository' })).toHaveLength(1);
    },
});
