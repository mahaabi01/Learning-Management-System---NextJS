import { createSlice } from "@reduxjs/toolkit";
import { ICategoryInitialState, Status } from "./types";
import { AppDispatch } from "../store";
import API from "@/http";

const datas : ICategoryInitialState = {
  categories: [],
  status: Status.Loading
}

const categorySlice = createSlice({ //returns objects consist of key value pair
  name: "category",
  initialState: datas,
  reducers:{
    setStatus(state,action){
      state.status = action.payload
    },
    setCategories(state,action){
      state.categories = action.payload
    },
    addCategories(state,action){
      state.categories.push(action.payload)
    },
    resetStatus(state){
      state.status = Status.Loading
    },
    deleteCategoryByIndex(state,action){
      const index = state.categories.findIndex((category)=>category._id == action.payload)
      if(index !== -1){
        state.categories.splice(index,1)
      }
    }
  }
})

export const {setCategories, setStatus, resetStatus, addCategories,deleteCategoryByIndex} = categorySlice.actions
export default categorySlice.reducer

//fetchCategories function
export function fetchCategories(){
  return async function fetchCategoriesThunk(dispatch:AppDispatch){
    try{
      const response = await API.get("/category")
      if(response.status === 200){
        dispatch(setCategories(response.data.data))
      }else{
        dispatch(setStatus(Status.Error))
      }
    }catch(error){
      console.log(error)
      dispatch(setStatus(Status.Error))
    }
  }
}


//creating categories
export function createCategory(data:{name:string, description:string}){
  return async function createCategoryThunk(dispatch:AppDispatch){
    try{
      const response = await API.post("/category",data)
      if(response.status == 201){
        dispatch(setStatus(Status.Success))
        dispatch(addCategories(response.data.data))
      }else{
        dispatch(setStatus(Status.Error))
      }
    }catch(error){
      console.log(error)
      dispatch(setStatus(Status.Error))
    }
  }
}

//delete category
export function deleteCategory(id:string){
  return async function deleteCategoryThunk(dispatch:AppDispatch){
    try{
      const response = await API.delete("/category/" + id)
      if(response.status === 200){
        dispatch(setStatus(Status.Success))
        dispatch(deleteCategoryByIndex(id))
      }else{
        dispatch(setStatus(Status.Error))
      }
    }catch(error){
      console.log(error)
      dispatch(setStatus(Status.Error))
    }
  }
}


