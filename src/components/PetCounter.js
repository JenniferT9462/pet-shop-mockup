import PropTypes from 'prop-types';

// TODO: update this component to match the design in public/mockups/amigo-counter.png
export default function PetCounter(props) {
  const { images, numberOfPets } = props;
  return (
    <div className="bg-rose-500">
      <div className="flex">
        {images.map((image, index) => (
          <img 
              key={index}
              src={image}
              alt={`Pet ${index + 1}`}
              className="-ml-3" />
        ))}
      </div>
      <span className="italic">{numberOfPets} <strong>Friends</strong> for life!</span>
    </div>
  );
};

PetCounter.PropTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfPets: PropTypes.number.isRequired,
};
