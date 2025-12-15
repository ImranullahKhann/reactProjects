import { useState, useEffect } from "react"
import "./styles.css"
import { DiResponsive } from "react-icons/di";

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
            response = await fetch(`https://dummyjson.com/products?limit=${numOfItems}&skip=${pageNo * 10 }`);
        }
        catch (e) {
            console.log(e)
            return;
        }

        if (!response.ok)
            alert("Error Retrieving Products. Status Code: " + response.status)
 
        response = await response.json();

        console.log(response)
        setProducts(prev => [...prev, response])
        setIsLoading(false);
        setPagesExplored(pagesExplored + 1);
    }

    return <div className="load-next">
        <h2>Paginator</h2>
        { isLoading ?
        <div className="loading">Loading...</div>
        :
        <div className="items">
            { Array.from({length: numOfItems}, (_, index) => {
                return <div className="product">

                </div>
            }) }
        </div>
        }
        <div className="interface">
            <button>Previous Page</button>
            <button>Next Page</button>
        </div>
    </div>
}