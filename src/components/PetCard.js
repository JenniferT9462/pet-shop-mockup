import PropTypes from "prop-types";

export default function PetCard(props) {
    return (
        <div className="bg-rose-100 border-2 border-rose-400 rounded-3xl p-4">
            <div className="text-4xl mb-7">{props.emoji}</div>
            <div className="text-black">{props.description}</div>
        </div>
    );
}


PetCard.PropTypes = {
    emoji: PropTypes.string,
    description: PropTypes.string.isRequired
  };