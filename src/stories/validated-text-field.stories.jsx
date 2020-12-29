
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { ValidatedTextField } from '../components/inputs/validated-text-field'


export default {
  title: 'Example/ValidatedTextField',
  component: ValidatedTextField,
}

const Template = (args) => {
  return (
    <ThemeProviders>
      <ValidatedTextField {...args} />
    </ThemeProviders>
  )
}

export const validatedTextField = Template.bind({})
validatedTextField.args = {
  value: 'addres@mail.com',
  validated: false,
}