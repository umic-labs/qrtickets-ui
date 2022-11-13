import { faker } from '@faker-js/faker'
import { Event } from '../event'

export const mockEvent = (): Event => {
  return {
    beginAt: faker.date.future(),
    description: faker.lorem.paragraphs(),
    endAt: faker.date.future(),
    id: faker.datatype.number(),
    locationAddress: faker.address.street(),
    locationCoordinates: `${faker.address.latitude()}, ${faker.address.longitude()}`,
    locationTitle: faker.company.companyName(),
    title: faker.lorem.sentence(),
    tickets: []
  }
}
