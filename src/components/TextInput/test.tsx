import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TextInput from '.'

describe('TextInput', () => {
  it('should be able to render the text input', () => {
    const { getByRole } = render(<TextInput />)

    expect(getByRole('textbox')).toBeInTheDocument()
  })
})
