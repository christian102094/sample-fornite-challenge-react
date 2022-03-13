const getCookie = (username) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${username}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return false;
};

export default getCookie;
