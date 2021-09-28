import {styled} from '@mui/material/styles'
import {Badge, Avatar} from '@mui/material'

const StyledBadge = styled(Badge)(({theme}) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'black',
    color: 'black',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

const OnlineBadge = styled(StyledBadge)(({theme}) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'var(--online)',
    color: 'var(--online)',
  },
}))

const OfflineBadge = styled(StyledBadge)(({theme}) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'var(--offline)',
    color: 'var(--offline)',
  },
}))

export default function OnlineIndicator({online = false, children = <Avatar src='' alt='' />}) {
  return online ? (
    <OnlineBadge
      variant='dot'
      overlap='circular'
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
      {children}
    </OnlineBadge>
  ) : (
    <OfflineBadge
      variant='dot'
      overlap='circular'
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
      {children}
    </OfflineBadge>
  )
}
