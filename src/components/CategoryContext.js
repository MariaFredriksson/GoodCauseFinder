import { createContext, useState } from "react"
import PropTypes from 'prop-types'

export const CategoryContext = createContext()

const CategoryContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return <CategoryContext.Provider
    value={{
      selectedCategory,
      setSelectedCategory
    }}>
    {children}
  </CategoryContext.Provider>
}

CategoryContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CategoryContextProvider