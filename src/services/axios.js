import Axios from 'axios'

export const getDataAPI = async (endpoint, query) => {
  try {
    const response = await Axios.get(
      `https://api.jikan.moe/v4/${endpoint}?${query}`
    )
    return response.data
  } catch (error) {
    if (error) return error
  }
}

export const flatMapData = async (endpoint, query) => {
  try {
    const response = await getDataAPI(endpoint, query)
    return response.data.flatMap(item => item.entry)
  } catch (error) {
    if (error) return error
  }
}
