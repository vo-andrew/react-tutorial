import React from "react"

function Product(props) {
    return (
        <div>
            <h1>{props.product.name}</h1>
            <h2>{props.product.price}</h2>
            <h3>{props.product.description}</h3>
        </div>
    )
}

export default Product