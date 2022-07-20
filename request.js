const axios = require("axios");

async function downloaderMethod(insta_url){
 try {

     const options = {
        method: 'GET',
        url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
        params: {url: insta_url},
        headers: {
          'X-RapidAPI-Key': 'bdaddeac5dmsh858b6e869e1e58ep1633d4jsn0537bbd04265',
          'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
       }
     };    

     const response = await axios.request(options);
     const result = {
         videoUrl: response.data.video ,
         caption:response.data.caption
     }
     return result;

     } catch (error) {
       console.log(error+"")
    }
}

module.exports = {
    downloaderMethod
}