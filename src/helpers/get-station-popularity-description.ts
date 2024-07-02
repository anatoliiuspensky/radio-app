import { isUndefined } from 'lodash';

const NOT_RATED = 'Not rated yet';

export const getStationPopularityDescription = (popularity?: number): string => {
  if(isUndefined(popularity)) {
    return NOT_RATED;
  }

  return popularity.toString();
}