import { useEffect, useState } from 'react'
import { useFetchWeatherMutation } from './features/weather-slice'

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState()
  console.log('weatherInfo: ', weatherInfo)

  const [fetchWeather, result] = useFetchWeatherMutation()

  useEffect(() => {
    const handleWeather = async () => {
      try {
        let result = await fetchWeather({ cityName: 'London' }).unwrap()
        setWeatherInfo(result)
      } catch (error) {
        console.log('error: ', error)
      }
    }
    handleWeather()
  }, [])

  return (
    <>
      <pre>{JSON.stringify(weatherInfo, null, 2)}</pre>
    </>
  )
}
