import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';


export interface RecipesState {
  recipes: [];
}

const initialState: RecipesState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setRecipe: (state, action) => {
      return {
        ...state,
        recipes: action.payload,
      }
    },
  },
   
});

export const {setRecipe } = recipesSlice.actions;

export const selectRecipes = () : AppThunk => async (dispatch) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=fd1e5de06e224f85b115bbc3f2d74941&number=4`
  )
  const data = await response.json()
  dispatch(setRecipe(data.recipes))
}


export default recipesSlice.reducer;
