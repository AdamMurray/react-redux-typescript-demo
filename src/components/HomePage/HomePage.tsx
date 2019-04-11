import * as React from 'react'
import { connect } from 'react-redux'
// import { Dispatch, bindActionCreators } from 'redux'

import Button from '../../common/Button/Button'

// import * as authActions from '../../state/auth/auth.actions'

// interface DispatchProps {
//   actions: typeof authActions
// }

// type Props = DispatchProps

export class HomePage extends React.PureComponent {
  static defaultProps = {}

  componentDidMount() {
    // this.props.actions.fetchCurrentUserRequest()
  }

  render() {
    return (
      <div className="HomePage">
        <Button>Home Page</Button>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
//   actions: {
//     ...bindActionCreators(authActions, dispatch)
//   }
// })

export default connect(
  null,
  null
)(HomePage)
