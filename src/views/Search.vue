<template>
		<CompanyList v-if="!carregado" :items="items"></CompanyList>
		<div v-else class="row area-loading">
		<div class="col-sm">
			<span class="msg">{{msg}}</span>
		</div>
	</div>
</template>

<script>
	import Services from '@/utils/Services';
	import Companies from '@/utils/Companies'
	import CompanyList from '@/components/CompanyList';

	export default {
		data(){
			return {
				items: [],
				carregado: false,
				msg: ""
			}
		},
		components: {
			CompanyList
		},
		props: {
      keyword: {
        type: String
      }
		},
		mounted(){
			this.search(this.keyword);
		},
		beforeRouteUpdate(to, from, next){
			let keyword = to.params.keyword;
			this.search(keyword);
      next();
		},
		methods:{
			search(keyword){
				this.carregado = true;
				this.msg = "Carregando..."
				let promise = Services.getByCNPJ(keyword);
				promise.then((response)=>{
					this.carregado = false;
					if(response){
						this.items = [response];
						Companies.addCompany(response)
						this.msg = "Nenhum resultado encontrado."
					}
				});
				promise.catch(()=>{
					this.msg = "Erro inesperado."
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
  .area-loading{
    &{
      text-align: center;
    }
    .msg{
			color: white !important;
			margin-top: 130px;
			display: inline-block;
    }
  }
</style>