import { useParams } from "react-router-dom"
import Button from "./Button"
import GiveLoveIcon from "./../assets/give-love.png"

/**
 * Represents the organization component.
 *
 * @returns {JSX.Element} The JSX element representing the organization component.
 */
const Organization = () => {
  // Allows us to get the parameter from the route (and here we want to get the parameter that we named id)
  const { id } = useParams()

  return (
    <div>
      <div className="container">
        <img src={GiveLoveIcon} alt="Give love" className="organization-logo my-4 img-fluid" />

        <h2>Organization {id}</h2>

        <div>Organization Description {id} - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!</div>

        <Button text={"Organization's website"} />
      </div>
    </div>
  )
}

export default Organization