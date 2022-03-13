import React, { useContext } from 'react';
import { StyledSelectWrapper, StyledSelect } from './LangDropdown.styles';
import { LangContext } from '../../contexts/LangContext';
import texts from '../../texts';

const LangDropdown = () => {
  const { lang, updateLang } = useContext(LangContext);

  return (
    <StyledSelectWrapper>
      <StyledSelect
        name="dates"
        id="dates"
        value={lang}
        onChange={(e) => updateLang(e.target.value)}
      >
        {Object.keys(texts).map((code) => (
          <option value={code} key={code}>
            {code.toUpperCase()}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};

export default LangDropdown;
