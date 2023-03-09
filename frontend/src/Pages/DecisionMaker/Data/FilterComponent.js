import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.small ? 5 : undefined,
}))`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  font-size: 12px;
  :focus {
    outline: none;
    border: 1px #eab308 solid;
    width: 400px;
    transition: 300ms;
    transition-timing-function: ease-in-out;
  }
  :not(:focus) {
    width: 300px;
    transition: 300ms;
    transition-timing-function: ease-in-out;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 32px;
  width: 31px;
  background-color: #e5e5e5;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #eab308;
    transition: 300ms;
    color: white;
    transition-timing-function: ease-in-out;
  }
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <Input
      id="search"
      type="text"
      placeholder="Keyword : [Nama] [NIM]"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton onClick={onClear}>
      <i className="fa fa-trash"></i>
    </ClearButton>
  </>
);

export default FilterComponent;
