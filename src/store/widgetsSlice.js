import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    "CSPM Executive Dashboard": [
      { id: 1, name: 'Widget 1', text: 'This is Widget 1' },
      { id: 2, name: 'Widget 2', text: 'This is Widget 2' },
    ],
    "Another Dashboard": [
      { id: 3, name: 'Widget 3', text: 'This is Widget 3' },
    ],
  },
  searchTerm: '',
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { category, name, text } = action.payload;
      const newWidget = {
        id: Date.now(),
        name,
        text,
      };
      state.categories[category].push(newWidget);
    },
    removeWidget: (state, action) => {
      const { category, id } = action.payload;
      state.categories[category] = state.categories[category].filter(
        (widget) => widget.id !== id
      );
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchTerm } = widgetsSlice.actions;

export default widgetsSlice.reducer;
