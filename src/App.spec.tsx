import App from './App'
import { shallow, ShallowWrapper } from 'enzyme'

describe('App', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(<App />)
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
