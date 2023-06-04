import GiveLoveIcon from "./../assets/give-love.png"

/**
 * Represents the About page component.
 *
 * @returns {JSX.Element} The JSX element representing the About page.
 */
const About = () => {
  return (
    <div>
      <div className="hero">
        <div className="px-4 py-5 mb-5 text-center">
          <img className="d-block mx-auto mb-4" src={GiveLoveIcon} alt="Give Love Icon" width="72" />
          <h1 className="display-5 fw-bold text-body-emphasis">Välkommen till Good Cause Finder!</h1>
          <div className="col-lg-6 mx-auto">
            <div className="lead mb-4">
              <p>
                Vill du göra en verklig skillnad i världen? Vill du hitta och stödja biståndsprojekt som brinner för dina hjärtefrågor? Då har du kommit till rätt plats!
              </p>
              <p>
                Good Cause Finder är den ultimata webbapplikationen som hjälper dig att hitta de perfekta projekten att stödja. Vi har samlat projekten från olika organisationer på en plattform för att göra det enkelt för dig att hitta det du söker.
              </p>
              <p>
                Oavsett om du brinner för utbildning, jämställdhet, hälsa eller något annat viktigt ämne, kan du använda våra enkla filtreringsverktyg för att hitta projekt som ligger dig varmt om hjärtat. Vi har skapat en användarvänlig design för att göra din sökning, filtrering och läsning av projektinformation så enkel och smidig som möjligt.
              </p>
              <p>
                Och det bästa av allt är att du kan ge en gåva till de projekt du väljer med bara ett klick! Besök projektens egna sidor och ge ditt stöd till global hållbar utveckling.
              </p>
              <p>
                Varje steg du tar, varje gåva du ger, gör en verklig skillnad i världen. Tillsammans kan vi skapa en ljusare framtid för alla.
              </p>
              <p>
                Bli en del av Good Cause Finder idag och låt oss tillsammans göra världen till en bättre plats!
              </p>
              <p className="footer-text">
                Applikationen är utvecklad av Maria Fredriksson som ett projekt inom utbildningen Webbprogrammerare vid Linnéuniversitetet. Tveka inte att kontakta mig på <a href="mailto:mf223wk@student.lnu.se">mf223wk@student.lnu.se</a> om du har några frågor eller feedback!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
