import { shallow, ShallowWrapper } from 'enzyme'
import LayoutPage from '.'


describe('LayoutPage', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(
      <LayoutPage><></></LayoutPage>,
    )
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
