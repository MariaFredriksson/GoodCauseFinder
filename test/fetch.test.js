import { renderHook } from '@testing-library/react-hooks'
import useFetch from './useFetch'
// Import TileARea
// import TileArea from './TileArea'
// import TileArea from '../src/components/TileArea'

// Tests that the fetch is fetching ANY data at all from the API, but not what data it is fetching
// Also checks that the fetch is done to a certain address
test('useFetch should fetch data from the correct API endpoint', async () => {
  const apiEndpoint = 'http://localhost:5080/projects'

  const { result, waitForNextUpdate } = renderHook(() => useFetch(apiEndpoint))

  await waitForNextUpdate()

  expect(result.current.data).toBeDefined()
  expect(result.current.error).toBeNull()
  expect(fetch).toHaveBeenCalledWith(apiEndpoint)
})

