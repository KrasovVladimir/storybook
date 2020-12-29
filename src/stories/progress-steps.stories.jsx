
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { ProgressSteps } from '../components/steps/progress-steps'


export default {
  title: 'Example/ProgressSteps',
  component: ProgressSteps,
}

const Template = (args) => {
  return (
    <ThemeProviders>
      <ProgressSteps {...args} />
    </ThemeProviders>
  )
}

export const progressSteps = Template.bind({})
progressSteps.args = {
  maxSteep: 3,
  value: 2,
}
