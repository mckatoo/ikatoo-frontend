import { CKEditor, CKEditorEventPayload } from 'ckeditor4-react'

import Styles from './styles'

export type EditorProps = {
  placeholder: string
  onChange?: (value: string) => void
  label?: string
  labelColor?: 'black' | 'white'
  initialValue?: string
  disabled?: boolean
  error?: string
  name: string
  tabIndex?: number
}

const TextEditor = ({
  placeholder,
  label,
  labelColor = 'black',
  name,
  initialValue = '',
  error,
  disabled = false,
  tabIndex,
  onChange
}: EditorProps) => {
  const handleOnChange = ({ editor }: CKEditorEventPayload<'change'>) => {
    !!onChange && onChange(editor.getData())
  }

  const config = {
    tabIndex,
    extraPlugins: 'editorplaceholder,emoji',
    editorplaceholder: placeholder,
    applicationTitle: false
  }

  return (
    <Styles.Wrapper disabled={disabled} error={!!error}>
      {!!label && (
        <Styles.Label labelColor={labelColor} htmlFor={name}>
          {label}
        </Styles.Label>
      )}
      <Styles.EditorWrapper>
        <CKEditor
          readOnly={disabled}
          config={config}
          type="classic"
          initData={initialValue}
          onInstanceReady={({ editor }) => console.log('editor', editor)}
          onChange={handleOnChange}
        />
      </Styles.EditorWrapper>
      {!!error && <Styles.Error>{error}</Styles.Error>}
    </Styles.Wrapper>
  )
}

export default TextEditor
