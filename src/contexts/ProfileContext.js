// src/contexts/ProfileContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getProfile as getProfileFromApi } from '../apiServices/profileService';
import { useNavigate } from 'react-router-dom';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem('profile');
    return storedProfile ? JSON.parse(storedProfile) : null;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = async (token) => {
    try {
      setLoading(true);
      const profileData = await getProfileFromApi(token);
      const profileWithToken = {...profileData, token}
      setProfile(profileWithToken);
      localStorage.setItem('profile', JSON.stringify(profileWithToken));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getToken = () => {
    if (!token)
      setToken(localStorage.getItem('token'));

    if (!token)
      navigate("/login");

    return token;
  }

  const getProfile = async () => {
    if (profile)
      return profile;

    const token = getToken();

    await fetchProfile(token);
    return profile;
  }

  return (
    <ProfileContext.Provider value={{ getProfile, getToken, loading, error }}>
      {children}
    </ProfileContext.Provider>
  );
};
