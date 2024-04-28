import styles from "./App.module.css"
import Form from "./components/Form/Form"
import useWeather from "./hooks/useWeather"

export default function App() {
  const { fetchWeather } = useWeather()
  return (
    <div>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form 
          fetchWeather = {fetchWeather}
        />
        <p>2</p>
      </div>
    </div>
  )
}
