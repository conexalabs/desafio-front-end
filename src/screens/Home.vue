<template>
  <div>
    <Header>
      <Search :search="search" :loading="loading"></Search>
    </Header>
    <List :companies="list"></List>
  </div>
</template>

<script>
import api from '../services/api';
import store from '../services/store';
import Header from '../components/Header.vue';
import Search from '../components/Search.vue';
import List from '../components/List.vue';

export default {
  name: 'Home',
  data() {
    return {
      list: [],
      loading: false,
    };
  },
  components: {
    Header,
    Search,
    List,
  },
  mounted() {
    this.list = store.all();
  },

  methods: {
    async search({ cnpj }) {
      const notification = (message, type) => {
        this.$toasted.show(message, { type });
      };

      try {
        this.loading = true;
        if (store.get(cnpj)) {
          notification('CNPJ já cadastrado', 'warning');
        } else {
          const result = await api.get(cnpj);
          store.set(result.data);
          this.list = store.all();
          notification('Cadastrado com sucesso o CNPJ', 'success');
        }
      } catch (e) {
        notification('Ocorreu algum error ao buscar o CNPJ', 'error');
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
