import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8081',
  }),
  endpoints(builder) {
    return {
      fetchWeather: builder.mutation<any,any>({
        query: (cityName) => ({
            url: `/fetch-weather-info`,
            method: 'POST',
            body: cityName
        }),
      }),
    }
  },
})

export const { useFetchWeatherMutation} = apiSlice