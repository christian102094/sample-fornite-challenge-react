import React, {
  createContext, useState, useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import getLink from '../utils/getLink';
import getCookie from '../utils/getCookie';

export const ApiContext = createContext();
const baseLink = getLink('api');

const ApiContextProvider = ({ children }) => {
  const [auth, setAuth] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [disconnect, setDisconnect] = useState(false);
  const { streamer } = useParams();

  const apiFetch = async (url, action, token) => {
    try {
      const fetched = await fetch(url, {
        method: action,
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });

      const response = await fetched.json();
      if (response.error) {
        console.log(response.error);
        return null;
      }
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const deleteUser = async () => {
    setAuthLoading(true);
    try{
      await apiFetch(`${baseLink}/v1/user?campaign=sp`, 'delete', auth);
      document.cookie = 'epic-sesp=1; domain=.streamelements.com; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; 
      setAuth(null);
    }
    catch(err){
      console.error(err);
    }
    setAuthLoading(false);
  };


  useEffect(() => {

    const init = async () => {
      setAuth(getCookie('epic-sesp'));
      if (auth && disconnect) {
          await deleteUser();
          window.location = 'https://fortnite.com';
      }
    };

    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, disconnect, streamer]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setDisconnect(query.get('disconnect'));
  }, []);

  const state = {
    auth,
    authLoading,
    deleteUser,
  };

  return (
    <ApiContext.Provider
      value={state}
    >
      {!disconnect && children}
    </ApiContext.Provider>
  );
};

ApiContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiContextProvider;
