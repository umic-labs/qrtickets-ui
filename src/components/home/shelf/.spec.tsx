import { shallow, ShallowWrapper } from 'enzyme'
import faker from 'faker'
import Shelf from '.'


describe('Shelf', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(
      <Shelf
        title={faker.lorem.sentence()}
      >
        <></>
      </Shelf>,
    )
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
