import * as React from 'react'
import cn from 'classnames'

interface Props {
  src: string
  className?: string
}

export default class Img extends React.Component<
  Props & React.ImgHTMLAttributes<HTMLImageElement>
> {
  render() {
    const { className, ...rest } = this.props
    const classNames = cn('Img', className)

    return <img alt="" className={classNames} {...rest} />
  }
}
