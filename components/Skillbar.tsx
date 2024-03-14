// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/
import { motion } from "framer-motion"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function SkillBar(props) {
    // This is a React component containing an Example component
    // - Replace <Example /> with your own code
    // - Find inspiration: https://www.framer.com/developers/
    const skillContainerStyle = {
        margin: "10px 0",
    }

    const skillLabelStyle = {
        fontWeight: "bold",
    }

    const skillBarBackgroundStyle = {
        backgroundColor: "#e6e6e6",
        borderRadius: "10px",
        overflow: "hidden",
    }

    const skillBarFillStyle = {
        backgroundColor: "#000",
        height: "20px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: "10px",
        color: "#fff",
        width: `${props.percentage}%`, // dynamically set width based on props
    }

    const skillPercentageStyle = {
        display: "inline-block",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: "2px 8px",
        borderRadius: "10px",
    }

    return (
        <div style={skillContainerStyle}>
            <label style={skillLabelStyle}>{props.skill}</label>
            <div style={skillBarBackgroundStyle}>
                <motion.div
                    style={skillBarFillStyle}
                    initial="hidden"
                    animate="visible"
                    variants={skillBarVariant}
                    transition={{ duration: 1 }}
                >
                    <span
                        style={skillPercentageStyle}
                    >{`${props.percentage}%`}</span>
                </motion.div>
            </div>
        </div>
    )
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const skillBarVariant = {
    hidden: { width: 0 },
    visible: { width: "100%" },
}

SkillBar.defaultProps = {
    skill: "Coding",
    percentage: 100,
}
