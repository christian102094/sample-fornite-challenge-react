import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { track } from '@streamelements/alchemy';
import texts from '../texts';
import getCookie from '../utils/getCookie';

export const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const { language } = navigator;
    const languageCode = language.substring(0, 2);
    const languageCookie = getCookie('language');
    if (languageCookie) {
      setLang(languageCookie);
    } else if (Object.keys(texts).find((code) => code === languageCode) && languageCode !== 'en') {
      track({
        name: 'chrome_language_settings',
        event: 'chrome_language_settings',
        source: 'leaderboard',
        feature: 'leaderboard',
        product: 'sponsorship',
        fields: [['partnershipid', 'leaderboard-test'], ['language_name', languageCode]],
      }).catch((err) => {console.error(err);});

      setLang(languageCode);
    }
  }, []);

  const updateLang = (code) => {
    document.cookie = `language=${code}`;
    track({
      name: 'language_chage_click',
      event: 'language_chage_click',
      source: 'leaderboard',
      feature: 'leaderboard',
      product: 'sponsorship',
      fields: [['partnershipid', 'leaderboard-test'], ['language_name', code]],
    }).catch((err) => {console.error(err);});
    setLang(code);
  };

  return (
    <LangContext.Provider value={{ lang, updateLang }}>
      {children}
    </LangContext.Provider>
  );
};

LangContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LangContextProvider;
