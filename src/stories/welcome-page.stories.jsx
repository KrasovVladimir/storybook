
import React from 'react'

import { Providers}  from  './providers'
import { WelcomePage } from '../pages'


export default {
  title: 'Example/WelcomePage',
  component: WelcomePage,
}

const Template = () => {
  return (
    <Providers>
      <WelcomePage/>
    </Providers>
  )
}

export const Welcome = Template.bind({})