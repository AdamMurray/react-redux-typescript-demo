import * as React from 'react'

export default class Modal extends React.Component {}

// import * as React from 'react'
// import * as ReactModal from 'react-modal'
// import cn from 'classnames'

//

// import './Modal.css'

// interface OwnProps {
//   className: string
//   children: React.ReactNode
// }

// type Props = OwnProps & ReactModal.Props

// interface State {
//   topOffset: number
// }

// export default class Modal extends React.PureComponent<Props, State> {
//   contentRef: HTMLDivElement

//   state: State = {
//     topOffset: null
//   }

//   handleAfterOpen = () => {
//     const modalHeight = this.contentRef.getBoundingClientRect().height
//     const heightDifference = window.innerHeight - modalHeight
//     const topOffset = (heightDifference / 2) * 0.8

//     if (modalHeight + topOffset < window.innerHeight) {
//       this.setState({ topOffset })
//     }
//   }

//   render() {
//     const { className, children, ...rest } = this.props

//     const classNames = {
//       base: cn('Modal', className),
//       afterOpen: 'Modal__afterOpen',
//       beforeClose: 'Modal__beforeClose'
//     }

//     const overlayClassName = cn('Modal__overlay')

//     return (
//       <ReactModal
//         className={classNames}
//         overlayClassName={overlayClassName}
//         ariaHideApp={false}
//         closeTimeoutMS={500}
//         contentRef={node => (this.contentRef = node)}
//         style={{ content: { top: this.state.topOffset } }}
//         onAfterOpen={this.handleAfterOpen}
//         {...rest}
//       >
//         {children}
//       </ReactModal>
//     )
//   }
// }
