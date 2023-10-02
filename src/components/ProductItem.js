
function ProductItem(props) {

    const { id, name, price, count, removeProduct, addCount, minusCount } = props

    return (
        <div key={id} className="ProductItem" onDoubleClick={() => removeProduct(id)}>
            <h1>{name}</h1>
            <h2>Price: {price}</h2>
            <div className="Counter">
                <button onDoubleClick={(e) => e.stopPropagation()} onClick={() => addCount(id)}>+</button>
                <h3>{count}</h3>
                <button onDoubleClick={(e) => e.stopPropagation()} onClick={() => minusCount(id)}>-</button>
            </div>

        </div>
    )
}

export default ProductItem