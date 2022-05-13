import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/navBar/search.svg";
import { Icon, Field } from "./searchField.styles";

const SearchField = () => {
  return (
    // TODO: For all of your inputs, only and only use TextField component
    <Field
      variant="standard"
      placeholder="Search"
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
