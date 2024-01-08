// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    let staff = cats.push("Ralph")
    return staff
}

function destructivelyPrependCat() {
    let name = cats.unshift("Bob")
    return name
}

function destructivelyRemoveLastCat() {
    let pip = cats.pop() 
    return pip
}

function destructivelyRemoveFirstCat() {
    let pup = cats.shift() 
    return pup
}

function appendCat(name) {
    const newCatsArray = [...cats, name];
    return newCatsArray;
  }

  function prependCat(shame){
  const CatsArray = [shame, ...cats];
  return CatsArray
  }

  function removeLastCat () {
    const CatsArray = cats.slice(0, -1)
    return CatsArray
  }

  function removeFirstCat() {
    const catsArray = cats.slice(1, 3)
    return catsArray
  }