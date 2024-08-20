
// eslint-disable-next-line react/prop-types
const AddWidgetButton = ({ openModal }) => {
  return (
    <button 
      className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      onClick={openModal}
    >
      + Add Widget
    </button>
  );
};

export default AddWidgetButton;
