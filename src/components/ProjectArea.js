import { useState } from "react"
// import { useHistory, useLocation } from 'react-router-dom'
// import Filter from "./Filter"
import ProjectTile from "./ProjectTile"
import useFetch from "./useFetch"
// import Button from "./Button";
import FilterButton from "./FilterButton"
import { useLocation, useNavigate } from "react-router-dom"

const ProjectArea = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  // Get the data about the projects
  const { data } = useFetch('http://localhost:5080/projects')

  console.log(data)
  console.log(selectedCategory)

  const navigate = useNavigate()
  const location = useLocation()

  const handleCategoryFilter = (category) => {
    console.log('handleCategoryFilter ' + category)
    setSelectedCategory(category)

    // Sets the query string portion of the current URL
    // Like in http://example.com/projects?category=hälsa it is the part with the ? and after
    const searchParams = new URLSearchParams(location.search)
    console.log('Location Search:', location.search)
    // Sets the value of category 
    searchParams.set('category', category)
    // Updates the url in the browser and navigates to it
    navigate(`?${searchParams.toString()}`, { replace: true })
  }

  const urlSearchParams = new URLSearchParams(location.search)
  const selectedCategoryFromUrl = urlSearchParams.get('category')

  const filteredProjects = data?.projects.filter((project) => {
    if (!selectedCategoryFromUrl) {
      return true
    }
    return project.category.includes(selectedCategoryFromUrl)
  })

  return (
    <div className="container">
      <h2>Filtrera projekt</h2>
      <div className="mb-4 d-flex flex-wrap">
        <FilterButton
          onClick={() => handleCategoryFilter(null)}
          text="Alla projekt"
          isActive={!selectedCategoryFromUrl}
        />
        <FilterButton
          onClick={() => handleCategoryFilter("hälsa")}
          text="Hälsa"
          isActive={selectedCategoryFromUrl === "hälsa"}
        />
        <FilterButton
          onClick={() => handleCategoryFilter("jämställdhet")}
          text="Jämställdhet"
          isActive={selectedCategoryFromUrl === "jämställdhet"}
        />
        <FilterButton
          onClick={() => handleCategoryFilter("utbildning")}
          text="Utbildning"
          isActive={selectedCategoryFromUrl === "utbildning"}
        />
      </div>
      {/* Conditional rendering, so these tiles only shows when the fetch is done and there are some values */}
      {/* Loop though the projects array and send the data to each tile */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 my-4">
        {filteredProjects &&
          filteredProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
      </div>
    </div>
  )
}

export default ProjectArea

//   return (
//     <div className="container">
//       <Filter />
//       <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 my-4">
        
//         {data && data.projects.map(project => (
//           <ProjectTile key={project.id} project={project} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ProjectArea