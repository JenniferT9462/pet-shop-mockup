import PropTypes from "prop-types";

export default function PetCallToAction(props) {
  return (
    <div className="rounded-xl  flex justify-center bg-rose-700 p-2 items-center">
      <button className="bg-white text-blue-900 font-semibold p-2 w-5/6 rounded-lg m-2">Access Now</button>
    </div>
  );
}

PetCallToAction.PropTypes = {
  ctaText: PropTypes.string.isRequired
};
