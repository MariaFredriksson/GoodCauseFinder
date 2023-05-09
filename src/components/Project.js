import { useParams } from "react-router-dom";
import Button from "./Button"
import useFetch from "./useFetch";
// import useFetch from "./useFetch";

const Project = () => {
  // Allows us to get the parameter from the route (and here we want to get the parameter that we named id)
  const { id } = useParams()

  // Get the data about the project
  const { data } = useFetch(`http://localhost:5080/projects/${id}`)

  // const tryFetch = useFetch('http://localhost:5080')

  // console.log(tryFetch.data)

  console.log(data);

  return (
    <div className="container text-center">
      {/* <h2>Project title {id}</h2> */}
      {data && <h2>{data.title}</h2>}

      <img src="../give-love.png" alt="Give love" />

      {/* <p>Organization {id}</p> */}
      {data && <p>{data.organization}</p>}

      {/* Conditional rendering, so this p-tag only shows when the fetch is done and there are some values */}
      {/* {tryFetch.data && <p>{tryFetch.data.blogs[0].title}</p>} */}
      {/* {data && <p>{data.title}</p>} */}

      {/* <div>Project Description {id} - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!</div> */}
      {data && <div>{data.description}</div>}


      {/* <button type="button" className="btn color-1 m-3">Support this project</button> */}
      <Button link="#" text={"Support this project"} />
    </div>
  )
}

export default Project