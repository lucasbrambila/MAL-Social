import './styles/main.scss'
import './styles/main.css'

const obj = {a: "alpha", b:"bravo"}
const anotherObj = {...obj, c: "charlie"}

console.log(Object.values(anotherObj));

