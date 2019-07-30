import { shallowMount } from '@vue/test-utils';
import CompanyCard from '@/components/CompanyCard.vue';
import Companies from '../../mocks/companies';

describe('CompanyCard.vue', () => {
  it('render component', () => {
    const wrapper = shallowMount(CompanyCard, {
      propsData: {
        company: Companies[0],
      },
    });
    expect(wrapper.props().company).toBe(Companies[0]);
  });

  it('should be render titles in component', () => {
    const wrapper = shallowMount(CompanyCard, {
      propsData: {
        company: Companies[0],
      },
    });

    expect(wrapper.find('.button-back').exists()).toBe(false);
    expect(wrapper.find('li.name .title').text()).toEqual(Companies[0].nome);
    expect(wrapper.find('li.cnpj .title').text()).toEqual(Companies[0].cnpj);
    expect(wrapper.find('li.endereco .title').text()).toEqual(Companies[0].bairro);
  });

  it('should be donn render button back in component', () => {
    const wrapper = shallowMount(CompanyCard, {
      propsData: {
        company: Companies[0],
      },
    });

    expect(wrapper.find('.button-back').exists()).toBe(false);
  });

  it('should be render button back in component', () => {
    const wrapper = shallowMount(CompanyCard, {
      propsData: {
        company: Companies[0],
        buttonBack: true,
      },
    });
    expect(wrapper.find('.button-back').exists()).toBe(true);
  });
});
