import { shallowMount } from '@vue/test-utils';

import Home from '@/screens/Home.vue';
import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';
import List from '@/components/List.vue';

describe('Home.vue', () => {
  it('render component', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Search).exists()).toBe(true);
    expect(wrapper.find(List).exists()).toBe(true);
  });

  it('should be started not have companies', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.vm.list).toEqual(null);
  });

  it('should be get cnpj in api', async () => {
    const wrapper = shallowMount(Home);
    const SearchComponent = shallowMount(Search);
    SearchComponent.setProps({ search: wrapper.vm.search });
    SearchComponent.setData({ cnpj: '20.948.195/0001-03' });
  });
});
