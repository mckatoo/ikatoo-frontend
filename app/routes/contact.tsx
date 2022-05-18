import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import Map from '~/components/Map'
import SideMenu from '~/components/SideMenu'
import { TextContainer } from '~/components/TextContainer'

import { useLoaderData } from '@remix-run/react'

import type { LocalizationType } from '~/components/Map'
import type { FormEvent } from 'react'
type ContactProps = {
  title: string
  description: string
  localization?: LocalizationType
}

export const loader: LoaderFunction = async ({ params }) => {
  const contact: ContactProps = {
    title: 'Entre em contato 😄',
    description: `Estou interessado em oportunidades CLT, mas não descarto nenhum tipo de trabalho desde que me traga oportunidades de aprendizado. No entanto, se você tiver outra solicitação ou pergunta, não hesite em usar o formulário.`,
    localization: {
      lat: -22.428850083857423,
      lng: -46.830700405308185
    }
  }

  return contact
}

export const meta: MetaFunction = () => ({
  title: "Milton Carlos Katoo - Contato"
})

export default () => {
  const { description, title, localization } = useLoaderData<ContactProps>()

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('send message:' + e.target)
  }

  return <div className="flex flex-row min-h-fit h-full w-full">
    <SideMenu />

    <div className='flex flex-row items-start ml-52 mt-4'>
      <div className='flex h-full w-1/2'>
        {
          <TextContainer title={title}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <form onSubmit={sendMessage} className="font-indie_flower text-slate-700 font-bold before:content-['<form>'] after:content-['</form>']">
              <div className='ml-4 flex flex-col gap-4'>
                <div className='flex flex-row gap-4'>
                  <input type="name" id="name" name="name" placeholder='Nome' className="w-full bg-gray-700 font-body rounded border border-gray-300 focus:border-mck_aqua focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500" />

                  <input type="email" id="email" name="email" placeholder='Email' className="w-full bg-gray-700 font-body rounded border border-gray-300 focus:border-mck_aqua focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500" />
                </div>

                <input type="text" id="subject" name="subject" placeholder='Assunto' className="w-full bg-gray-700 font-body rounded border border-gray-300 focus:border-mck_aqua focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500" />

                <textarea id="message" name="message" placeholder='Mensagem' className="w-full bg-gray-700 font-body rounded border border-gray-300 focus:border-mck_aqua focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-500 h-36" />

                <button type='submit' className="inline-flex text-mck_aqua bg-slate-800 border-2 py-2 px-6 focus:outline-none hover:bg-mck_aqua hover:text-slate-800 rounded text-lg font-body justify-center">
                  Enviar Mensagem!
                </button>
              </div>
            </form>
          </TextContainer>
        }
      </div>

      {
        !!localization && (
          <div className='flex h-full w-1/2 mt-20 m-4'>
            {
              <Map center={localization} label={{ text: 'Milton Carlos Katoo', className: '-mt-10 bg-slate-700 p-1 rounded', color: 'white' }} />
            }
          </div>
        )
      }
    </div>
  </div>
}