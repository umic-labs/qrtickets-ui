import { LocationOn, EmojiEmotions } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { Event } from "../../../models"
import { H1 } from "../../shared"
import { ImageHero, ItemDescription, Markdown, Subtitle } from "./styles"
import EventIcon from '@mui/icons-material/Event';

interface Props {
  event?: Event
}

export const EventInfo: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()
  const apiUrl = process.env.REACT_APP_API_URL

  return (
    <>
      <ImageHero src={`${apiUrl}${props.event?.thumbnail?.url}`} alt="" />

      <H1>{props.event?.title}</H1>

      <ItemDescription>
        <Subtitle>
          <EventIcon />

          <span>{t('event_info.date_and_time_subtitle')}</span>
        </Subtitle>

        <p><small>{t('event_info.from')}</small> {props.event?.beginAt.toDateString()}</p>

        <p><small>{t('event_info.to')}</small> {props.event?.endAt.toDateString()}</p>

        <p>21h00, horário de Brasília</p>
      </ItemDescription>

      <ItemDescription>
        <Subtitle>
          <LocationOn />

          <span>{t('event_info.location_subtitle')}</span>
        </Subtitle>

        <p>{props.event?.locationTitle}</p>
        <p>{props.event?.locationAddress}</p>

        <p>
          <button>{t('event_info.go_to_map_subtitle')}</button>
        </p>
      </ItemDescription>

      <ItemDescription>
        <Subtitle>
          <EmojiEmotions />

          <span>{t('event_info.about_event_subtitle')}</span>
        </Subtitle>

        <Markdown>
          {props.event?.description || ''}
        </Markdown>
      </ItemDescription>

      <ItemDescription>
        <div>{props.event?.locationCoordinates}</div>

        <p>{props.event?.locationTitle}</p>
        <p>{props.event?.locationAddress}</p>
      </ItemDescription>

      <div>
        <p>{t('event_info.from_price_subtitle')}</p>
        <h2>R$ 99,90</h2>

        <button>{t('event_info.sign_up_button')}</button>
      </div>
    </>
  ) 
}