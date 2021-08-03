import React, { useEffect, useState } from 'react'
import axios from 'axios'

const City = ({ match }) => {
    const [api, setApi] = useState('')

    const id = match.params.id

    const fetchWeather = async (id) => {
        { console.log(id) }
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=18fd28e2cb66df699c7eb92cb54b758d&units=metric`)

        const data = await res.JSON(res)

        return data

    }

    useEffect(() => {
        fetchWeather(id).then((apiData) => {
            setApi(apiData)
        })
    }, [id])

    return (
        <div>
            {api}
        </div>
    )
}

export default City