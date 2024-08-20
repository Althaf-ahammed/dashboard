import create from 'zustand';

const useWidgetStore = create((set) => ({
  categories: [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Cloud Accounts', text: 'Connected: 2, Not Connected: 2' },
        { id: 2, name: 'Cloud Account Risk Assessment', text: 'Risk Assessment Data' },
      ],
    },
    {
      id: 2,
      name: 'CWPP Dashboard',
      widgets: [],
    },
    {
      id: 3,
      name: 'Registry Scan',
      widgets: [],
    },
  ],
  addWidget: (categoryId, widget) => set((state) => {
    const newCategories = state.categories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, widgets: [...category.widgets, widget] };
      }
      return category;
    });
    return { categories: newCategories };
  }),
  removeWidget: (categoryId, widgetId) => set((state) => {
    const newCategories = state.categories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, widgets: category.widgets.filter((widget) => widget.id !== widgetId) };
      }
      return category;
    });
    return { categories: newCategories };
  }),
}));
  
export default useWidgetStore;
