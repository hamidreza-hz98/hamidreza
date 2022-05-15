//react components...
import React from "react";

//mui styles...
import { Icon, Field } from "./searchField.styles";

//icons...
import { ReactComponent as SearchIcon } from "../../assets/navBar/search.svg";

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
