import { useSelector } from "react-redux"

export default function CarList() {
  const cars = useSelector((state) => state.cars.cars)
  console.log('cars: >>>>>>>>', cars)

  return (
    <div>CarList</div>
  )
}
