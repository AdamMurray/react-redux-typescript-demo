import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
// import { Dispatch, bindActionCreators } from 'redux'
// import * as queryString from 'query-string'

// import * as authActions from '../../state/auth/auth.actions'

// interface DispatchProps {
//   actions: typeof authActions
// }

type Props = /* DispatchProps & */ RouteComponentProps

export class AuthPage extends React.PureComponent<Props> {
  componentDidMount() {
    // const { location } = this.props
    // const queryParamsObject = queryString.parse(location.search)
    // const code: string = queryParamsObject.code as string
    // // If a code is returned, authorize user with code
    // if (code) {
    //   this.props.actions.userAuthWithCodeRequest(code)
    // }
  }

  render() {
    return <div className="AuthPage">Auth page</div>
  }
}

// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
//   actions: {
//     ...bindActionCreators(authActions, dispatch)
//   }
// })

export default withRouter(
  connect(
    null,
    null
  )(AuthPage)
)
