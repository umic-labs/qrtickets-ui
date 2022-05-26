import { shallow, ShallowWrapper } from 'enzyme'
import BookItem from '.'
import { mockVolume } from '../../../models/mocks'


describe('BookItem', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(
      <BookItem volume={mockVolume()} />,
    )
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
