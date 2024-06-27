const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;
export const login = async (email, password) => {
  const response = await fetch(`${AUTH_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

export const register = async (userData) => {

  const response = await fetch(`${AUTH_API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw new Error(`Ошибка при регистрации: ${await response.text()}`);
  }

  return await response.text();
};

