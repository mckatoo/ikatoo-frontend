import tw from 'tailwind-styled-components'

export default {
  Wrapper: tw.div`
    text-gray-500
    w-fit
    h-fit
    flex
    flex-col
    place-items-center
  `,
  Description: tw.span`
    text-sm
    text-gray-500
  `,
  Name: tw.p`
    font-semibold
  `
}
