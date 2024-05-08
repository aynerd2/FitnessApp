export const exerciseOptions = {
     
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '0903eeb9e7msh0a1440261994734p1065ecjsn233869910a19',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0903eeb9e7msh0a1440261994734p1065ecjsn233869910a19',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};






export const fetchData = async (url, options) =>{

      const response = await fetch(url, options);
      const data = await response.json();

      return data;

}