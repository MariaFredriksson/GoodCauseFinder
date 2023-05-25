import { useParams } from "react-router-dom";
import Button from "./Button"
import useFetch from "./useFetch";
import PropTypes from 'prop-types'
// import { useNavigate } from "react-router-dom/dist";

const Project = (props) => {
  // Allows us to get the parameter from the route (and here we want to get the parameter that we named id)
  const { id } = useParams()

  // Get the data about the project
  const { data } = useFetch(`http://localhost:5080/projects/${id}`)

  console.log(data)

  const handleBack = () => {
    props.history.goBack(); // Navigate back to the previous page
  }

  // const navigate = useNavigate();

  return (
    <div className="container">

      {/* // TODO: Fix this later */}
      {/* Back button - doesn't work yet */}
      {/* <Button link={() => navigate(-1)} text={" < "} /> */}

      <Button onClick={handleBack} text={" < "} />

      <div className="text-center">

        {data && <h2>{data.title}</h2>}

        {data && <img src={data.imgURL} alt="Give love" />}

        {data && <p>{data.organization}</p>}

        {data && <div>{data.text}</div>}

        {data && <Button link={data.articleURL} text={"Support this project"} />}
      </div>

    </div>
  )
}

Project.propTypes = {
  history: PropTypes.any.isRequired
}

export default Project