import * as React from 'react'

import ReactLoadable from 'react-loadable'
import { Omit } from 'ts-essentials'

import './Loadable.css'

export default function Loadable(
  props: Omit<ReactLoadable.OptionsWithoutRender<{}>, 'loading'>
) {
  return ReactLoadable({
    loading: () => <div />,
    delay: 300,
    ...props
  })
}

// export default class Whatever extends React.Component {}
