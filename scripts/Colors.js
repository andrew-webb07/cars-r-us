import {getCarColor} from "./database.js"

const colors = getCarColor()

document.addEventListener(
    "change", (event) => {
        if (event.target.name === "color") {
            window.alert(`You chose ${}`)
        }
    }
)