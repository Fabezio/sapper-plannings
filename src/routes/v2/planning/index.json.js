import planning from "../../../data/newPlanning2"


const contents = JSON.stringify(
  
  planning.mois.map(({nom, jours})=>{
    //if(!month.jours) return null
    return {nom, jours}

    
})


)
console.log(contents)

export function get (req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
  
    res.end(contents)
  }
  