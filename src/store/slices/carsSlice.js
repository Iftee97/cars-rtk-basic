import { createSlice, nanoid } from "@reduxjs/toolkit"

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(), // generates a unique id
      }) // assumption: action.payload is an object with name and cost properties e.g. { name: "car name", cost: 1234 }
    },
    removeCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload) // assumption: action.payload is the id of the car we want to remove
    },
  },
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer
