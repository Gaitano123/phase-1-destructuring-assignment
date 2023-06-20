const farmAnimals = ["cow", "horse", "sheep", "pig", "chicken"];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const [moo, neigh, baa, oink, cluck] = farmAnimals;

console.log(moo)
console.log(neigh)
console.log(baa)
console.log(oink)
console.log(cluck)

const newFarmAnimals = [...farmAnimals]

newFarmAnimals.splice(1, 4, "sheep", "pig", "chicken")

console.log(newFarmAnimals)
const[bessie, dolly, babe, little] = newFarmAnimals

console.log(bessie)
console.log(dolly)
console.log(babe)
console.log(little)
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

let colourFarmAnimals = [...farmAnimals];

colourFarmAnimals.splice(1, 4, "sheep", "pig")
// console.log(colourFarmAnimals)

let [blackAndWhite, black, pink] = colourFarmAnimals

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

let [red, orange, yellow, green, blue, indigo, violet] = colors

let colourInitials = [...colors]

colourInitials.splice(5,2, "violet")

let [r,o,y,g,b,v] = colourInitials

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

let indigoColor = [...colors]
indigoColor.splice(0,7, "indigo")

let [indg] = indigoColor

// Objects

let {muppetName, color, song, job, partner} = muppet

// 7. Use destructuring to assign all variables using the keys as the variable names

let newNestedMuppets = ['Moving Right Along','I Hope That Something Better Comes Along', 'Host of The Muppet Show', 'Miss Piggy']

// newNestedMuppets.splice(0, 5, 'Moving Right Along','I Hope That Something Better Comes Along', 'Host of The Muppet Show', 'Miss Piggy')

console.log(newNestedMuppets)

let [song2, song4, nestedJob, nestedPartner] = newNestedMuppets

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner