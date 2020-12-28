
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { EmailTextField } from '../components/inputs/email-text-field'


export default {
  title: 'Example/EmailTextField',
  component: EmailTextField,
}

const Template = () => {
  return (
    <ThemeProviders>
      <EmailTextField
        value={'adress@gmail.com'}
      />
    </ThemeProviders>
  )
}

export const emailTextField = Template.bind({})