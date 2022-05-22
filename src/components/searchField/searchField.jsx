//react components...
import React from "react";

//mui styles...
import { Icon, Field } from "./searchField.styles";

//icons...
import { ReactComponent as SearchIcon } from "../../assets/navBar/search.svg";

const SearchField = ({ onChange }) => {
  return (
    <Field
      variant="standard"
      placeholder="Search"
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <>
            <Icon component={SearchIcon} />
          </>
        ),
        disableUnderline: true,
      }}
    />
  );
};

export default SearchField;
