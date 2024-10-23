import PropTypes from "prop-types";

export default function PetCallToAction(props) {
  return (
    <div className="rounded-full border-8 border-rose-600 w-100">
      <button className="bg-white text-blue-900 font-bold py-2 px-4 rounded-full w-full">Access Now</button>
    </div>
  );
}

PetCallToAction.propTypes = {
  ctaText: PropTypes.string.isRequired
};
