import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('Search.vue', () => {
  it('render component', () => {
    const wrapper = shallowMount(Search, {
      propsData: {
        loading: false,
      },
    });
    const Input = wrapper.find('input[type="text"]');
    const Button = wrapper.find('button[type="submit"]');
    const Button2 = wrapper.find('button[type="text"]');

    expect(Input.exists()).toBe(true);
    expect(Button.exists()).toBe(true);
    expect(Button2.exists()).toBe(false);
  });

  it('shoud be button loading', () => {
    const wrapper = shallowMount(Search, {
      propsData: {
        loading: true,
      },
    });
    expect(wrapper.find('button[type="text"]').exists()).toBe(true);
  });

  it('shoud be form submitted without cnpj', () => {
    const wrapper = shallowMount(Search, {
      propsData: {
        loading: true,
      },
    });

    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.vm.errors.message).toBe('CNPJ inválido');
  });

  it('shoud be form submitted without cnpj', () => {
    const wrapper = shallowMount(Search, {
      propsData: {
        loading: true,
      },
    });

    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.vm.errors.message).toBe('CNPJ inválido');
    expect(wrapper.find('.errors').text()).toBe('CNPJ inválido');
  });

  it('shoud be form submitted not valid cnpj', () => {
    const wrapper = shallowMount(Search, {
      propsData: {
        loading: true,
      },
    });

    const Input = wrapper.find('input[type="text"]');
    Input.setValue('123456');
    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.vm.errors.message).toBe('CNPJ inválido');
    expect(wrapper.find('.errors').text()).toBe('CNPJ inválido');
  });

  it('shoud be form submitted valid cnpj', () => {
    const wrapper = shallowMount(Search, {
      propsData: {
        search() {
          return null;
        },
        loading: true,
      },
    });

    const Input = wrapper.find('input[type="text"]');
    Input.setValue('20.948.195/0001-03');
    wrapper.find('form').trigger('submit.prevent');
  });
});
