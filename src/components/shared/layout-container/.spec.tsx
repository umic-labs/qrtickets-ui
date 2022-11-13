import { shallow, ShallowWrapper } from 'enzyme'
import { LayoutContainer } from '.'


describe('LayoutContainer', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(
      <LayoutContainer><></></LayoutContainer>,
    )
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
