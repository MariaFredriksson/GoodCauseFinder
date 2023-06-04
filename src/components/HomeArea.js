import Button from "./Button"
import GiveLoveIcon from "./../assets/give-love.png"

/**
 * Represents the home area component.
 *
 * @returns {JSX.Element} The JSX element representing the home area.
 */
const HomeArea = () => {
  return (
    <div className="home">
      <div className="container">
        {/* // TODO: Fixa så att denna div går att ta bort utan att bakgrundsbilden inte går upp hela vägen till navbaren */}
        <div className="stupid-div">
          <p>.</p>
        </div>
        <div className="hero">
          <div className="px-4 py-5 my-5 hero-text text-center">
            <img className="d-block mx-auto mb-4" src={GiveLoveIcon} alt="" width="72" />
              <h1 className="display-5 fw-bold text-body-emphasis">Dina hjärtefrågor gör skillnad!</h1>
              <div className="col-lg-6 mx-auto">
              <p className="lead fw-normal mb-4">Tillsammans förändrar vi världen! Utforska Good Cause Finder och ge kraft åt dina hjärtefrågor. Hitta biståndsprojekt som betyder något för dig, klicka och ge en gåva. Var med och skapa en bättre framtid - varje handling räknas!</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Button link={"/projects"} text={"Gör skillnad!"} />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeArea