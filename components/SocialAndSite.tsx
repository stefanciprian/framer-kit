// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/

import { addPropertyControls, ControlType } from "framer"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function SocialAndSite(props) {
    return (
        <div style={containerStyle}>
            <div style={iconContainerStyle}>
                <a href={props.xLink} target="_blank" style={linkStyle}>
                    <span style={srOnlyStyle}>x.com</span>
                    <svg
                        style={iconStyle}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717 l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339 l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"></path>
                    </svg>
                </a>
                <a href={props.siteLink} target="_blank" style={linkStyle}>
                    <span style={srOnlyStyle}>Website</span>
                    <svg
                        style={{ ...iconStyle, height: "32px", width: "32px" }} // Adjusted for the h-8 w-8 class
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        ></path>
                    </svg>
                </a>
            </div>
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
const iconContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px", // Represents space-x-4
    marginTop: "16px", // Represents mt-4
}

const linkStyle: React.CSSProperties = {
    color: "#9ca3af", // Represents text-gray-400
    textDecoration: "none",
    // Note: ':hover' pseudo-class can't be used here directly
}

const srOnlyStyle: React.CSSProperties = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    border: "0",
}

const iconStyle: React.CSSProperties = {
    height: "24px", // Represents h-6
    width: "24px", // Represents w-6
}

SocialAndSite.defaultProps = {
    siteLink: "https://schdigital.co.uk",
    xLink: "https://twitter.com/stefcip7",
}

addPropertyControls(SocialAndSite, {
    siteLink: {
        title: "Site Link",
        type: ControlType.String,
    },
    xLink: {
        title: "X Link",
        type: ControlType.String,
    },
})
