import { shallow, ShallowWrapper } from 'enzyme'
import Logo from '.'

describe('Logo', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(<Logo />)
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
