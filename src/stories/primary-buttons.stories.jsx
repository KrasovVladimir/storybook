
import React from 'react'

import { Providers}  from  './providers'
import { PrimaryButton } from '../buttons'


export default {
  title: 'Example/PrimaryButton',
  component: PrimaryButton,
}

const Template = (args) => {
  return (
    <Providers>
      <PrimaryButton {...args} />
    </Providers>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'PrimaryButton',
}
