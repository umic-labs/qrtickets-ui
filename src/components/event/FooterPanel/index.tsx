import { useTranslation } from "react-i18next"
import { Ticket } from "../../../models"
import { LayoutContainer } from "../../shared"
import { FooterStyle } from "./styles"

interface Props {
  tickets?: Ticket[]
  onSubmit: Function
}

export const FooterPanel: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()

  return (
    <FooterStyle>
      <LayoutContainer>
        <div>
          <p>{t('event_info.from_price_subtitle')}</p>
          <h2>R$ 99,90</h2>
        </div>

        <button onClick={() => props.onSubmit()}>
          {t('event_info.sign_up_button')}
        </button>
      </LayoutContainer>
    </FooterStyle>
  ) 
}
