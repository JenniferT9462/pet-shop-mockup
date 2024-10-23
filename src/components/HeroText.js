import PropTypes from "prop-types";

export default function HeroText(props) {
    return (
        <div>
            {props.heroText}
        </div>
    );
}

HeroText.PropTypes = {
    heroText: PropTypes.string.isRequired
}