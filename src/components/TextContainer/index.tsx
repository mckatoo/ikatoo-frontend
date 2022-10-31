type BodyContainerProps = {
  title: string
  children: React.ReactNode
}

export const TextContainer = ({ title, children }: BodyContainerProps) => (
  <div className="flex flex-col">
    <div className="font-indie_flower text-slate-700 font-bold before:content-['<html>'] after:content-['</html>']">
      <div className="before:content-['<body>'] after:content-['</body>'] ml-4">
        <div className="before:content-['<header>'] after:content-['</header>'] ml-4 mb-4 flex flex-col">
          <span
            aria-label={title}
            className="ml-4 text-5xl font-body text-mck_aqua"
          >
            {title}
          </span>
        </div>
        <div className="before:content-['<main>'] after:content-['</main>'] ml-4">
          <div className="ml-4 text-gray-200 mb-2 font-body font-normal">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
)
