/* eslint-disable no-console */
const animalHash = require('../lib')

Array.from(Array(11), () => {
  console.log(animalHash(Math.random()))
})
