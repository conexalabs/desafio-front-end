import { shallowMount } from '@vue/test-utils';
import List from '@/components/List.vue';
import Companies from '../../mocks/companies';

describe('List.vue', () => {
  it('render component', () => {
    const wrapper = shallowMount(List, {
      propsData: {
        companies: Companies,
      },
    });
    expect(wrapper.find('.list').exists()).toBe(true);
  });

  it('render blank-state', () => {
    const wrapper = shallowMount(List);
    expect(wrapper.find('.list').exists()).toBe(false);
  });
});
