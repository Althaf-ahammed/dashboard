import { useState } from 'react';
import useWidgetStore from '../store/widgetStore';
import Widget from './Widget';
import WidgetDrawer from './WidgetDrawer';

const Dashboard = () => {
  const categories = useWidgetStore((state) => state.categories);
  const removeWidget = useWidgetStore((state) => state.removeWidget);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openDrawer = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">CNAPP Dashboard</h1>
      {categories.map((category) => (
        <div key={category.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-4 gap-6">
            {category.widgets.map((widget) => (
              <Widget
                key={widget.id}
                id={widget.id}
                title={widget.name}
                text={widget.text}
                removeWidget={() => removeWidget(category.id, widget.id)}
              />
            ))}
            <div
              className="bg-gray-200 rounded-lg shadow-md p-4 h-48 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => openDrawer(category.id)}
            >
              <span className="text-blue-500 text-2xl">+ Add Widget</span>
            </div>
          </div>
        </div>
      ))}
      {isDrawerOpen && (
        <WidgetDrawer
          closeDrawer={closeDrawer}
          categoryId={selectedCategory}
        />
      )}
    </div>
  );
};

export default Dashboard;
