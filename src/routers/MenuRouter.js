import React, { Component } from 'react';
import { Route } from 'react-router';
import { Branch003Page, DocsPage } from "../pages/index";

class MenuRouter extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={DocsPage} />
        <Route exact path='/003' component={Branch003Page} />
      </>
    );
  }
}

export default MenuRouter;