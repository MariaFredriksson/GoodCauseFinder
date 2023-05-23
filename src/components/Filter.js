import Button from "./Button"

const Filter = () => {
  return (
    <div>
      <h2>Filtrera projekt</h2>
      <Button link="/projects" text="Alla projekt" />
      <Button link="/projects/halsa" text="Hälsa" />
      <Button link="/projects/jamstalldhet" text="Jämställdhet" />
      <Button link="/projects/utbildning" text="Utbildning" />
    </div>
  )
}

export default Filter