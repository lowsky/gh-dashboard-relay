// WCAG 2.1 compliant colors with minimum contrast ratio of 4.5:1 for normal text
// and 3:1 for large text (18pt and bold or 24pt)

// Light mode colors
export const lightColors = {
    background: '#FFFFFF', // White
    textPrimary: '#4A5568', // Gray.600 - meets 4.5:1 contrast against white
    textSecondary: '#636E7B', // Darkened for 4.5:1 contrast against white (5.19:1)
    border: '#CED4DA', // Gray.300
    icon: '#1A202C', // Gray.800 for icons
};

// Dark mode colors
export const darkColors = {
    background: '#1A202C', // Gray.800
    textPrimary: '#FFFFFF', // White - meets 4.5:1 contrast against gray.800
    textSecondary: '#E2E8F0', // Gray.300
    border: '#4A5568', // Gray.600
    icon: '#FFFFFF', // White for icons
};

// Helper function to get color based on mode
export function getColor(mode: 'light' | 'dark', type: keyof typeof lightColors): string {
    return mode === 'light' ? lightColors[type] : darkColors[type];
}