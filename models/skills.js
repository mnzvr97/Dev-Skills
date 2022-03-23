const req = require("express/lib/request")
const res = require("express/lib/response")


const skills = (
    { skill: 'javascript', years: 1 }, 
    { skill: 'java', years: 0 }, 
    { skill: 'python', years: 1 } 
)

function showAll(){
    return skills
}

function showSkill(id){
    return skills[id]
}


module.exports = {showAll,showSkill}