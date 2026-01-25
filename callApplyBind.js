const obj1 = {name:"smriti", email:"sm@gmail.com"}

function invite(g1,g2){
    console.log(`${g1}  ${this.name}  ${g2}`)
}

// invite.apply(obj1,["hi","hello"])
let emp1 = invite.bind(obj1)
emp1("hi","hello")