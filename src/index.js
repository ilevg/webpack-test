import "@babel/polyfill"
import './index.html'
import './index.scss'
import picture from './img/picture-4.jpg'
import { mult, sum } from './modules/calc'

const img = new Image()
img.src = picture

console.log(mult(3,4))
console.log(sum(3,4))
