import { useState, useEffect } from "react";
import "./subslider1.css"
import Imgslider1 from "./Images/imgslider1.jpg"
import Imgslider2 from "./Images/imgslider2.jpg"
import Imgslider3 from "./Images/imgslider3.jpg"
import Imgslider4 from "./Images/imgslider4.jpg"
import Imgslider5 from "./Images/imgslider5.jpg"
import Imgslider6 from "./Images/imgslider6.jpg"

const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === imgs.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className="slideshow">
            <img src={imgs[index]} alt="" className="mainImg" />
            <div className="actions">
            <div className="prev">
                <button onClick={prev} >&#10096;</button>
                </div>
                <div className="next">
                <button onClick={next} >&#10095;</button>
                </div>
            </div>
        </div>
    )
}

export default function slider2_subslider(){
    return(
        <div className="App">
        <Slideshow
        imgs = {[
            Imgslider1,
            Imgslider2,
            Imgslider3,
            Imgslider4,
            Imgslider5,
            Imgslider6
            ]}
        />
        </div>
    )
}
