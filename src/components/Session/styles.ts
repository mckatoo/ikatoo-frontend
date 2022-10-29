import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  fixed
  right-0
`

export const Menu = tw.button`
  bg-mck_red
  text-white
  relative
  flex
  items-center
  gap-2
  p-2
  rounded-bl-xl
  border-white
  border-b-2
  border-l-2
  shadow
  z-50
`

type ItensProps = {
  $hidden: boolean
}

export const Itens = tw.div`
  ${(h: ItensProps) => (h.$hidden ? 'hidden' : '')}
`

export const Item = tw.span`
  flex-col
  text-end
  px-3
  py-2
  pt-4
  -mt-2
  z-40
  rounded-bl-xl
  bg-white
  text-mck_red
  cursor-pointer
  hover:bg-gray-200
  flex
  w-full
  items-end
`

export const ImageWrapper = tw.div`
  h-8
`

export const Image = tw.img`
  rounded-full
  h-8
`
