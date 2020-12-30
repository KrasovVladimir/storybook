
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { PasswordInput } from '../components/inputs/password-input'


export default {
  title: 'Example/PasswordInput',
  component: PasswordInput,
}

const Template = (args) => {
  return (
    <ThemeProviders>
      <PasswordInput {...args} />
    </ThemeProviders>
  )
}

export const passwordInput = Template.bind({})
passwordInput.args = {
  value: '12345',
  onValidate: (value) => {
    if (value === '12345') {
      return null
    } else {
      return 'Invalid password'
    }
  },
}