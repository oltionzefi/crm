import { Data, Params } from '@angular/router';

export const ActivatedRouteMock = {
  data: {
    subscribe: (fn: (value: Data) => void) =>
      fn({
        dummy: 'DUMMY',
      }),
  },
  params: {
    subscribe: (fn: (value: Params) => void) =>
      fn({
        tab: 0,
      }),
  },
  snapshot: {
    url: [
      {
        path: 'foo',
      },
      {
        path: 'bar',
      },
      {
        path: 'baz',
      },
    ],
  },
};
