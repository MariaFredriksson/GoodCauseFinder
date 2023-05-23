import { useState } from "react";
// import Filter from "./Filter"
import ProjectTile from "./ProjectTile"
import useFetch from "./useFetch"
import Button from "./Button";

const ProjectArea = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Get the data about the projects
  const { data } = useFetch('http://localhost:5080/projects')

  console.log(data)

  const handleCategoryFilter = (category) => {
    console.log('handleCategoryFilter')
    setSelectedCategory(category);
  };

  const filteredProjects = data?.projects.filter((project) => {
    if (!selectedCategory) {
      return true;
    }
    return project.category.includes(selectedCategory);
  });

  return (
    <div className="container">
      <div>
        <h2>Filtrera projekt</h2>
        <Button
          onClick={() => handleCategoryFilter(null)}
          text="Alla projekt"
        />
        <Button
          onClick={() => handleCategoryFilter("hälsa")}
          text="Hälsa"
        />
        <Button
          onClick={() => handleCategoryFilter("jämställdhet")}
          text="Jämställdhet"
        />
        <Button
          onClick={() => handleCategoryFilter("utbildning")}
          text="Utbildning"
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
  );
};

export default ProjectArea;

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