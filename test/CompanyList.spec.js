import { mount } from '@vue/test-utils';
import CompanyList from '@/components/CompanyList.vue';
import Companies from './mock.companies';

describe('CompanyList.vue', () => {
  it('render component with empty list', () => {
    const wrapper = mount(CompanyList, {
      propsData: {
        items: Companies,
      },
    });
    expect(wrapper.find('.companies-list').exists()).toBe(true);
  });
});