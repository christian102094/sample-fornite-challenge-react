import styled from 'styled-components';


export const StyledPopupOverlay = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const StyledPopupWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 11;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledPopup = styled.div`
    font-family: Nunito Sans;
    background-color: #232428;
    color: rgba(255, 255, 255, 0.87);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 403px;
    position: relative;
    text-align: center;

    p{
        font-size: 16px;
        line-height: 140%;
        text-align: center;
        letter-spacing: 0.1px;
        margin: 0 40px;
    }

    h5{
        margin-top: 40px;
    }
`;

export const StyledCloseBtn = styled.button`
    position: absolute;
    right: 0;
    margin: 13px 13px 0 0;
    background-color: transparent;
    border: none;
   
    img{
        position: absolute;
        right: 0;
        margin: 13px 13px 0 0;
    }
`;

export const StyledPopupActions = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0 42px 0;
`;

export const StyledRemoveBtn = styled.button`
    background-color: #F53657;
    border: 1px solid #F53657;
    color: white;
    font-weight: bold;
    font-size: 14px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 1.25px;
    padding: 10px 24px;
    border-radius: 20px;
    line-height: 20px;
    font-style: normal;
`;

export const StyledCancelBtn = styled.button`
    text-decoration: none;
    color: #4678FF;
    background-color: transparent;
    border: 1px solid #4678FF;
    font-weight: bold;
    font-size: 14px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 1.25px;
    padding: 10px 24px;
    border-radius: 20px;
    margin-right: 10px;
    max-width: 300px;
    line-height: 20px;
    width: 100%;
`;
