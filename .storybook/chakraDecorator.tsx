import { Provider } from 'components/ui/provider';

export const chakraDecorator = (StoryFn) => (
    <Provider>
        <StoryFn />
    </Provider>
);
