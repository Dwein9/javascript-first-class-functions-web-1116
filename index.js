function receivesAFunction(hi) {
  hi()
}

function returnsANamedFunction() {
    return function hi () {
    return "hi"
    }
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("hi")
  }
}
