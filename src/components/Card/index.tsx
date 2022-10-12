export type CardProps = {
  title: string
  subTitle?: string
  content: string
}

const Card = ({ title, subTitle, content }: CardProps) => (
  <div className="w-60 bg-slate-700 rounded-md flex flex-col gap-2 p-2">
    <h1 className='text-slate-100 text-lg'>{title}</h1>
    {!!subTitle && <h2 className='text-xs font-medium italic'>{subTitle}</h2>}
    <div className='overflow-clip'>{content}</div>
  </div>
)

export default Card