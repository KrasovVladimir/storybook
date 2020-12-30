
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { RoleBadge } from '../components/role-badge'


export default {
  title: 'Example/RoleBadge',
  component: RoleBadge,
}

const Template = (args) => {
  return (
    <ThemeProviders>
      <RoleBadge {...args} />
    </ThemeProviders>
  )
}

export const roleBadge = Template.bind({})
roleBadge.args = {
  isActive: false,
  role: {
    color: '#ff0000',
    name: 'Role',
  },
  onEditRole: () => {},
  onDeleteRole: () => {},
}
