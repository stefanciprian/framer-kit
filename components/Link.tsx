// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/

import { addPropertyControls, ControlType } from "framer"
import { motion } from "framer-motion"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Link(props) {
    // This is a React component containing an Example component
    // - Replace <Example /> with your own code
    // - Find inspiration: https://www.framer.com/developers/

    return (
        <motion.a
            href={props.url}
            {...props}
            style={{ color: props.linkColor }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {props.text}
        </motion.a>
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

Link.defaultProps = {
    text: "PESE Consulting",
    url: "https://pese.consulting",
    linkColor: "#0000FF",
}

addPropertyControls(Link, {
    text: {
        title: "Text",
        type: ControlType.String,
    },
    url: {
        title: "URL",
        type: ControlType.String,
    },
    linkColor: {
        title: "Link Color",
        type: ControlType.Color,
    },
})
