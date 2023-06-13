import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../store"

export default function CarList() {
  const dispatch = useDispatch()
  const cars = useSelector((state) => state.cars.data)
  console.log('cars: >>>>>>>>', cars)

  function handleCarDelete(id) {
    dispatch(removeCar(id))
  }

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="panel">
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            onClick={() => handleCarDelete(car.id)}
            className="button is-danger"
          >
            delete
          </button>
        </div>
      ))}
      <hr />
    </div>
  )
}
