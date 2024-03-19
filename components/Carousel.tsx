// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
    // Replace these with your actual image elements or other content
    <img
        src="https://unsplash.com/photos/G3EOgxOGh1I/download?force=true&w=320"
        alt="Image 1"
    />,
    <img
        src="https://unsplash.com/photos/wtujgMohGuE/download?force=true&w=320"
        alt="Image 2"
    />,
    <img
        src="https://unsplash.com/photos/PqW4IjnuNRU/download?force=true&w=320"
        alt="Image 3"
    />,
]

const CarouselComponent = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        )
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className="carousel-container">
            <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="carousel-item"
                >
                    {items[currentIndex]}
                </motion.div>
            </AnimatePresence>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Carousel(props) {
    // This is a React component containing an Example component
    // - Replace <Example /> with your own code
    // - Find inspiration: https://www.framer.com/developers/

    return (
        <div style={containerStyle}>
            <CarouselComponent items={images} />
        </div>
    )
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
}
