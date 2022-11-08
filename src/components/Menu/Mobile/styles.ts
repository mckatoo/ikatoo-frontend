import styled from 'styled-components'
import tw from 'tailwind-styled-components'

type NavigatorProps = {
  $isClosed: boolean
}

const WebkitTextCenter = styled.div`
  text-align: -webkit-center;
`

export default {
  Menu: tw.menu`
    fixed
    text-center
    text-gray-500
    ${(props: NavigatorProps) => (props.$isClosed ? 'h-16' : 'h-full')}
  `,
  MobileBar: tw.div`
    bg-slate-800
    flex
    flex-row
    justify-between
    items-center
    w-screen
  `,
  IconWrapper: tw.div`
    w-12
    h-12
    my-2
    mx-4
    cursor-pointer
  `,
  Navigator: tw.div`
    h-[calc(100vh-4rem)]
    w-screen
    bg-slate-800
    flex
    flex-col
    transition-opacity
    duration-300
    ${(props: NavigatorProps) =>
      props.$isClosed
        ? 'opacity-0 pointer-events-none z-0'
        : 'opacity-100 pointer-events-auto'}
  `,
  LogoWrapper: tw(WebkitTextCenter)`
    z-30
    flex
    justify-center
    px-4
    py-8
    bg-mck_black
  `,
  LinksWrapper: tw.nav`
    text-lg
    h-full
    flex
    flex-col
    justify-center
    -mt-4
  `,
  Links: tw.ul`
    list-reset
    border-slate-700
    border-y-2
    divide-y
    divide-slate-700
    font-semibold
  `,
  LinksItem: tw.li`
    py-4
    px-10
    w-full
  `,
  SocialWrapper: tw.div`
    flex
    flex-row
    justify-around
    py-2
    absolute
    bottom-0
    w-full
  `,
  SocialLink: tw.a`
    w-6
    text-inherit
  `
}
