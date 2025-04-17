import axios from 'axios';
async function GetNEWS(){
    const options = {
        method: 'GET',
        url: 'https://spacenews.p.rapidapi.com/newstoday',
        headers: {
          'x-rapidapi-key': 'c81d7bd113msh1de697e4447d5e1p1387d6jsn55156298931e',
          'x-rapidapi-host': 'spacenews.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

}
