import { useSelector } from "react-redux"

export default function CarValue() {
  const totalCost = useSelector((state) => {
    const { data, searchTerm } = state.cars
    const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return filteredCars.reduce((acc, car) => acc + car.cost, 0)
  })

  return (
    <div className="car-value">
      Total Cost: ${totalCost}
    </div>
  )
}
