import { useParams } from "react-router-dom";
import Button from "./Button"

const Project = () => {
  // Allows us to get the parameter from the route (and here we want to get the parameter that we named id)
  const { id } = useParams();

  return (
    <div className="container text-center">
      <h2>Project title {id}</h2>
      <img src="../give-love.png" alt="Give love" />
      <p>Organization {id}</p>

      <div>Project Description {id} - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!</div>

      {/* <button type="button" className="btn color-1 m-3">Support this project</button> */}
      <Button text={"Support this project"} />
    </div>
  )
}

export default Project