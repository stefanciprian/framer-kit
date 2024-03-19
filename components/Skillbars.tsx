// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/
import SkillBar from "./SkillBar.tsx"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function SkillBars(props) {
    // This is a React component containing an Example component
    // - Replace <Example /> with your own code
    // - Find inspiration: https://www.framer.com/developers/

    return (
        <div style={containerStyle}>
            <div style={barStyle}>
                {skillsData.map((skillData, index) => (
                    <SkillBar
                        key={index}
                        skill={skillData.skill}
                        percentage={skillData.percentage}
                    />
                ))}
            </div>
        </div>
    )
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle = {
    border: "1px solid red",
    height: "100%",
    width: "400px",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // overflow: "hidden",
}

const barStyle = {
    width: "100%",
}

// Dummy data for skills
const skillsData = [
    { skill: "Mobile", percentage: 100 },
    { skill: "Web", percentage: 90 },
    { skill: "Backend", percentage: 85 },
    // Add more skills as needed
]
