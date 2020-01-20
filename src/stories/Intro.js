/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const styles = {
    main: {
        margin: 15,
        maxWidth: 600,
        lineHeight: 1.4,
        fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
    },

    link: {
        color: '#1474f3',
        textDecoration: 'none',
        borderBottom: '1px solid #1474f3',
        paddingBottom: 2,
        paddingLeft: '1em',
        paddingRight: '1em',
    },

    code: {
        fontSize: 15,
        fontWeight: 600,
        padding: '2px 5px',
        border: '1px solid #eae9e9',
        borderRadius: 4,
        backgroundColor: '#f3f2f2',
        color: '#3a3a3a',
    },
};

export default class Intro extends Component {
    jumpToStory = event => {
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        if (this.props.showApp) {
            // eslint-disable-next-line react/prop-types
            this.props.jumpToStory();
        }
    };

    render() {
        return (
            <div style={styles.main}>
                <h1>STORYBOOK of dashboard</h1>
                <p>
                    Jump to these
                    <a style={styles.link} href="#" onClick={e => this.jumpToStory(e)}>
                        stories
                    </a>
                    for the component called <code style={styles.code}>User</code>.
                </p>
                <p>
                    Have a look at the{' '}
                    <a
                        style={styles.link}
                        href="https://github.com/storybooks/storybook"
                        target="_blank"
                        rel="noopener noreferrer">
                        Storybook
                    </a>{' '}
                    repo for more information about storybook.
                </p>
            </div>
        );
    }
}
