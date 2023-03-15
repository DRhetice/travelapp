import axios from "axios"


export const getPlaceData = async() => {
    try {
        const {data:{data}} = await axios.get(
            `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
            {
                params: {
                    bl_latitude: '25.15543993776612',
                    tr_latitude: '25.41257834546226',
                    bl_longitude: '51.39587210719369',
                    tr_longitude: '51.62812119686502',
                    limit: '30',
                    currency: 'USD',
                    open_now: 'false',
                    lunit: 'km',
                    lang: 'en_US'
                  },
                  headers: {
                    'X-RapidAPI-Key': 'efc4a5ae74msh4bcb189d1818538p197d30jsnd4007c60a7ac',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                  }
            }
        )
        return data
    } catch (error) {
        return null
    }
}