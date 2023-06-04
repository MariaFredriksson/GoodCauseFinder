import { useState } from "react"
import ProjectTile from "./ProjectTile"
import useFetch from "./useFetch"
import FilterButton from "./FilterButton"

/**
 * Represents the project area component.
 *
 * @returns {JSX.Element} The JSX element representing the project area component.
 */
const ProjectArea = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  // Get the data about the projects
  const { data, error } = useFetch('https://cscloud7-221.lnu.se/good-cause-finder-server/projects')

  console.log(data)

  // If there is an error, log it to the console
  if (error) {
    console.log(error)
  }

  const handleCategoryFilter = (category) => {
    console.log('handleCategoryFilter ' + category)
    setSelectedCategory(category)
  }

  const filteredProjects = data?.projects.filter((project) => {
    if (!selectedCategory) {
      return true
    }
    return project.category.includes(selectedCategory)
  })

  return (
    <div className="container">
      <h2 className="text-color-1 mt-4">Filtrera projekt</h2>
      <div className="mb-4 d-flex flex-wrap">
        <FilterButton
          onClick={() => handleCategoryFilter(null)}
          text="Alla projekt"
          isActive={selectedCategory === null}
        />
        <FilterButton
          onClick={() => handleCategoryFilter("hälsa")}
          text="Hälsa"
          isActive={selectedCategory === "hälsa"}
        />
        <FilterButton
          onClick={() => handleCategoryFilter("jämställdhet")}
          text="Jämställdhet"
          isActive={selectedCategory === "jämställdhet"}
        />
        <FilterButton
          onClick={() => handleCategoryFilter("utbildning")}
          text="Utbildning"
          isActive={selectedCategory === "utbildning"}
        />
      </div>

      {/* If there is an error, display an error message */}
      {error && <p>Oups... Något gick fel... Försök igen senare.</p>}

      {/* Conditional rendering, so these tiles only shows when the fetch is done and there are some values */}
      {/* Loop though the projects array and send the data to each tile */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 my-4">
        {filteredProjects && filteredProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
      </div>
    </div>
  )
}

export default ProjectArea
