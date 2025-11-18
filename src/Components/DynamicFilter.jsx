import { useState } from "react"



function DynamicFilter() {
    const [categoryselect, setcategoryselect] = useState([])
    const [priceselect, setpriceselect] = useState("")
    const [availabilityselect, setavailabilityselect] = useState("")

    const Data = [
        { id: 1, name: "Wireless Mouse", category: "Electronics", price: 450, inStock: true },
        { id: 2, name: "Gaming Keyboard", category: "Electronics", price: 1200, inStock: false },
        { id: 3, name: "Sneakers", category: "Fashion", price: 900, inStock: true },
        { id: 4, name: "T-shirt", category: "Fashion", price: 300, inStock: true },
        { id: 5, name: "Coffee Mug", category: "Home", price: 150, inStock: false }
    ]

    function categoryChanger(cate) {
        console.log(cate);
        setcategoryselect(cate)
    }
    function priceChanger(cate) {
        console.log(cate);
        setpriceselect(cate)
    }
    function AvailabilityChanger(cate) {
        console.log(cate);
        setavailabilityselect(cate)
    }

    return <div>

        <div className="Top-bar-dynmaic">
            <div className="category-dynamic">
                <input onChange={(e) => categoryChanger(e.target.name)} type="checkbox" name="Electronics" id="" />
                <label htmlFor="">Electronics</label>
                <input onChange={(e) => categoryChanger(e.target.name)} type="checkbox" name="Fashion" id="" />
                <label htmlFor="">Fashion</label>
                <input onChange={(e) => categoryChanger(e.target.name)} type="checkbox" name="Home" id="" />
                <label htmlFor="">Home</label>
            </div>

            <div className="price-dynamic">
                <input onChange={(e) => priceChanger(e.target.name)} type="radio" name="less-five-hundred" id="" />
                <label htmlFor="">{`<500`}</label>
                <input onChange={(e) => priceChanger(e.target.name)} type="radio" name="five-hundred-thousand" id="" />
                <label htmlFor="">500-1000</label>
                <input onChange={(e) => priceChanger(e.target.name)} type="radio" name="thousand-hundred" id="" />
                <label htmlFor="">{`>1000`}</label>

            </div>

            <div className="Availability-dynamic">
                <input onChange={(e) => AvailabilityChanger(e.target.name)} type="checkbox" name="instock" id="" />
                <label htmlFor="">In Stock Only</label>
            </div>
        </div>

        <div>
            {
                Data.map((item, id) => {
                    return <div key={id} className="each-table-dynmaic">
                        <div>Name: {item.name}</div>
                        <div>Category: {item.category}</div>
                        <div>Price: {item.price}</div>
                        <div>InStock: {`${item.inStock}`}</div>
                    </div>
                })
            }
        </div>

    </div>
}


export default DynamicFilter