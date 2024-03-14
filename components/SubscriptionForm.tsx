// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SubscribeComponent() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubmitted(true)
            setShowPopup(true)
            setTimeout(() => {
                setShowPopup(false)
            }, 3000)
        }
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <form onSubmit={handleSubmit} style={{ display: "flex" }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={inputStyle}
                    />
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitted}
                        style={buttonStyle}
                    >
                        Subscribe
                    </motion.button>
                </form>
            </div>

            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            padding: "20px",
                            background: "white",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <p>Thank you for subscribing!</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

const inputStyle = {
    border: "2px solid #E6E6E6", // Light grey border
    borderRadius: "4px", // Rounded corners
    padding: "10px 15px", // Padding inside the input
    marginRight: "8px", // Space between input and button
    fontSize: "16px", // Font size
    outline: "none", // Removes the default focus outline
}

const buttonStyle = {
    background: "#333", // Dark background color
    color: "white", // Text color
    border: "none", // No border
    borderRadius: "4px", // Rounded corners
    padding: "10px 15px", // Padding inside the button
    fontSize: "16px", // Font size
    cursor: "pointer", // Cursor on hover
    outline: "none", // Removes the default focus outline
}
