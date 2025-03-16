import { configureStore } from "@reduxjs/toolkit";
import categorySlice from './category/categorySlice'
import courseSlice from './courses/courseSlice'
import lessonSlice from './lessons/lessonSlice'


//in react js we directly invoke cofigureStore function but for react js we have to wrap it inside another function.
export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: categorySlice,
      courses: courseSlice,
      lessons: lessonSlice
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']