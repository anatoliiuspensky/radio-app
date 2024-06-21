import { isUndefined } from 'lodash';

const NOT_RATED = 'Not rated yet';

export const getStationPopularityDescription = (popularity?: number): string => {
  console.log(popularity);
  if(isUndefined(popularity)) {
    console.log('isUndefined')
    return NOT_RATED;
  }

  return popularity.toString();
}