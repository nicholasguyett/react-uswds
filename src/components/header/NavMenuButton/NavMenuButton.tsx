import React from 'react'

type NavMenuButtonProps = {
  label: React.ReactNode
}

export const NavMenuButton = ({
  label,
  onClick,
  ...buttonProps
}: NavMenuButtonProps &
  JSX.IntrinsicElements['button']): React.ReactElement => {
  return (
    <button
      className="usa-menu-btn"
      onClick={onClick}
      data-testid="navMenuButton"
      {...buttonProps}
      type="button">
      {label}
    </button>
  )
}
