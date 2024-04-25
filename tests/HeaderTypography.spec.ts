import HeaderTypography from '@/components/HeaderTypography.vue'
import { mount } from '@vue/test-utils'

describe('HeaderTypography', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderTypography, { props: { msg: 'Hello Vitest' } })

    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
