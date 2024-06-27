const API_URL = process.env.REACT_APP_PROFILE_API_URL;

export const getProfile = async (token) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};
