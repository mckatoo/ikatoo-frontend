import { renderHook } from '@testing-library/react-hooks';

import { useSideMenu } from './useSideMenu';

describe('useSideMenu', () => {

  it('should return items of the public menu', () => {
    const { result } = renderHook(() => useSideMenu())

    expect(result.current).toBe({ links: [] })
  });

});
