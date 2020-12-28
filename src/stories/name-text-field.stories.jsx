
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { NameTextField } from '../components/inputs/name-text-field'


export default {
  title: 'Example/NameTextField',
  component: NameTextField,
}

const Template = () => {
  return (
    <ThemeProviders>
      <NameTextField
        label={'First name'}
        onchange={() => {}}
        value={''}
      />
    </ThemeProviders>
  )
}

export const nameTextField = Template.bind({})