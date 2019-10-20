
import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import CompanyList from '@/components/CompanyList.vue';
import Companies from './mock.companies';

describe('Home.vue', () => {
  it('render component whitout data', () => {
    const wrapper = mount(Home);
    expect(wrapper.find('.no-companies').exists()).toBe(true);
  });
});

describe('Home.vue', () => {
  it('render component whit data', () => {
    const wrapper = mount(Home)
    wrapper.setData({items: Companies})
    expect(wrapper.find(CompanyList).exists()).toBe(true);
  });
});