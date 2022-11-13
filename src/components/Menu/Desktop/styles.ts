import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const WebkitTextCenter = styled.div`
  text-align: -webkit-center;
`

export default {
  Menu: tw.menu`
    text-center
    w-fit
    z-20
    h-full
    bg-slate-800
    text-gray-500
    flex
    flex-col
    justify-between
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
    `,
  Links: tw.ul`
    list-reset
    border-slate-700
    border-y-2
    divide-y
    divide-slate-700
    font-semibold
  `,
  LinksItem: styled.li`
    a {
      display: block;
      padding: 1rem 2.5rem;
      width: 100%;
    }
  `,
  SocialWrapper: tw.div`
    flex
    flex-row
    justify-around
    py-2
  `,
  SocialLink: tw.a`
    w-6
    text-inherit
  `
}
