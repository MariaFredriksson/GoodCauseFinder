import Button from "./Button"
import GiveLoveIcon from "./../assets/give-love.png"

const HomeArea = () => {
  return (
    <div className="home">
      <div className="container">
        {/* // TODO: Fixa så att denna div går att ta bort utan att bakgrundsbilden inte går upp hela vägen till navbaren */}
        <div>
          <p>.</p>
        </div>
        <div className="hero">
          <div className="px-4 py-5 my-5 hero-text text-center">
            <img className="d-block mx-auto mb-4" src={GiveLoveIcon} alt="" width="72" />
              <h1 className="display-5 fw-bold text-body-emphasis">Something important</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Button link={"/projects"} text={"Call to action"} />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeArea