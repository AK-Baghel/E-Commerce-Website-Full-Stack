
// const params = {
//     headers: {
//         Authorization: 'bearer' + d3719b7e71103d981e1fc2ea6e78d7fb573576b412226c02b50e975bcb69bc970450a9f8cca00f78646f81fa5830bb1242c5cca0f6a666c720a31ba48d5f3539acceadd113c6e2557da0a5a2f975d17bb285b8b3423e857ee82d6121074d6d847f40f90c0628e12bb40debd8655790c2adcbe4c486fccea080f50c7bc56d4e58
//     }
// };

export const fetchDataFromApi = async (url) => {

    try {
        const data = await fetch(`http://localhost:1337${url}`,
            {
                headers: {
                    Authorization: 'bearer' + "d3719b7e71103d981e1fc2ea6e78d7fb573576b412226c02b50e975bcb69bc970450a9f8cca00f78646f81fa5830bb1242c5cca0f6a666c720a31ba48d5f3539acceadd113c6e2557da0a5a2f975d17bb285b8b3423e857ee82d6121074d6d847f40f90c0628e12bb40debd8655790c2adcbe4c486fccea080f50c7bc56d4e58"
                }
            });
        const result = await data.json();
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};


