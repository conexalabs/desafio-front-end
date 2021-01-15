import Vue from 'vue';
import DefaultPage from '@/views/DefaultPage';
import { expect } from 'chai';

describe('DefaultPage.vue', () => {
  it(`should render DefaultPage`, () => {
    const Constructor = Vue.extend(DefaultPage);
    const comp = new Constructor().$mount();

    const btnLocalizar = comp.$el.querySelectorAll('.btn-localizar').length;
    const iptLocalizar = comp.$el.querySelectorAll('.input-localizar').length;

    expect(btnLocalizar).to.equal(1)
    expect(iptLocalizar).to.equal(1)
  });
});