// src/apiServices/bookingService.jsx

const API_URL = process.env.REACT_APP_BOOKING_API_URL;

const createBooking = async (bookingDto, token) => {
  try {
    debugger
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(bookingDto)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create booking');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to create booking');
  }
};

const getBookings = async (token) => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch bookings');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch bookings');
  }
};

const getBookingById = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch booking');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch booking');
  }
};

export default {
  createBooking,
  getBookings,
  getBookingById
};
