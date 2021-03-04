import styled from 'styled-components';

const StyledRelatedVideoContainer = styled.div`
  border-top: solid 1px;
  height: 100px;
  position: relative;
  display: flex;
  text-align: left;
  cursor: pointer;
`;

export const StyledRelatedVideoImage = styled.img`
  width: 120px;
  height: 90px;
`;

export const StyledRelatedVideoTitleContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 5px;
`;

export const StyledRelatedVideoTitle = styled.div`
  line-height: 1;
`;

export default StyledRelatedVideoContainer;
