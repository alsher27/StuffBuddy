const customFetch = (url, options) => fetch(`https://localhost:5001/api/${url}`, options)
  .then((res) => {
    if (!res.ok) {
      return Promise.reject;
    }
    return res.json();
  })
  .then((res) => res);

export const login = (url, user) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify({ Email: user.email, Password: user.password }),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const register = (url, user) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify({ Email: user.email, Password: user.password, Name: user.username }),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const logout = (url) => customFetch(url);

export const getUsers = (url) => customFetch(url);

export const createDevice = (url, device) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(device),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const deleteDevice = (url, id) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(id),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchDevice = (url, data) => customFetch(url, {
  method: 'GET',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUserDevices = (url, username) => customFetch(url, {
  method: 'GET',
  body: JSON.stringify(username),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUserOrders = (url, username) => customFetch(url, {
  method: 'GET',
  body: JSON.stringify(username),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getOrder = (url, id) => customFetch(url, {
  method: 'GET',
  body: JSON.stringify(id),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createOrder = (url, order) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(order),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const removeOrder = (url, id) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(id),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const updateOrder = (url, order) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(order),
  headers: {
    'Content-Type': 'application/json',
  },
});
