import fetch from 'node-fetch';
require('dotenv').config();

const { CIRCLE_API_USER_TOKEN } = process.env;

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    console.log('deploy-success body type', typeof event.body);
    console.log('deploy-success body=', event.body);
    const body = JSON.parse(event.body);
    console.log('deploy-success body.review_id=', body.review_id);

    const { branch = 'info-missing', review_id = '0', commit_ref = '123456' } = body;

    const url = `https://${CIRCLE_API_USER_TOKEN}@circleci.com/api/v1.1/project/github/lowsky/dashboard/tree/${branch}`;
    const build_parameters = {
        CIRCLE_JOB: 'smoke',
        CIRCLE_PR_NUMBER: review_id,
        DEPLOYED_SHA1: commit_ref,
    };

    console.log('triggering a new build on via', url, build_parameters);

    try {
        const response = await fetch(url, {
            headers: { Accept: 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                build_parameters,
            }),
        });

        if (!response.ok) {
            console.log('circleci error! Response:', response);

            // NOT res.status >= 200 && res.status < 300
            return {
                statusCode: response.status,
                body: response.statusText,
            };
        }

        console.log('success: response:', response);

        return {
            statusCode: 200,
            body: `Smoketest on circle-ci triggerd for branch ${branch} PR ${review_id} commit ${commit_ref}`,
        };
    } catch (err) {
        console.log('error: ', err); // output to netlify function log

        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
};
