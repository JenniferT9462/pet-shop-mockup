import PropTypes from 'prop-types';

// TODO: finish this component based on the design in
// public/mockups/header-menu.png
export default function PetHeaderMenu(props) {
  const {menuItems} = props;
  return (
    <div className="bg-rose-500 flex justify-around items-center w-full">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
        {/* <div>...TODO...</div>
        <div>...TODO...</div>
        <div>...TODO...</div>
        <div>...TODO...</div> */}
    </div>
  );
}

PetHeaderMenu.PropTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
