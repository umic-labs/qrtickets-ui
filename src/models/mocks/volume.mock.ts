import faker from 'faker'
import { Volume } from '../volume'

export const mockVolume = (): Volume => {
  return {
    kind: faker.lorem.word(),
    id: faker.lorem.word(),
    etag: faker.lorem.word(),
    selfLink: faker.lorem.word(),
    volumeInfo: {
      title: faker.lorem.words(4),
      subtitle: faker.lorem.word(),
      publishedDate: faker.lorem.word(),
      industryIdentifiers: [
        {
          type: faker.lorem.word(),
          identifier: faker.lorem.word(),
        },
      ],
      readingModes: {
        text: faker.datatype.boolean(),
        image: faker.datatype.boolean(),
      },
      pageCount: faker.datatype.number(),
      printType: faker.lorem.word(),
      categories: [faker.lorem.word()],
      maturityRating: faker.lorem.word(),
      allowAnonLogging: faker.datatype.boolean(),
      contentVersion: faker.lorem.word(),
      panelizationSummary: {
        containsEpubBubbles: faker.datatype.boolean(),
        containsImageBubbles: faker.datatype.boolean(),
      },
      imageLinks: {
        smallThumbnail: faker.system.commonFileName(),
        thumbnail: faker.image.image(),
      },
      language: faker.lorem.word(),
      previewLink: faker.lorem.word(),
      infoLink: faker.lorem.word(),
      canonicalVolumeLink: faker.lorem.word(),
    },
    saleInfo: {
      country: faker.lorem.word(),
      saleability: faker.lorem.word(),
      isEbook: faker.datatype.boolean(),
    },
    accessInfo: {
      country: faker.lorem.word(),
      viewability: faker.lorem.word(),
      embeddable: faker.datatype.boolean(),
      publicDomain: faker.datatype.boolean(),
      textToSpeechPermission: faker.lorem.word(),
      epub: {
        isAvailable: faker.datatype.boolean(),
      },
      pdf: {
        isAvailable: faker.datatype.boolean(),
      },
      webReaderLink: faker.lorem.word(),
      accessViewStatus: faker.lorem.word(),
      quoteSharingAllowed: faker.datatype.boolean(),
    },
    searchInfo: {
      textSnippet: faker.lorem.word(),
    },
  }
}
