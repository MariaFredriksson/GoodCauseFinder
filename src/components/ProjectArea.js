import Button from "./Button"

const ProjectArea = () => {
  return (
    <div className="container text-center">
      <h2>Project title</h2>
      <img src="./give-love.png" alt="Give love" />
      <p>Organization</p>

      <div>Project Description - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eligendi iusto minus ipsam laborum sapiente impedit soluta commodi eum veniam, explicabo sit eos animi excepturi assumenda accusantium dolores aspernatur doloremque!</div>

      {/* <button type="button" className="btn color-1 m-3">Support this project</button> */}
      <Button text={"Support this project"} />
    </div>
  )
}

export default ProjectArea