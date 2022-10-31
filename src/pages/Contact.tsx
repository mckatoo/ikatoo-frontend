import Map, { LocalizationType } from '../components/Map'
import { TextContainer } from '../components/TextContainer'

type ContactProps = {
  title: string
  description: string
  localization?: LocalizationType
}

export const Contact = () => {
  const contact: ContactProps = {
    title: 'Entre em contato 😄',
    description: `Estou interessado em oportunidades CLT, mas não descarto nenhum tipo de trabalho desde que me traga oportunidades de aprendizado. No entanto, se você tiver outra solicitação ou pergunta, não hesite em enviar um email. <a href="mailto:mckatoo@gmail.com?Subject=Contato%20pelo%20site">mckatoo@gmail.com</a>`,
    localization: {
      lat: -22.428850083857423,
      lng: -46.830700405308185
    }
  }
  const { description, title, localization } = contact

  return (
    <div className="flex flex-row min-h-fit h-full w-full">
      <div className="flex flex-row items-start ml-4 mt-4">
        <div className="flex h-full w-1/2">
          {
            <TextContainer title={title}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </TextContainer>
          }
        </div>

        {!!localization && (
          <div className="flex h-full w-1/2 mt-20 m-4">
            {
              <Map
                center={localization}
                label={{
                  text: 'Milton Carlos Katoo',
                  className: '-mt-10 bg-slate-700 p-1 rounded',
                  color: 'white'
                }}
              />
            }
          </div>
        )}
      </div>
    </div>
  )
}
