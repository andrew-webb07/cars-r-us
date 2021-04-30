import { getCustomOrders, getCarColors, getInteriors, getTechnologies,getWheels} from "./database.js"

const carColors = getCarColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()




const buildOrderListItem = (order) => {

    const foundCarColor = carColors.find(color => color.id === order.carColorId)

    const foundInterior = interiors.find(interior => interior.id === order.interiorId)

    const foundTechnology = technologies.find(technology => technology.id === order.technologyId)

    const foundWheels = wheels.find(wheel => wheel.id === order.wheelsId)

    const orderTotalPrice = foundCarColor.price + foundInterior.price + foundTechnology.price + foundWheels.price


    return `<li>Order #${order.id} costs $${orderTotalPrice}</li>`
}

export const Orders = () => {

    const orders = getCustomOrders()

    let html = "<ul>"


    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")

    html+= "</ul>"


    return html
}