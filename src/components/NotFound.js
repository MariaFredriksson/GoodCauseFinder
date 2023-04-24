import Button from "./Button"

const NotFound = () => {
  return (
    <div>
      <div className="hero">
        <div class="px-4 py-5 my-5 text-center">
          <img class="d-block mx-auto mb-4" src="./give-love.png" alt="" width="72" />
          <h1 class="display-5 fw-bold text-body-emphasis">Oups...</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">The page could not be found...</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Button text={"Home, maybe"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound