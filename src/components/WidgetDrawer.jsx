import { useState } from 'react';
import useWidgetStore from '../store/widgetStore';

// eslint-disable-next-line react/prop-types
const WidgetDrawer = ({ closeDrawer, categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const addWidget = useWidgetStore((state) => state.addWidget);

  const handleAddWidget = () => {
    const newWidget = {
      id: Math.random(),
      name: widgetName,
      text: widgetText,
    };
    addWidget(categoryId, newWidget);
    closeDrawer();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50">
      <div className="w-1/3 h-full bg-white p-8 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Add Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <div className="flex justify-end mt-auto">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            onClick={closeDrawer}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleAddWidget}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetDrawer;
