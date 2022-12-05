import React, { useEffect } from 'react'
import { Divider, FormControl, TextField } from '@mui/material'
import { useState } from 'react'
import { H3 } from '../../shared'
import { Attendee, Ticket } from '../../../models'

interface Props {
  onChange: (attendee: Attendee) => void
  uid: string
  ticket: Ticket
}

export const FormAttendee: React.FC<Props> = (props: Props): JSX.Element => {
  const [city, setCity] = useState<string>('')
  const [church, setChurch] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  useEffect(() => {
    props.onChange({
      name, phone, church, city, uid: props.uid,
      ticket: String(props.ticket.id),
    })
  }, [name, phone, church, city])
  

  return (
    <>
      <H3 style={{ margin: '16px 0'}}>{props.ticket.title}</H3>

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
          label="Telefone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ marginBottom: '8px ' }}
        />

        <TextField
          id="outlined-basic"
          label="Cidade"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{ marginBottom: '8px ' }}
        />

        <TextField
          id="outlined-basic"
          label="Igreja"
          variant="outlined"
          value={church}
          onChange={(e) => setChurch(e.target.value)}
          sx={{ marginBottom: '8px ' }}
        />

      </FormControl>

      <Divider sx={{ margin: '16px 0' }}/>
    </>
  )
}
