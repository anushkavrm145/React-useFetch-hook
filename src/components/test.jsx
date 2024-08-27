import useFetch from "."

export default function UseFetchDefaultTest(){
    const {data,error,pending} = useFetch("https://dummyjson.com/products?limit=100",{})
    console.log(error,data,pending)
    return <div>
        <h1>use fetch hook</h1>
        {
            pending? <h3>pending data loading</h3> : null
        }
        {
            data && data.products && data.products.length ? data.products.map((productItem)=>(
                <p key={productItem.key}>{productItem.title}</p>
            )) : null
        }
    </div>
}