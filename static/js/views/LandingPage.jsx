import { useState, useEffect, useContext } from 'react';
import { init, track } from '@streamelements/alchemy';
import { useParams } from 'react-router-dom';
import logo from '../assets/fortnite-logo.png';
import chars from '../assets/landing-page-chars.png';
import check from '../assets/check.svg';
import texts from '../texts';
import constants from '../constants'
import { ApiContext } from '../contexts/ApiContext' ;
import getLink from '../utils/getLink';
import LangDropdown from '../components/LangDropdown/LangDropdown';
import { LangContext } from '../contexts/LangContext' 
import parse from 'html-react-parser';
import Popup from '../components/Popup/Popup';

function LandingPage() {
  const [streamerObj, setStreamerObj] = useState(null);
  const [ctaHref, setCtaHref] = useState('');
  const { streamer } = useParams();
  const { auth, authLoading} = useContext(ApiContext);
  const { lang } = useContext(LangContext);
  const [error, setError] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);


  useEffect(() => {
    const getStreamer = async () => {
      if (streamer) {
        try {
          const fetchedStreamer = await fetch(constants.STREAMER_API_URL.replace('{streamerName}', streamer));
          const streamerResponse = await fetchedStreamer.json();
          if (streamerResponse.error) {
            window.location = 'https://streamelements.com/';
          } else {
            setStreamerObj(streamerResponse);
          }
        } catch (e) {
          console.log(e);
        }
      }
    };

    getStreamer();
  }, [streamer]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const queryError = query.get('error');
    if (queryError) {
      setError(true);
    };
    init()
  }, []);

  useEffect(() => {
    if (!authLoading) {
      const baseLink = getLink('LP');
      setCtaHref(`${baseLink}?streamer=${streamer}&channel=${streamerObj?._id}&campaign=sp&action=login-participate&lang=${lang}`);
    }
  }, [authLoading, lang, streamer, streamerObj]);


  const allowClick = () => {
  track({
      name: 'get_started_click',
      event: 'get_started_click',
      source: 'leaderboard',
      feature: 'leaderboard',
      product: 'sponsorship',
      fields: [['partnershipid', 'leaderboard-test']],
    }).catch(error => {console.log(error)})
  }

  return (
    <div className={`wrapper ${lang === 'ru' ? 'russian' : ''}`}>
      <LangDropdown/>
      <img className="heroImg" src={chars} alt="Fortnite characters"/>
      {streamerObj && 
        <div className="content">
          <img className="logo" src={logo} alt="Fortnite logo"/>
          <div className="instructionWrapper">
            <div className={ auth ? "instructionBox loggedIn" : "instructionBox"}>
              <div className="instructionNumberBox"><span className="instructionNumber">{auth? <img src={check} alt="logged in"/> : '1.'}</span></div>
              <span className="instruction">{texts[lang].stageOne}</span>
            </div>
            <div className="instructionBox">
              <div className="instructionNumberBox"><span className="instructionNumber">2.</span></div>
              <span className="instruction">{auth ? parse(texts[lang].download.replace('{streamer}', streamerObj?.displayName)) : texts[lang].stageTwo}</span>
            </div>
            <div className="instructionBox">
              <div className="instructionNumberBox"><span className="instructionNumber">3.</span></div>
              <div className="instruction">
                <div>{texts[lang].stageThree.replace('{streamer}', streamerObj?.displayName)}</div>
                <div className="instructionSub">{texts[lang].stageThreeSub}</div>
              </div>
            </div>
          </div>
          {auth ? 
          <span className="deleteSpan" onClick={() => setDeleteModal(true)}>{texts[lang].deleteText}</span> :
          <button 
            className="link-wrapper" 
            onClick={allowClick}
          >       
            <a href={ctaHref}>{texts[lang].btnText}</a>
          </button>}
        </div>}
      <footer className="StyledFooter">
        <span>Created with ❤️ by StreamElements © All rights reserved</span>
        <span className="StyledFooterSpan">
          <a className="StyledFooterLink" href="https://drive.google.com/drive/folders/1ELrg2QvBQwV_uXZnmDLik95lI1X2PcrS?usp=sharing">Terms &amp; Conditions</a>
          <a className="StyledFooterLink" href="https://streamelements.com/contact">Contact us</a>
          <a className="StyledFooterLink" href="https://streamelements.com/privacy">Privacy policy</a>
        </span>
      </footer>
      {error && <Popup variant="error" closeFn={() => setError(false)}/>}
      {deleteModal && <Popup variant="delete" closeFn={() => setDeleteModal(false)}/>}
    </div>
  );
}

export default LandingPage;
