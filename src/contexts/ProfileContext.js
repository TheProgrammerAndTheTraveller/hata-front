import React, { createContext, useState, useContext, useEffect } from 'react';
import { getProfile as getProfileFromApi, updateProfilePicture as updateProfilePictureFromApi } from '../apiServices/profileService';
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
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const fetchProfile = async (token) => {
    try {
      setLoading(true);
      const profileData = await getProfileFromApi(token);
      setProfile(profileData);
      localStorage.setItem('profile', JSON.stringify(profileData));
      return profileData;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getToken = () => {
    if (!token)
      navigate("/login");

    return token;
  }

  const updateToken = async (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    await fetchProfile(token);
  }

  const getProfile = async () => {
    if (profile)
      return profile;

    const token = getToken();

    return await fetchProfile(token);
  }

  const updateProfilePicture = async (userId, file) => {
    try {
      setLoading(true);
      await updateProfilePictureFromApi(userId, file, token);
      await fetchProfile(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProfileContext.Provider value={{ getProfile, getToken, loading, updateToken, updateProfilePicture, error }}>
      {children}
    </ProfileContext.Provider>
  );
};
