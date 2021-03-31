import { storage } from './storage';
import { FAVORITES_STORAGE_KEY, AUTH_STORAGE_USER } from './constants';

const getFavorites = () => {
  const user = storage.get(AUTH_STORAGE_USER);
  if (!user) {
    return [];
  }
  const favorites = storage.get(FAVORITES_STORAGE_KEY + user.id);
  if (!favorites) {
    return [];
  }
  return favorites;
};

const getFavoriteVideo = (videoId) => {
  const favorites = getFavorites();
  return favorites.find((favorite) => favorite.id === videoId);
};

const addToFavorites = (video) => {
  const user = storage.get(AUTH_STORAGE_USER);
  const favorites = getFavorites();
  favorites.push(video);
  storage.set(FAVORITES_STORAGE_KEY + user.id, favorites);
};

const removeFromFavorites = (videoId) => {
  const user = storage.get(AUTH_STORAGE_USER);
  const favorites = getFavorites();
  const newFavorites = favorites.filter((video) => video.id !== videoId);
  storage.set(FAVORITES_STORAGE_KEY + user.id, newFavorites);
};

export default {
  getFavorites,
  getFavoriteVideo,
  addToFavorites,
  removeFromFavorites,
};
