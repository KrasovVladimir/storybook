
import React from 'react'

import { Providers}  from  './providers'
import { SecondariButton } from '../buttons'


export default {
  title: 'Example/SecondariButton',
  component: SecondariButton,
}

const Template = (args) => {
  return (
    <Providers>
      <SecondariButton {...args} />
    </Providers>
  )
}

export const Secondari = Template.bind({})
Secondari.args = {
  children: 'SecondariButton',
}
