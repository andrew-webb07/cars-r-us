import { getCustomOrders, getCarColors, getInteriors, getTechnologies,getWheels, getVehicleTypes} from "./database.js"

const carColors = getCarColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()
const vehicleTypes = getVehicleTypes()


// document.addEventListener(
//     "click",
//     (event) => {
//         if(event.target.id === "orderButton") {
//             addCustomOrder()
//         }
//     }
// )


const buildOrderListItem = (order) => {

    const foundCarColor = carColors.find(color => color.id === order.carColorId)

    const foundInterior = interiors.find(interior => interior.id === order.interiorId)

    const foundTechnology = technologies.find(technology => technology.id === order.technologyId)

    const foundWheels = wheels.find(wheel => wheel.id === order.wheelsId)

    const foundVehicleType = vehicleTypes.find(vehicleType => vehicleType.id === order.vehicleTypeId)

    let orderTotalPrice = foundCarColor.price + foundInterior.price + foundTechnology.price + foundWheels.price

    if (foundVehicleType.id === 2) {
        orderTotalPrice = orderTotalPrice * 1.5
    }
    else if (foundVehicleType.id === 3) {
        orderTotalPrice = orderTotalPrice * 2.25
    }

    const costString = orderTotalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })

    return `<li>Order #${order.id} costs ${costString}</li>`
}

export const Orders = () => {

    const orders = getCustomOrders()

    let html = "<ul>"


    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")

    html+= "</ul>"


    return html
}