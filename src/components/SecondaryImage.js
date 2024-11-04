import PropTypes from 'prop-types';


export default function SecondaryImage(props) {
    return (
        <div>
            <img src={props.src}></img>
        </div>
    );
}








SecondaryImage.PropTypes = {
    src: PropTypes.string.isRequired,
  };