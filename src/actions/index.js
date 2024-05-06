
export const fetchData = () => {
  const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": 0
     });
     
     const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
     };
     
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA' });

    // Simulate fetching data (e.g., from an API)
    /*const dummyData = Array.from({ length: 9 }).map((_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
    }));*/
     
     const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
     if (!response.ok) {
      throw new Error('Failed to fetch items');
    }
    const data = await response.json();

    // Simulate delay (replace with actual async API call)
    //await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data.jdList });
  };
};