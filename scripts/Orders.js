import { getMetals, getOrders, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
    const dateStamp = new Date(order.timestamp)
    const styles = getStyles()
    const sizes = getSizes()
    const metals = getMetals()

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const totalCost = foundStyle.price + foundSize.price + foundMetal.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} was placed on ${dateStamp.toLocaleDateString()} 
        Order Total: ${costString}
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

