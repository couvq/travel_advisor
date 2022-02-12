// where we keep all of our API calls 
import axios from 'axios'; // library that helps us make our calls 

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    try {
        // request
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '672f444ba1msh5ef96f3113280dep176206jsnb157cac756a8'
            }
          });

        return data;
    } catch (error) {
        console.log(error);
    }
}

