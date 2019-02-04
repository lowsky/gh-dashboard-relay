workflow "AndAction!" {
  on = "push"
  resolves = ["yarn test"]
}

action "GitHub Action for npm" {
  uses = "docker://circleci/node:8"
  args = "install"
  runs = "yarn"
}

action "yarn test" {
  uses = "docker://circleci/node:8"
  needs = ["GitHub Action for npm"]
  runs = "yarn"
  args = "test"
}
