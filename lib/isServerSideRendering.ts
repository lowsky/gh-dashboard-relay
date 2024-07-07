export function isServerSideRendering() {
    return typeof window === 'undefined';
}
