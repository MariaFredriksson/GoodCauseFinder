import Button from "./Button"

const NotFound = () => {
  return (
    <div>
      <div className="hero">
        <div className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4" src="./give-love.png" alt="" width="72" />
          <h1 className="display-5 fw-bold text-body-emphasis">Oups...</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Sidan kunde inte hittas...</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Button link={"/"} text={"Hem"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound