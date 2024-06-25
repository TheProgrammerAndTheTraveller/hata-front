const API_URL = 'https://localhost:7127/api/Property';

export const getProperties = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (!response.ok) {
    const errorData = await response.
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};

export const getPropertyById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
};