// src/contexts/ProfileContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getProfile } from '../apiServices/profileService';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem('profile');
    return storedProfile ? JSON.parse(storedProfile) : null;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('No token found');
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profileData = await getProfile(token);
        setProfile(profileData);
        localStorage.setItem('profile', JSON.stringify(profileData));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!profile) {
      fetchProfile();
    }
  }, [profile]);

  return (
    <ProfileContext.Provider value={{ profile, loading, error }}>
      {children}
    </ProfileContext.Provider>
  );
};
