export interface Preference {
  additional_info: string
  auto_return: string
  back_urls: BackUrls
  binary_mode: boolean
  client_id: string
  collector_id: number
  coupon_code: string
  coupon_labels: string
  date_created: string
  date_of_expiration: string
  expiration_date_from: string
  expiration_date_to: string
  expires: boolean
  external_reference: string
  id: string
  init_point: string
  internal_metadata: string
  items: Item[]
  marketplace: string
  marketplace_fee: number
  metadata: unknown
  notification_url: string
  operation_type: string
  payer: Payer
  payment_methods: PaymentMethods
  processing_modes: string
  product_id: string
  redirect_urls: RedirectUrls
  sandbox_init_point: string
  site_id: string
  shipments: Shipments
  total_amount: string
  last_updated: string
}

interface BackUrls {
  failure: string
  pending: string
  success: string
}

interface Item {
  id: string
  category_id: string
  currency_id: string
  description: string
  title: string
  quantity: number
  unit_price: number
}


interface Payer {
  phone: Phone
  address: Address
  email: string
  identification: Identification
  name: string
  surname: string
  date_created: string
  last_purchase: string
}

interface Phone {
  area_code: string
  number: string
}

interface Address {
  zip_code: string
  street_name: string
  street_number: string
}

interface Identification {
  number: string
  type: string
}

interface PaymentMethods {
  default_card_id: string
  default_payment_method_id: string
  excluded_payment_methods: ExcludedPaymentMethod[]
  excluded_payment_types: ExcludedPaymentType[]
  installments: string
  default_installments: string
}

interface ExcludedPaymentMethod {
  id: string
}

interface ExcludedPaymentType {
  id: string
}

interface RedirectUrls {
  failure: string
  pending: string
  success: string
}

interface Shipments {
  default_shipping_method: string
  receiver_address: ReceiverAddress
}

interface ReceiverAddress {
  zip_code: string
  street_name: string
  street_number: string
  floor: string
  apartment: string
  city_name: string
  state_name: string
  country_name: string
}
