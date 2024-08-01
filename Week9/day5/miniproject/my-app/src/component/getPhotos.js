
const getPhotos = async (query) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=SMnPdeuESSQgL1Ki_jkpVZ2YE07rpO1hmZcpErCj6Zo&query=${query}&per_page=30`);

        if (!response.ok) {
            throw new Error("Failed fetch");
        }
        return await response.json();
    } catch (error) {
        console.log(`We got the error: ${error}`);
        throw error;
    }
};

export default getPhotos;
