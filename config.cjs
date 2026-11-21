// eslint-disable-next-line no-undef
module.exports = {
//  rebaseWhen: 'auto',
  persistRepoData: true,

    /////  prConcurrentLimit: 10,
    // inherits from prConcurrentLimit
    ///  branchConcurrentLimit: 15,
    //////prHourlyLimit: 40,

  // https://github.com/renovatebot/renovate/blob/main/docs/usage/self-hosted-configuration.md#requireconfig
  /*
  extends: [
    ////?':dependencyDashboardApproval',
    ':separateMultipleMajorReleases',
    ':pinDevDependencies', // https://docs.renovatebot.com/upgrade-best-practices/#extends-pindevdependencies
    // not yet???
    //':disableDependencyDashboard',
    'helpers:disableTypesNodeMajor'
    'config:best-practices',
    'config:recommended',
  ],
 */
  extends: [
    ':dependencyDashboard',
    ':separateMultipleMajorReleases',
    ":pinDevDependencies",
    'config:best-practices',
    'config:recommended',
  ],

  ///// why here? idk. "dependencyDashboard": true,

  "packageRules": [{"matchDatasources": ["npm"], "minimumReleaseAge": "3 days"}],

  autoApprove: true,
  automergeStrategy: 'squash',
};
