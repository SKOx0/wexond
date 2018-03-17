import { observer } from "mobx-react";
import React from "react";

// Interfaces
import { IPage } from "../../interfaces";

// Components
import Page from "../Page";

// Styles
import { StyledPages } from "./styles";

import Store from "../../store";

export default observer(() => {
  return (
    <StyledPages>
      {Store.currentTabGroup.tabs.map(({ page }) => {
        return (
          <Page
            key={page.id}
            page={page}
            selected={Store.currentTabGroup.selectedTab === page.id}
          />
        );
      })}
    </StyledPages>
  );
});
