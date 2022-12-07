

//  const meal = {
//     app: "Chips & salsa",
//     entree: "carne asada burrito",
//     dessert: "churros",
//     dring: "Dr. Pepper"
//  }


//  // Destructuring 
//  let {dessert, entree, appetizer, drink} = meal

//  // renaming 
// let  {drink: bestSodaEver} = meal
//  console.log(dessert)

//  console.log(bestSodaEver)


//  let order = 1
//  for ( let key in meal) {
//     console.log(`${order}: ${meal[key]}`)
//     order++
//  }

//  const person = {
//     firstName: "Scott",
//     lastName: "Nelson",
//     age: 33
//  }

//  person.job = "Devmountain Mentor"

//  console.log(person.job)

//  person["pets"] = ["dog", "fish", "cat"]

//  person["pets"] = {"dog": "Alaska", "fish": "Gump", "cat": "Mags"}

 //console.log(person.pets.cat)

 //console.log(person)

 //console.log(person.pets[2])

//  delete person.pets.cat

//  console.log(person.pets)

//  let teams = {
//     team1: ["ryan", "alex",],
//     team2: ["henty", "cole"],
//     team3: ["porter", "blake"],
//     team4: ["brain", "riley"],
//     team5: ["grey", "milo"],
//  }

//  delete teams.team4
//  //teams.team1.shift()
// console.log(teams)

class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
 }
}

let dog1 = new Dog("Barrett", "Boxer", 6)
let dog2 = new Dog("Mossberg", "Boxer", 8)

// console.log(dog2.name)
// console.log(dog1.name)

//  dog1.nickname = "Burrito"

//  console.log(dog1)

 class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel, maturityAge) {
        super(name, breed, age)

        this.trainingLevel = trainingLevel
        this.maturityAge = maturityAge
    }

    levelUp() {
        this.trainingLevel++
    }

    birthday() {
        this.age++
    }

    mature() {
        if(this.age >= this.maturityAge) {
        return new Dog(this.name, this.breed, this.age)
        } else {
            console.log("Still a Puppy")
        }
    }

 }

 let myPuppy = new Puppy("toby", "Boxer", 1, 8, 3)

console.log(myPuppy.level)

let dog3 = myPuppy.maturityAge

myPuppy.birthday

console.log(dog3)