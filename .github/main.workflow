workflow "AndAction!" {
  on = "push"
  resolves = ["GitHub Action for npm-1"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "install"
  runs = "yarn"
}

action "GitHub Action for npm-1" {
  uses = "docker://aquariuslt/yarn@master"
  needs = ["GitHub Action for npm"]
  runs = "yarn"
  args = "test"
}
