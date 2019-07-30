import { shallowMount } from '@vue/test-utils';
import BlankState from '@/components/BlankState.vue';

describe('BlankState.vue', () => {
  it('render component', () => {
    const wrapper = shallowMount(BlankState);
    expect(wrapper.find('.blank-state').exists()).toBe(true);
    expect(wrapper.find('.blank-state').text()).toEqual('Localize acima a primeira empresa');
  });
});
