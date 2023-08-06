const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b394c6919c235da50fb8b257e2a5a9a4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
