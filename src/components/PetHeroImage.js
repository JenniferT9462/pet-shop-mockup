import PropTypes from 'prop-types';

// TODO: in storybook, create a story for this component
// update the value for src in the story
// The image is located in public/img/hero-dog.png
export default function PetHeroImage (props) {
  return (
    <div>
      <img src={props.src}></img>
    </div>
  );
};

PetHeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};
