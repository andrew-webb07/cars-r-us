import {getCarColors, setCarColor} from "./database.js"

const colors = getCarColors()

document.addEventListener(
    "change", 
    (event) => {
        if (event.target.name === "color") {
            setCarColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = "<ul>"

    for (const color of colors) {
        html+= `<li class="color__list__item choice__list__item">
            <input type="radio" name="color" value="${color.id}"/> ${color.color}
        </li>`
    }

    html+= "</ul>"
    return html
}