import * as React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Loadable from './common/Loadable/Loadable'

/* tslint:disable space-in-parens variable-name promise-function-async */
const AsyncHomePage = Loadable({
  loader: () =>
    import(/* webpackChunkName: "HomePage" */ './components/HomePage')
})
/* tslint:enable space-in-parens variable-name promise-function-async */

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/home" />} />
      <Route path="/home" exact component={AsyncHomePage} />

      <Route render={() => <Redirect to="/" />} />
    </Switch>
  )
}
