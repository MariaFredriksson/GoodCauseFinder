import { useParams } from "react-router-dom"
import Button from "./Button"
import useFetch from "./useFetch"

const Project = () => {
  // Allows us to get the parameter from the route (and here we want to get the parameter that we named id)
  const { id } = useParams()

  // Get the data about the project
  const { data, error } = useFetch(`https://cscloud7-221.lnu.se/good-cause-finder-server/projects/${id}`)

  console.log(data)

  // If there is an error, log it to the console
  if (error) {
    console.log(error)
  }

  // const navigate = useNavigate()

  return (
    <div className="container">

      {/* // TODO: Fix this later */}
      {/* Back button - doesn't work yet */}
      {/* <Button link={() => navigate(-1)} text={" < "} /> */}

      <Button link="/projects" text={" < "} />

      <div className="text-center">

        {/* If there is an error, display an error message */}
        {error && <p>Oups... Något gick fel... Försök igen senare.</p>}
  
        {data && <h2>{data.title}</h2>}
  
        {data && <img src={data.imgURL} alt="Give love" />}
  
        {data && <p>{data.organization}</p>}
  
        {data && <div>{data.text}</div>}
  
        {data && <Button link={data.articleURL} text={"Support this project"} />}
      </div>

    </div>
  )
}

export default Project