
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { CommonButton } from '../components/buttons/common-button'


export default {
  title: 'Example/CommonButton',
  component: CommonButton,
}

const Template = (args) => {
  return (
    <ThemeProviders>
      <CommonButton {...args} />
    </ThemeProviders>
  )
}

export const primaryButton = Template.bind({})
primaryButton.args = {
  children: 'PrimaryButton',
  disabled: false,
}

export const secondaryButton = Template.bind({})
secondaryButton.args = {
  children: 'SecondaryButton',
  secondary: true,
  disabled: false,
}
