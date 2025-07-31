const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let data1
let data2
let data3
let data4

fs.readFile('firstname.txt', 'utf-8')
  .then(firstFile => {
    data1 = firstFile
    return fs.readFile('lastname.txt', 'utf-8')
  })
  .then(secondFile => {
    data2 = secondFile
    return fs.readFile('age.txt', 'utf-8')
  })
  .then(thirdFile => {
    data3 = thirdFile
    return fs.readFile('hobbies.txt', 'utf-8')
  })
  .then(forthFile => {
    data4 = forthFile
    const Hobbies = JSON.parse(data4)
    console.log(`${data1} ${data2} is ${data3} years old and his hobbies are ${Hobbies[0]} and ${Hobbies[1]}`)
  })
  .catch(err => {
    console.error(err)
  })


// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function introduction(){
  try{
    const data1 = await fs.readFile('firstname.txt', 'utf-8')
    const data2 = await fs.readFile('lastname.txt', 'utf-8')
    const data3 = await fs.readFile('age.txt', 'utf-8')
    const data4 = await fs.readFile('hobbies.txt', 'utf-8')
    const Hobbies = JSON.parse(data4)
    console.log(`${data1} ${data2} is ${data3} years old and his hobbies are ${Hobbies[0]} and ${Hobbies[1]}`)
  } catch(err){
    console.error(err)
  }
}
introduction()
