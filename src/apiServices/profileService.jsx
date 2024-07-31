const API_URL = process.env.REACT_APP_PROFILE_API_URL; // URL API профиля
const BOOKING_API_URL = process.env.REACT_APP_BOOKING_API_URL; // URL API бронирования
const PROPERTY_API_URL = process.env.REACT_APP_API_URL; // URL API квартир

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
      const errorData = await response.text();
      throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const getCurrentBooking = async (token) => {
  try {
    const response = await fetch(`${BOOKING_API_URL}/mybookings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData.message || 'Something went wrong');
    }

    const bookings = await response.json();
    return bookings.length > 0 ? bookings[0] : null; // Возвращаем первое бронирование
  } catch (error) {
    console.error('Error fetching booking:', error);
    throw error;
  }
};

export const getPropertyById = async (propertyId, token) => {
  try {
    const response = await fetch(`${PROPERTY_API_URL}/${propertyId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching property:', error);
    throw error;
  }
};

export const updateProfilePicture = async (userId, file, token) => {
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('profilePicture', file);

  try {
    const response = await fetch(`${API_URL}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
  } catch (error) {
    console.error('Error updating profile picture:', error);
    throw error;
  }
};
