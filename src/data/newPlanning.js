import plannings from "./plannings"

const {ADS}=plannings.mai
let newPlanning = {}
newPlanning = JSON.stringify(plannings)

console.log(typeof newPlanning)
// console.log(newPlanning)

export default newPlanning
