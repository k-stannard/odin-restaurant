import { homepage, menu, contact } from './index_modules.js'
import './style.css'

homepage()

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let target = event.target.id
        const content = document.getElementById('content')
        if(target == "home") {
            content.innerHTML = ""
            homepage()
        } else if(target == "menu") {
            content.innerHTML = ""
            menu()
        } else if(target == "contact") {
            content.innerHTML = ""
            contact()
        }
    })
})