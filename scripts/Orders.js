import { getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    const dateStamp = new Date(order.timestamp)
    
    return `<li>
        Order #${order.id} was placed on ${dateStamp.getMonth() + "/" + dateStamp.getDay() + "/" + dateStamp.getFullYear()}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

