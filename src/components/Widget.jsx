import PropTypes from 'prop-types';

const Widget = ({ id, title, text, removeWidget }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-48 flex flex-col justify-center items-center relative">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p>{text}</p>
      <button
        className="absolute top-2 right-2 text-red-500"
        onClick={() => removeWidget(id)}
      >
        &times;
      </button>
    </div>
  );
};

Widget.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  removeWidget: PropTypes.func.isRequired,
};

export default Widget;
