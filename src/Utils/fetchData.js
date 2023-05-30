export const exerciseOptions = {
     
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '90a059a26cmsh9d485d727d4ec56p1660d0jsn0ee024a595da',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '90a059a26cmsh9d485d727d4ec56p1660d0jsn0ee024a595da',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};






export const fetchData = async (url, options) =>{

      const response = await fetch(url, options);
      const data = await response.json();

      return data;

}