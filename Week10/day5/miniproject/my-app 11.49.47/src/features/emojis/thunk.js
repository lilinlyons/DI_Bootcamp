//
// export const fetchNumber = createAsyncThunk(
//     'counter/fetchNumber',
//     async () => {
//         const response = await fetch('https://api.example.com/number'); // Replace with your API
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data.number; // Assume API returns { number: <value> }
//     }
// );