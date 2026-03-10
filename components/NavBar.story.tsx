import preview from '../.storybook/preview';

import { NavBar } from './NavBar';

const meta = preview.meta({
    component: NavBar,
});

export default meta;

export const Default = meta.story({});
