import React, { useContext } from 'react';
import {
  StyledPopupOverlay,
  StyledPopup,
  StyledPopupWrapper,
  StyledPopupActions,
  StyledRemoveBtn,
  StyledCancelBtn,
  StyledCloseBtn,
} from './Popup.styles';
import { ApiContext } from '../../contexts/ApiContext';
import modalClose from '../../assets/close.svg';
import texts from '../../texts';
import { LangContext } from '../../contexts/LangContext';

const Popup = ({ streamerName, closeFn, variant }) => {
  const { lang } = useContext(LangContext);
  const {
    authLoading, deleteUser,
  } = useContext(ApiContext);

  const deleteFn = async () => {
    await deleteUser();
    closeFn();
  };

  return (
      <>
        <StyledPopupOverlay />
        <StyledPopupWrapper>
          <StyledPopup>
            <StyledCloseBtn onClick={closeFn} type="button">
              <img
                src={modalClose}
                alt="close"
              />
            </StyledCloseBtn>
            <h5>{variant === 'delete' ? texts[lang].modelHeadline : ''}</h5>
            <p>{variant === 'delete' ? texts[lang].modalText.replace('{streamer}', streamerName) : texts[lang].errorText}</p>
            <StyledPopupActions>
              {variant === 'delete' && <>
               <StyledCancelBtn onClick={closeFn}>
                {texts[lang].modalDenyText}
              </StyledCancelBtn>
              <StyledRemoveBtn
                disabled={authLoading}
                onClick={deleteFn}
              >
                {texts[lang].modalApproveText}
              </StyledRemoveBtn>
              </>}
            </StyledPopupActions>
          </StyledPopup>
        </StyledPopupWrapper>
      </>
    );
};

export default Popup;
