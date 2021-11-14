const indexPageContent = () => (
  <div style={{ padding: '3em' }}>
    <div className="title">
      <h1>What is it?</h1>
    </div>
    <div className="content">
      <p>
        The goal of this demo was to compare a <strong>Relay based GraphQL</strong> and <strong>regular
        Rest</strong> approach for fetching data in a web client.
      </p>
      <p>
        Additionally, is contains a solution for mixing <strong>Relay
      </strong> and <strong>normal React</strong> components.
      </p>
    </div>
    <div className="content">
      <p>You can use the links above in the nav bar for different views:</p>
      <ul>
        <li>
          <strong>Storybook</strong> shows all components.
        </li>
        <li>
          <strong>GraphQL + Relay</strong> - fetches all information from a locally installed relay server. <strong>Note:</strong>
          <i>This needs a backend server / currently implemented as lambda function...</i>
        </li>
        <li>
          <strong>RESTFul Demo</strong> - just fetches info from Github&apos;s public open API via Rest calls.
        </li>
      </ul>
      <h4 className="is-size-4">Examples</h4>
      <ul>
        <li>
          <strong>lowsky/dashboard:</strong>
          <a href="./restful/lowsky/dashboard">
            <strong>Rest</strong>
          </a>
          or
          <a href="./relay/lowsky/dashboard">
            <strong>GraphQL Relay</strong>
          </a>
          based,
          or
          <a href="./side-by-side/lowsky/dashboard">
            <strong>side-by-side</strong>
          </a>
        </li>
        <li>
          <strong>lowsky/spotify-graphql-server:</strong>
          <a href="./restful/lowsky/spotify-graphql-server">
            <strong>Rest</strong>
          </a>
          or
          <a href="./relay/lowsky/spotify-graphql-server">
            <strong>GraphQL Relay</strong>
          </a>
          based,
          or
          <a href="./side-by-side/lowsky/spotify-graphql-server">
            <strong>side-by-side</strong>
          </a>
        </li>
      </ul>

      <h4 className="is-size-4">How to start the local server</h4>
      <p>
        After installing the dependencies via <code>npm install</code> you also need to configure GitHub
        authentication token in the <code>server/.env</code> file, then simply run the local graphql server via
        and web app via
        <code>yarn run dev</code>
      </p>
    </div>
  </div>
);

export default indexPageContent;
