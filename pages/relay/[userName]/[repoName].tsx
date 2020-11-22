import React from "react";
import { useEffect, useState } from "react";
import { fetchQuery } from "react-relay";
import { useRouter } from "next/router";
import { initEnvironment } from "../../../lib/relay";

import GithubQuery from "../../../queries/relayPage";
import UserRepo from "../../../relay/UserRepo";
//import { WarningMissingURLParams } from '../src/routes';
import { UILibWithRelaySupport } from "../../../components";
import UILibContext from "../../../components/UILibContext";
import { WarningMissingURLParams } from "../../../container/NavBarWithRouting";

const RelayRoot = () => {
  const router = useRouter()
  const { userName , repoName } = router.query
  console.log("rendering Relay root", { userName , repoName  });

  // @ts-ignore
  const [{ github, error }, setGithub] = useState({
    github:null,
    error: ""
  });

  useEffect(() => {
    const runQuery = async () => {
      try {
        const queryProps = await fetchQuery(environment, GithubQuery, {
          userName: userName ?? "lowsky",
          repoName: repoName ?? "dashboard"
        });
        //const initialRecords = environment.getStore().getSource().toJSON();
        // initEnvironment(initialRecords);

        console.log("fetched data:", queryProps);
        // @ts-ignore
        setGithub({
          github: queryProps.github
        });
      } catch (error) {
        setGithub({
          // @ts-ignore
          github: null,
          error
        });
      }
    };

    if (environment) {
      runQuery();
    }

  }, [userName , repoName]);
  if (!userName) {
    return WarningMissingURLParams;
  }
  const environment = initEnvironment();

  if (error) {
    console.error("Failure while rendering in relay root container:", error);
    return (
      <div className="notification has-text-danger">
        Error! While trying to load data from the server: {error}
      </div>
    );
  }

  if (github) {
    return (
      // @ts-ignore
      <UILibContext.Provider value={UILibWithRelaySupport}>
        <div className="box">
          {
            <UserRepo github={github}/>
          }
        </div>
      </UILibContext.Provider>
    );
  }

  return (
    <div className="box">
      <span className="icon is-large ">
          <i className="fas fa-spinner fa-pulse"/>
      </span>
      Loading ...
    </div>
  );
};

/*
export async function getStaticProps() {
  const params = {}
  const environment = initEnvironment()
  const queryProps = await fetchQuery(environment, GithubQuery, {
    // @ts-ignore
    userName: params?.userName ?? "lowsky",
    // @ts-ignore
    repoName: params?.repoName ?? "dashboard"
  })
  const initialRecords = environment.getStore().getSource().toJSON()

  return {
    props: {
      ...queryProps,
      initialRecords,
    },
  }
}
 */


export default RelayRoot;
