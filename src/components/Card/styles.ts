import tw from 'tailwind-styled-components'

export default {
  Wrapper: tw.div`
    bg-white
    shadow-md
    border
    border-gray-200
    rounded-lg
    max-w-sm
    dark:bg-gray-800
    dark:border-gray-700
  `,
  Image: tw.img`
    rounded-t-lg
  `,
  ContentWrapper: tw.div`
    p-5
  `,
  Title: tw.h1`
    text-slate-100
    text-lg
  `,
  Subtitle: tw.h2`
    text-xs
    font-medium
    italic
  `,
  Content: tw.div`
    overflow-clip
  `
}
