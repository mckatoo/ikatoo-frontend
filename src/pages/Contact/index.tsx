import Map from '../../components/Map'
import { TextContainer } from '../../components/TextContainer'
import mock from './mock'
import Styles from './styles'

export const Contact = () => {
  const contact = mock
  const { description, title, localization } = contact

  return (
    <Styles.Wrapper>
      <Styles.Description>
        {
          <TextContainer title={title}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </TextContainer>
        }
      </Styles.Description>

      {!!localization && (
        <Map
          center={localization}
          label={{
            text: 'Milton Carlos Katoo',
            className: '-mt-10 bg-slate-700 p-1 rounded',
            color: 'white'
          }}
        />
      )}
    </Styles.Wrapper>
  )
}
