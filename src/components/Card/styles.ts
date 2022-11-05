import tw from 'tailwind-styled-components'

export default {
  Wrapper: tw.div`
    w-60
    bg-slate-700
    rounded-md
    flex
    flex-col
    gap-2 p-2
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
