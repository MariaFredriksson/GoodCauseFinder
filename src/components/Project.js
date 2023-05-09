import { useParams } from "react-router-dom";
import Button from "./Button"
import useFetch from "./useFetch";

const Project = () => {
  // Allows us to get the parameter from the route (and here we want to get the parameter that we named id)
  const { id } = useParams()

  // Get the data about the project
  const { data } = useFetch(`http://localhost:5080/projects/${id}`)

  console.log(data);

  return (
    <div className="container text-center">

      {data && <h2>{data.title}</h2>}

      <img src="../give-love.png" alt="Give love" />

      {data && <p>{data.organization}</p>}

      {data && <div>{data.description}</div>}

      <Button link="#" text={"Support this project"} />
    </div>
  )
}

export default Project