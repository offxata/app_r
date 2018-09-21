// 3rd party libs
import React from 'react';

// components
import Aux from '../../hoc/Aux';

// style
import classes from './Layout.scss';

const layout = ( props ) => (
  <Aux>
    <header>
      Toolbar, SideDrawer, Backdrop
    </header>
    <main className={classes.Content}>
      { props.children }
    </main>
  </Aux>
)

export default layout;