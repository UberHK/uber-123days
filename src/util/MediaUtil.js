// @flow
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'styled-components';

const SIZE = {
  XL: 1200,
  LG: 928,
  MD: 658,
  SM: 544,
  XS: 420
};

type Size = $Keys<typeof SIZE>;
type QueryDescriptor = {
  fromWidth?: Size,
  toWidth?: Size,
  fromHeight?: number,
  toHeight?: number
};

class Media {
  query: Array<string> = [];

  constructor(q: QueryDescriptor) {
    if ('fromWidth' in q && q.fromWidth) this.fromWidth(q.fromWidth);
    if ('toWidth' in q && q.toWidth) this.toWidth(q.toWidth);
    if ('fromHeight' in q && q.fromHeight) this.fromHeight(q.fromHeight);
    if ('toHeight' in q && q.toHeight) this.toHeight(q.toHeight);
  }

  fromWidth(size: Size): Media {
    this.query.push(`(min-width: ${SIZE[size] / 16}rem)`);
    return this;
  }

  toWidth(size: Size): Media {
    this.query.push(`(max-width: ${SIZE[size] / 16}rem)`);
    return this;
  }

  fromHeight(h: number): Media {
    this.query.push(`(min-height: ${h / 16}rem)`);
    return this;
  }

  toHeight(h: number): Media {
    this.query.push(`(max-height: ${h / 16}rem)`);
    return this;
  }

  css(...args: Array<any>): Array<any> {
    return css`
      @media ${this.query.join(' and ')} {
        ${css(...args)}
      }
    `;
  }
}

const MediaUtil = {
  fromWidth(w: Size): Media {
    return new Media({ fromWidth: w });
  },
  toWidth(w: Size): Media {
    return new Media({ toWidth: w });
  },
  fromHeight(h: number): Media {
    return new Media({ fromHeight: h });
  },
  toHeight(h: number): Media {
    return new Media({ toHeight: h });
  }
};

export default MediaUtil;
