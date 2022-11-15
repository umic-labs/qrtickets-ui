import { LocationOn, EmojiEmotions } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { Event } from '../../../models'
import { H1, H6 } from '../../shared'
import {
  ImageHero,
  ItemDescription,
  Markdown,
  Subtitle,
  Wrapper,
} from './styles'
import EventIcon from '@mui/icons-material/Event'

interface Props {
  event?: Event
}

export const EventInfo: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()
  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <Wrapper>
      <ImageHero src={`${apiUrl}${props.event?.thumbnail?.url}`} alt="" />

      <H1>{props.event?.title}</H1>

      <ItemDescription>
        <Subtitle>
          <EventIcon />

          <span>{t('event_info.date_and_time_subtitle')}</span>
        </Subtitle>

        <p>
          <small>{t('event_info.from')} </small>
          {props.event?.beginAt.toLocaleDateString('pt-BR', {
            dateStyle: 'long',
          })}
        </p>

        <p>
          <small>{t('event_info.to')} </small>
          {props.event?.endAt.toLocaleDateString('pt-BR', {
            dateStyle: 'long',
          })}
        </p>

        <p>
          <small>{t('event_info.starts_at')} </small>
          {props.event?.beginAt.toLocaleTimeString('pt-BR', {
            timeStyle: 'short',
          })}
        </p>
      </ItemDescription>

      <ItemDescription>
        <Subtitle>
          <LocationOn />

          <span>{t('event_info.location_subtitle')}</span>
        </Subtitle>

        <div>
          <H6>{props.event?.locationTitle}</H6>
          <p>{props.event?.locationAddress}</p>
        </div>
      </ItemDescription>

      <ItemDescription>
        <Subtitle>
          <EmojiEmotions />

          <span>{t('event_info.about_event_subtitle')}</span>
        </Subtitle>

        <Markdown>{props.event?.description || ''}</Markdown>
      </ItemDescription>
    </Wrapper>
  )
}
