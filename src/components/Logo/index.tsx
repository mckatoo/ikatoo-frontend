import { Link } from 'react-router-dom'

export type LogoProps = {
  mobileSize?: boolean
  id?: string
  name?: string
  description?: string
}

const Logo = ({ mobileSize = false, name, description }: LogoProps) => {
  return (
    <Link
      to={'/'}
      className="text-gray-500 w-fit h-fit flex flex-col place-items-center"
    >
      {mobileSize ? (
        <svg
          viewBox="0 0 152 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="76" cy="76" r="74" stroke="url(#a)" strokeWidth="4" />
          <path
            d="M81.5 62.5h39a5 5 0 0 1 5 5v17a5 5 0 0 1-5 5H91.543"
            stroke="#EF5321"
            strokeWidth="3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.5 41a6.5 6.5 0 0 0-6.5 6.5v58a6.5 6.5 0 0 0 6.5 6.5h71a6.5 6.5 0 0 0 6.5-6.5v-15h-3v15a3.5 3.5 0 0 1-3.5 3.5h-71a3.5 3.5 0 0 1-3.5-3.5v-58a3.5 3.5 0 0 1 3.5-3.5h71a3.5 3.5 0 0 1 3.5 3.5v14h3v-14a6.5 6.5 0 0 0-6.5-6.5h-71Z"
            fill="#EF5321"
          />
          <circle cx="75" cy="63" r="6" stroke="#EF5321" strokeWidth="3" />
          <circle cx="54" cy="76" r="6" stroke="#EF5321" strokeWidth="3" />
          <path d="M60 75.5h45" stroke="#EF5321" strokeWidth="3" />
          <circle cx="111" cy="76" r="6" stroke="#EF5321" strokeWidth="3" />
          <circle cx="85" cy="90" r="6" stroke="#EF5321" strokeWidth="3" />
          <defs>
            <linearGradient
              id="a"
              x1="152"
              y1="0"
              x2="4.102"
              y2="155.891"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".132" stopColor="#212121" />
              <stop offset="1" stopColor="#3A3A41" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width={120}
          viewBox="0 0 40 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.416.944H.3v15.3h39.116V.944Z"
            stroke=""
            strokeWidth=".028"
          />
          <path
            d="M5.34 3.838v9.512h2.232V9.86h.02l.214-.21 3.234 3.666h2.703L9.257 8.23l4.486-4.392h-2.777L7.57 7.16V3.838h-2.23Z"
            fill="#FF2A2A"
          />
          <path
            d="M3.842 6.664v5.787H2.328V7.827c.308-1.11.939-1.036 1.514-1.163Zm0-2.817v1.768H2.328c-.017-1.98-.379-1.768 1.514-1.768ZM16.064 9.733c-.565 0-.96.073-1.184.217-.224.145-.336.393-.336.745 0 .261.078.47.233.625.155.155.365.232.63.232.4 0 .71-.15.93-.45.221-.302.331-.724.331-1.265v-.104h-.604Zm2.108-.584v3.303h-1.504v-.646a1.824 1.824 0 0 1-.702.589 2.15 2.15 0 0 1-.946.206c-.658 0-1.171-.174-1.54-.522-.365-.348-.548-.833-.548-1.457 0-.675.219-1.173.656-1.493.438-.324 1.115-.486 2.031-.486h1.05V8.39c0-.245-.09-.43-.27-.553-.175-.128-.435-.191-.78-.191-.361 0-.713.046-1.054.14a4.85 4.85 0 0 0-1.06.433V6.927c.335-.137.674-.24 1.019-.305.344-.065.71-.098 1.095-.098.94 0 1.6.191 1.98.574.382.382.573 1.066.573 2.051ZM22.384 5.02v1.644h1.979v1.163h-1.98v2.738c0 .259.063.445.187.558.127.11.337.166.63.166h1.163v1.162h-1.271c-.868 0-1.456-.137-1.762-.413-.307-.279-.46-.794-.46-1.545V7.827h-1.478V6.664h1.478V5.55c.074-.53 1.514-.53 1.514-.53ZM28.373 7.754c-.362 0-.646.16-.853.48-.206.318-.31.76-.31 1.329 0 .568.104 1.013.31 1.333.207.317.491.475.853.475.365 0 .651-.158.858-.475.206-.32.31-.765.31-1.333 0-.569-.104-1.011-.31-1.328-.207-.32-.493-.48-.858-.48Zm-2.677 1.809c0-.934.241-1.673.724-2.217.485-.548 1.136-.822 1.953-.822.82 0 1.471.274 1.953.822.486.544.729 1.283.729 2.217 0 .933-.243 1.674-.729 2.222-.482.544-1.133.816-1.953.816-.817 0-1.468-.272-1.953-.816-.483-.548-.724-1.289-.724-2.222ZM34.745 7.754c-.362 0-.646.16-.853.48-.207.318-.31.76-.31 1.329 0 .568.103 1.013.31 1.333.207.317.49.475.853.475.365 0 .65-.158.858-.475.206-.32.31-.765.31-1.333 0-.569-.104-1.011-.31-1.328-.207-.32-.493-.48-.858-.48Zm-2.677 1.809c0-.934.241-1.673.723-2.217.486-.548 1.137-.822 1.954-.822.82 0 1.47.274 1.953.822.486.544.729 1.283.729 2.217 0 .933-.243 1.674-.729 2.222-.482.544-1.133.816-1.953.816-.817 0-1.468-.272-1.954-.816-.482-.548-.723-1.289-.723-2.222Z"
            fill="#B3B3B3"
          />
        </svg>
      )}
      {!!name && <p className="font-semibold">{name}</p>}
      {!!description && (
        <span className="text-sm text-gray-500">{description}</span>
      )}
    </Link>
  )
}

export default Logo
