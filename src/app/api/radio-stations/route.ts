import { NextResponse } from 'next/server';
import { getRadioStations } from '../../../helpers';
import { IRadioStation, SortOrder } from '../../../interfaces';
import { sortBy } from 'lodash';

const applyQueryFilters = (stationList:IRadioStation[], query: URLSearchParams): IRadioStation[] => {
  let res = [...stationList];
  const filterVal = query.get('filter');
  const filterBy = query.get('filterBy')
  if (filterBy && filterVal) {
    switch (filterBy) {
      case 'name':
        res = res.filter(s => s.name.toLocaleLowerCase().includes(filterVal.toLowerCase()));
        break;
      case 'tags':
        res = res.filter(s => s.tags.some(t => t.toLowerCase().includes(filterVal.toLowerCase())));
        break;
      default:
        break;
    }
  }

  const sortProp = query.get('sortBy');
  const sortOrder = query.get('sortOrder');

  if (sortProp && sortOrder) {
    switch (sortProp) {
      case 'name':
        res = sortBy(res, [({ name }) => name.toLowerCase()]);
        break;
      case 'popularity':
        // Looks liket the popularity value changes with some requests
        res = res.sort((prev, next) => ((prev.popularity ?? 0) - (next.popularity ?? 0)));
        break;
      case 'reliability':
          res = res.sort((prev, next) => prev.reliability - next.reliability);
          break;
      default:
        break;
    }
    return sortOrder === SortOrder.ASC ? res : res.reverse();
  }

  return res;
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;
  const data = await getRadioStations();
  // TODO: Applying radio station sort/filter here. Ideally it should be handled by the provided Backend API
  const res = applyQueryFilters(data, queryParams);
  return NextResponse.json(res);
}
