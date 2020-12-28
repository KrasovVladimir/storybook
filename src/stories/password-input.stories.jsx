
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { PasswordInput } from '../components/inputs/password-input'


export default {
  title: 'Example/PasswordInput',
  component: PasswordInput,
}

const Template = () => {
  return (
    <ThemeProviders>
      <PasswordInput
        onChange={() => {}}
        value={'password'}
      />
    </ThemeProviders>
  )
}

export const passwordInput = Template.bind({})