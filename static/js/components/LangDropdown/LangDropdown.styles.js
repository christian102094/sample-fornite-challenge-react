import styled from 'styled-components';

export const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  select,  
  &::after {
    grid-area: select;
  }

  img{
    margin-right:12px;
  }

  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: transparent;
  width: 50px;
  position: absolute;
  top: 15px;
  right: 15px;

  @media only screen and (max-width: 880px)  {
    top: 10px;
    right: 10px;
  }
`;

export const StyledSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  font-family: inherit;
  font-size: 14px;
  color: white;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  outline: none;
  width: 50px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%235684FD'/></g></svg>") no-repeat;
  background-position: right 5px top 50%;
  font-family: 'Nunito Sans', sans-serif;

  option{
    background-color: #232428;
  }


select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
}`;
