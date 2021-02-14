import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  min-width: 320px;
  height: 100px;
  tbody {
    overflow-y: scroll;
    max-height: 1em;
    position: relative;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  thead {
    background-color: #181818;
    border: 1px solid #696969;
    padding: 9px 15px;
    white-space: nowrap;
    overflow-y: scroll;
  }

  th {
    text-align: left;
    font-size: 20px;
    &:not(:first-child) {
      text-align: right;
    }
  }
  td {
    border: 1px solid #696969;
    padding: 9px 15px;
    white-space: nowrap;
    font-size: 18px;
    img {
      width: 24px;
      vertical-align: baseline;
      margin-right: 10px;
    }
    &:not(:first-child) {
      text-align: right;
    }
  }
`;

export default { Table };
