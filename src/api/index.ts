import END_POINTS from "./end-point";
import https from "./https";

export const trendingAll = (params: string) => {
  return https
    .get(`${END_POINTS.TRENDING.ALL}/${params}?language=tr-TR`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
export const trendingMovie = (params: string) => {
  return https
    .get(`${END_POINTS.TRENDING.MOVIE}/${params}?language=tr-TR`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
export const trendingTV = (params: string) => {
  return https
    .get(`${END_POINTS.TRENDING.TV}/${params}?language=tr-TR`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
export const trendingPerson = (params: string) => {
  return https
    .get(`${END_POINTS.TRENDING.PERSON}/${params}?language=tr-TR`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
