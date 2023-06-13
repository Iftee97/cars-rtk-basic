import { useSelector, useDispatch } from "react-redux"
import { changeSearchTerm } from "../store"

export default function CarSearch() {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => state.cars.searchTerm)

  function handleSearchTermChange(event) {
    dispatch(changeSearchTerm(event.target.value))
  }

  return (
    <div className="list-header">
      <h3 className="title is-3">
        My Cars
      </h3>
      <div className="search field is-horizontal">
        <label className="label">
          Search
        </label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
          required
        />
      </div>
    </div>
  )
}
