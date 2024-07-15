import React from "react";
import classes from "./searchDropDown.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import SearchStory from "./searchStory";
import Popular from "./popular";
import SearchResults from "./searchResults";
import OutsideClickHandler from "react-outside-click-handler";
import { differFuncActions } from "@/app/GlobalRedux/differFunc";
import { searchActions } from "@/app/GlobalRedux/searchSlice";

const SearchDropDown: React.FC<{ fixedClass: any }> = (props) => {
  const dispatch = useDispatch();
  const openSearchBool = useSelector(
    (state: RootState) => state.search.openSearchBool
  );
  const onSearchBool = useSelector(
    (state: RootState) => state.search.onSearchBool
  );
  const openSearch = openSearchBool && classes.search_drop_down_container_open;

  function closeSearchHandler() {
    dispatch(searchActions.closeSearch());
  }
  return (
    <div
      className={`${classes.search_drop_down_container} ${props.fixedClass} ${openSearch}`}
    >
      <OutsideClickHandler onOutsideClick={closeSearchHandler}>
        {onSearchBool ? (
          <SearchResults />
        ) : (
          <>
            <SearchStory />
            <Popular />
          </>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default SearchDropDown;
