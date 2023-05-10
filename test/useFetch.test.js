import { renderHook } from '@testing-library/react-hooks';
import useFetch from './useFetch';

describe('useFetch', () => {
  it('should fetch data from the given url', async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

    expect(result.current.data).toBeNull();

    await waitForNextUpdate();

    expect(result.current.data).toBeDefined();
    expect(result.current.data.id).toBe(1);
  });
});
