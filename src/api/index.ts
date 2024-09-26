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
