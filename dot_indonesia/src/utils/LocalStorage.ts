// const checkFavoriteStatus = async (movieId: string) => {
//   try {
//     const favoriteMovies = await AsyncStorage.getItem('favoriteMovies');
//     if (favoriteMovies) {
//       const favoriteList = JSON.parse(favoriteMovies);
//       setIsFavorite(favoriteList.includes(movieId));
//     }
//   } catch (error) {
//     console.log('Failed to retrieve favorite status:', error);
//   }
// };

// const toggleFavorite = async () => {
//   try {
//     const favoriteMovies = await AsyncStorage.getItem('favoriteMovies');
//     let favoriteList = favoriteMovies ? JSON.parse(favoriteMovies) : [];

//     if (isFavorite) {
//       favoriteList = favoriteList.filter((movieId: string) => movieId !== id);
//     } else {
//       favoriteList.push(id);
//     }

//     await AsyncStorage.setItem('favoriteMovies', JSON.stringify(favoriteList));
//     setIsFavorite(!isFavorite);
//   } catch (error) {
//     console.log('Failed to update favorite status:', error);
//   }
// };
