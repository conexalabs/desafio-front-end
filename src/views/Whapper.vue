<template>
	<div class="container-fluid">
		<div class="row">
			<div class="container header">
				<div class="row">
					<div class="col-sm center">
						<h1 class="titulo"><i class="fas fa-building"></i> Localizador de Empresas</h1>
					</div>
				</div>
				<div class="row content">
					<div class="col col-lg-3"></div>
					<div class="col-md-auto center">
						<the-mask 
							class="input-localizar"
							v-model="keyword" placeholder="CNPJ..."
							type="text"
							:mask="['##.###.###/####-##']" />
						<button @click="search" class="btn btn-localizar">LOCALIZAR</button>
						<br />
						<div class='msg'>{{message}}</div>
					</div>
					<div class="col col-lg-3"></div>
				</div>
			</div>
		</div>
		<div class="row degrade">
			<div class="container">
				<Content />
			</div>
		</div>
	</div>
</template>

<script>
	import Content from '@/components/Content';
	import Validators from '@/utils/Validators'
	import {TheMask} from 'vue-the-mask'

	export default {
		data(){
			return {
				keyword: "",
				message: ""
			}
		},
		components: {
			Content,
			TheMask
		},
		methods: {
			search(){
				let keyword = this.keyword;
				if(Validators.validateCNPJ(keyword)){
					keyword = keyword.replace(/[^0-9$]+/g, '')
					this.$router.push({ name: 'Search', params: { keyword } });
					this.message = ""
				}else{
					this.message = "Digite um CNPJ válido!"	
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/app.scss';
</style>
