import tw from 'tailwind-styled-components'

export default {
  Container: tw.div`
    h-[calc(100vh-('mt-16'))]
    md:h-screen
    mt-16
    md:mt-0
    overflow-y-auto
  `
}
