// import { renderHook } from '@testing-library/react-hooks';
import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from '../components/useFetch.js';

// describe('useFetch', () => {
//   it('should fetch data from the given url', async () => {
//     const apiEndpoint = 'http://localhost:5080/projects';

//     const { result, waitForNextUpdate } = renderHook(() => useFetch(apiEndpoint));

//     await waitForNextUpdate();

//     expect(result.current.data).toBeDefined();
//     expect(result.current.error).toBeNull();
//     expect(fetch).toHaveBeenCalledWith(apiEndpoint);
    
//   });
// });

it('should fetch data from the given url', async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  let result;

  await act(async () => {
    result = renderHook(() => useFetch(url));
    await result.waitForNextUpdate();
  });

  expect(result.current.data).toBeDefined();
  expect(result.current.data.id).toBe(1);
});

