import PropTypes from 'prop-types';


export default function SecondaryImage(props) {
    return (
        <div>
            <img src={props.src}></img>
        </div>
    );
}








SecondaryImage.propTypes = {
    src: PropTypes.string.isRequired,
  };