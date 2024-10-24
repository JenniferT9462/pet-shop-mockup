import PropTypes from 'prop-types';

export default function PetAboutText(props) {
    return (
        <div>
            <h1 className='text-4xl text-center'>About</h1>
        </div>
    );
}

PetAboutText.PropTypes = {
    heroText: PropTypes.string.isRequired
}