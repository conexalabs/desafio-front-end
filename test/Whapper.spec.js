import { mount } from '@vue/test-utils';
import Whapper from '@/views/Whapper.vue';

describe('Whapper.vue', () => {
  it('Render component', () => {
    const wrapper = mount(Whapper);
    const Input = wrapper.find('.input-localizar');
    const Button = wrapper.find('.btn-localizar');
    expect(Input.exists()).toBe(true);
    expect(Button.exists()).toBe(true);
  });
});

describe('Whapper.vue', () => {
  it('Sent a not valid cnpj', () => {
      const wrapper = mount(Whapper);
      const Input = wrapper.find('.input-localizar');
      Input.setValue('12345');
      wrapper.find('.btn-localizar').trigger('click');
      expect(wrapper.find('.msg').text()).toBe('Digite um CNPJ válido!');
  });
});

describe('Whapper.vue', () => {
  it('Sent with input empty', () => {
      const wrapper = mount(Whapper);
      wrapper.find('.btn-localizar').trigger('click');
      expect(wrapper.find('.msg').text()).toBe('Digite um CNPJ válido!');
  });
});