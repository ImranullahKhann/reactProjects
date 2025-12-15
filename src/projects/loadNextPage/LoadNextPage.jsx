import { useState, useEffect } from "react"
import "./styles.css"

export default function LoadNextPage({numOfItems}) {
    const [products, setProducts] = useState([]);
    const [pageNo, setPageNo] = useState(1)
    const [pagesExplored, setPagesExplored] = useState(0)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (pagesExplored < pageNo)
            getProducts();
    }, [pageNo])
    

    async function getProducts () {
        let response;
        setIsLoading(true);

        try {
            response = await fetch(`https://dummyjson.com/products?limit=${numOfItems}&skip=${pageNo * numOfItems - numOfItems }`);
        }
        catch (e) {
            console.log(e)
            return;
        }

        if (!response.ok)
            alert("Error Retrieving Products. Status Code: " + response.status)
 
        response = await response.json();

        setProducts(prev => [...prev, ...response.products])
        setIsLoading(false);
        setPagesExplored(pagesExplored + 1);
    }

    function changePage (direction) {
        if (direction === "next" && pageNo < 20)
            setPageNo(prev => prev + 1)
        else if (direction === "prev" && pageNo > 1)
            setPageNo(prev => prev - 1)
    }

    return <div className="load-next">
        <h2>Paginator</h2>
        { isLoading ?
        <div className="loading">Loading...</div>
        :
        <div className="items">
            {
                products.slice((pageNo * numOfItems) - numOfItems, pageNo * numOfItems).map((elem, index) => {
                    return <div className="product" key={index}>
                        <div>
                            <img src={elem.images[0]} alt={elem.description} />
                        </div>
                        <h5>{elem.description}</h5>
                    </div>
                })
            }
        </div>
        }
        <div className="interface">
            <button className={pageNo === 1 ? "inactive" : null} onClick={() => changePage("prev")}>Previous Page</button>
            <button className={pageNo === 20 ? "inactive" : null} onClick={() => changePage("next")}>Next Page</button>
        </div>
    </div>
}