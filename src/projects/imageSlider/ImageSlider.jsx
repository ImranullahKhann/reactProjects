import { useState, useEffect } from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./styles.css"

export default function ImageSlider ({url, parameters}) {
    const [currentImg, setCurrentImg] = useState(0)
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getImages();   
    }, [])

    async function getImages() {
        const urlCall = url + parameters

        setIsLoading(true)
        let images;
        try {
            images = await fetch(urlCall)
        }
        catch (e) {
            console.log(e)
        }
        
        if (!images.ok)
            alert("Error Retrieving Images for Image Slider. Response Status: " + images.status)
        
        images = await images.json()

        setIsLoading(false)
        setImages(images)
    }

    function nextImg () {
        if (currentImg === images.length - 1)
            setCurrentImg(0)
        else
            setCurrentImg(currentImg + 1)
    }

    function prevImg () {
        if (currentImg === 0)
            setCurrentImg(images.length - 1)
        else
            setCurrentImg(currentImg - 1)
    }

    return <div className="image-slider">
        <h2>Image Slider</h2>
        {isLoading ? <div className="is-loading">Loading ...</div>: ""}
        <div className="image-container">
            { images.map((elem,index) => 
            <img key={index} src={elem.download_url} style={{"display": index === currentImg ? "block" : "none"}} />
            ) }
            <FaArrowAltCircleRight size={50} className="arrows arrow-right" onClick={() => nextImg()} />
            <FaArrowAltCircleLeft size={50} className="arrows arrow-left" onClick={() => prevImg()}  />
            <div className="selection">
                {
                Array.from({length: images.length}, (_, index) => <div className="circle-selector" key={index} onClick={() => setCurrentImg(index)} style={{"backgroundColor": index === currentImg ? "white" : "lightgray"}}></div> )
                }
            </div>
        </div>
    </div>
}