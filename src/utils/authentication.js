// Authentication is done is 3 ways: https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
// 1. Create (a new request token)
// 2. Get the user to authorize the request token
// 3. Create (a new session id) with the authorized request token

import axios from 'axios';

export const moviesApi = axios.create({ // axios instance [moviesApi]
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');

    const token = data.request_token;

    if (data.success) {
      localStorage.setItem('request_token', token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Sorry, your token could not be created.');
  }
};

// eslint-disable-next-line consistent-return
export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');

  if (token) {
    try {
      // nested object destructuring
      // eslint-disable-next-line camelcase
      const { data: { session_id } } = await moviesApi.post('authentication/session/new', { request_token: token });
      localStorage.setItem('session_id', session_id);

      // eslint-disable-next-line camelcase
      return session_id;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
};
