import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Repo from "../Repo";


describe('Repo component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Repo />, div);
    });

    it('should render as expected', () => {
        const props = {
            repo: {
                owner: {
                    login: 'owner-login',
                },
                name: 'name,',
            },
        };
        const appContainer = renderer.create(<Repo {...props} />).toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
