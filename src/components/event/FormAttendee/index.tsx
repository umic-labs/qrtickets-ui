import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Divider, FormControl, TextField } from '@mui/material'
import { useState } from 'react'
import { H3 } from '../../shared'
import { Attendee } from '../../../models'

interface Props {
  onChange: (attendee: Attendee) => void
  id: string
  title: string
}

export const FormAttendee: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  useEffect(() => {
    props.onChange({ name, email, phone, id: props.id })
  }, [name, email, phone])
  

  return (
    <>
      <H3 style={{ margin: '16px 0'}}>{props.id} - {props.title}</H3>

      <FormControl fullWidth>
        <TextField
          label="Nome"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: '8px'}}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: '8px ' }}
        />

        <TextField
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ marginBottom: '8px ' }}
        />

      </FormControl>

      <Divider sx={{ margin: '16px 0' }}/>
    </>
  )
}
