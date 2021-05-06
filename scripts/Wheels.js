import {getWheels, setWheels} from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)



export const Wheels = () => {
    let html = "<ul>"

    for (const wheel of wheels) {
        html += `<li class="wheel__list__item choice__list__item">
        <input type="radio" name="wheel" value="${wheel.id}"/>${wheel.size} inch ${wheel.type} ${wheel.color}</li>`
    }

    html += "</ul>"
    return html
}