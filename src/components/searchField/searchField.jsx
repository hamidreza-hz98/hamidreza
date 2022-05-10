import { InputBase, Paper, SvgIcon } from "@mui/material";
import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/navBar/search.svg";
import { FieldContainer, Icon, Input } from "./searchField.styles";

const SearchField = () => {
  return (
    <FieldContainer component="form">
      <Icon component={SearchIcon} />
      <Input placeholder="Search" />
    </FieldContainer>
  );
};

export default SearchField;
