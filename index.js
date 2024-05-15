
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, element){
    return drivers.filter(nametofilter => nametofilter.toLowerCase() === element.toLowerCase())
  }
 
function fuzzyMatch(drivers, startingLetter){
    return drivers.filter(driver => driver.startsWith(startingLetter))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }

