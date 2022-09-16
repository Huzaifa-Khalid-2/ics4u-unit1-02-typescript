/**
 * The program shows how many logs
 *   can fit on a truck.
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-09-14
 */

import promptSync from 'prompt-sync'

try {
  const prompt = promptSync()
  const massString = prompt('Ente mass(kg): ')
  const massNumber = parseInt(massString)
  if (isNaN(+massNumber)) {
    throw new Error()
  }
  const energy = massNumber * (2.99 * 10 ** 8) ** 2
  console.log(`${energy} joules of energy is released`)
} catch (e) {
  console.log('\nInvalid Input')
}

console.log('\nDone.')
