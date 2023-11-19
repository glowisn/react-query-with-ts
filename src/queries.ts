const fetchSuccess = () => Promise.resolve({ data: 'Success data' });
const fetchFailure = () => Promise.reject(new Error('Fetch failed'));
const fetchLoading = () => new Promise(() => {}); // Never resolves or rejects

export { fetchSuccess, fetchFailure, fetchLoading };