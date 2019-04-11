import * as React from 'react'
import cn from 'classnames'

import './InfiniteScrollList.css'

interface Props {
  className: string
  children: React.ReactNodeArray
  reachedEnd: boolean
  onScrollBottom(): void
}

interface State {
  isLoading: boolean
}

export default class InfiniteScrollList extends React.Component<Props, State> {
  observer: IntersectionObserver
  spinner: HTMLDivElement

  state: State = {
    isLoading: false
  }

  componentDidMount() {
    this.setObserver()
  }

  componentDidUpdate(prevProps: Props) {
    if (
      React.Children.count(prevProps.children) !==
      React.Children.count(this.props.children)
    ) {
      this.setState({ isLoading: false })
    }
  }

  handleScrollBottom = () => {
    if (this.state.isLoading || this.props.reachedEnd) return

    this.setState(
      {
        isLoading: true
      },
      () => this.props.onScrollBottom()
    )
  }

  setObserver() {
    if (!this.spinner || this.observer) return

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    }

    const onChange = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio === 1) {
          this.handleScrollBottom()
        }
      })
    }

    this.observer = new IntersectionObserver(onChange, options)

    this.observer.observe(this.spinner)
  }

  render() {
    const { className, children, reachedEnd } = this.props

    const classNames = cn('InfiniteScrollList', className)
    const spinnerClassNames = cn('InfiniteScrollList__spinnerContainer', {
      'InfiniteScrollList__spinnerContainer--hidden': reachedEnd
    })

    return (
      <div className={classNames}>
        {children}

        <div className={spinnerClassNames} ref={el => (this.spinner = el)}>
          {/* <Spinner color="#1200FF" size={20} /> */}
        </div>
      </div>
    )
  }
}
