import Calculator from "./components/Calculator"
import classes from "./styles/main.module.scss"

const App = () => {

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Calculator</h1>
      <Calculator />
    </div>
  )
}

export default App
