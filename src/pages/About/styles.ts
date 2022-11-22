import tw from 'tailwind-styled-components'

export default {
  Wrapper: tw.div`
    flex
    flex-col
    md:flex-row
    md:items-start
    ml-4
    pr-4
    md:pt-4
  `,
  Text: tw.div`
    flex
    flex-row
    md:w-full
  `,
  Skills: tw.div`
    flex
    md:w-full
    h-screen
    items-center
    justify-center
  `,
  ImageWrapper: tw.div`
    flex
    md:w-1/2
    justify-center
  `
}
