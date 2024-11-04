import PropTypes from 'prop-types';

// TODO: in storybook, create a story for this component
// update the value for src in the story
// The image is located in public/img/hero-dog.png
export default function PetHeroImage (props) {
  return (
    <div className='bg-gradient-to-bl from-rose-400 rounded-2xl'>
      <img className="-mt-40" alt="Dog" src={props.src}></img>
    </div>
  );
};

PetHeroImage.PropTypes = {
  src: PropTypes.string.isRequired,
};
