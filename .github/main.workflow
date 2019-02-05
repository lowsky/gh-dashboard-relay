workflow "AndAction!" {
  on = "push"
  resolves = ["Test", "Lint", "Build"]
}
action "eval-own-cypress-action" {
  uses = "./action-cypress"
}

action "deps" {
  needs = "eval-own-cypress-action"
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  needs = "deps"
  uses = "actions/npm@master"
  args = "run test:ci"
  env = {
      CI = "true"
  }
}

action "Lint" {
  needs = "deps"
  uses = "actions/npm@master"
  args = "run lint"
}

action "Build" {
  needs = "deps"
  uses = "actions/npm@master"
  args = "run build"
}
