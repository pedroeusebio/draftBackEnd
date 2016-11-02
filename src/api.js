export function success(request, doc) {
  return {
    request,
    payload: doc
  };
}


export function error(request, error) {
  return {
    request,
    error
  };
};

const api = {
  success,
  error
};

export default api;
