workflow "Build, Test" {
  on = "push"
  resolves = [
    "Lint",
    "Build",
    "deps",
  ]
}

action "deps" {
  uses = "actions/npm@master"
  args = "install"
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
