
export const getWeather = async (city) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18fd28e2cb66df699c7eb92cb54b758d&units=metric`)

  const weather = await res.json()

  return weather
}