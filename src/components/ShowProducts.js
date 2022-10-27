const ShowProducts = (props)=>{
    let products = props.products
    console.log('products-----',products);
    return(
        <>
            {products.map((product)=>{
                return (
                    <div key={product.name} style={{textAlign: 'center', marginTop: '1em'}}>
                        <button >{product.name}</button>
                    </div>
                )
            })}
    </>
    )
}

export default ShowProducts;