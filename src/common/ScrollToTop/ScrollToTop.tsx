import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

interface OwnProps {
  children: React.ReactChild
}

type Props = OwnProps & RouteComponentProps

export class ScrollToTop extends React.Component<Props> {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
