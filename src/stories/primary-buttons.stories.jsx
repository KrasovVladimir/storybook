
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { PrimaryButton } from '../components/buttons/primary-button'


export default {
  title: 'Example/PrimaryButton',
  component: PrimaryButton,
}

const Template = (args) => {
  return (
    <ThemeProviders>
      <PrimaryButton {...args} />
    </ThemeProviders>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'PrimaryButton',
}
