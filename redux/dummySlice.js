import {createSlice} from '@reduxjs/toolkit';

const dummySlice = createSlice({
  name: 'dummydata',
  initialState: {
    data: [
      {
        id: 1,
        name: 'Fresh Vegetables',
        subCategories: [
          {
            name: 'Tomatoes',
          },
          {
            name: 'Spinach',
          },
          {
            name: 'Onions',
          },
        ],
        image:
          'https://static.vecteezy.com/system/resources/previews/025/064/813/original/broccoli-with-ai-generated-free-png.png',
      },
      {
        id: 2,
        name: 'Diet Food',
        subCategories: [
          {
            name: 'Quinoa',
          },
          {
            name: 'Oats',
          },
        ],
        image:
          'https://freepngimg.com/thumb/eggplant/147062-picture-brinjal-eggplant-free-transparent-image-hq.png',
      },
      {
        id: 3,
        name: 'Healthy Food',
        subCategories: [
          {
            name: 'Boiled Eggs',
          },
          {
            name: 'Whole Wheat',
          },
        ],
        image:
          'https://freepngimg.com/download/avocado/1-2-avocado-png-clipart.png',
      },
      {
        id: 4,
        name: 'Fast food items',
        subCategories: [
          {
            name: 'Sandwich',
          },
          {
            name: 'Burger',
          },
          {
            name: 'Tacos',
          },
          {
            name: 'Pizza',
          },
        ],
        image:
          'https://i.pinimg.com/originals/30/6d/9d/306d9d3bde782a3f3fb475a3866e5c4c.png',
      },
      {
        id: 5,
        name: 'Juicy fruits',
        subCategories: [
          {
            name: 'Watermelon',
          },
          {
            name: 'Grapes',
          },
          {
            name: 'Berries',
          },
        ],
        image:
          'https://purepng.com/public/uploads/large/big-green-watermelon-t18.png',
      },
    ],
  },
  reducers: {},
});

export const {increment, decrement} = dummySlice.actions;
export default dummySlice.reducer;
