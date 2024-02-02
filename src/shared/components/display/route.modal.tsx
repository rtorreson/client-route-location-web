import styled from 'styled-components';

export const StyledRouteModal = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;

    &:last-child {
      border-bottom: none;
    }
  }

  .highlight {
    background-color: #e6f7ff;
  }
`;
