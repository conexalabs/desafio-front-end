<template>
	<CompanyList v-if="Object.keys(items).length > 0" :items="items"></CompanyList>
	<div v-else class="row">
		<div class="col-sm">
			<p class="no-companies">
				<img src="../assets/images/no-companies.png" /><br />
				<span>Localize acima a primeira empresa</span>
			</p>
		</div>
	</div>
</template>

<script>
	import Companies from '@/utils/Companies'
	import CompanyList from '@/components/CompanyList';
	export default {
		data(){
			return {
				items: Companies.getCompanies()
			}	
		},
		components: {
			CompanyList
		}
	}
	</script>

	<style scoped lang="scss">
	.no-companies{
		color: white;
		text-align: center;
		margin-top: 130px;
		span{
			margin-top: 20px;
			display: inline-block;
		}
	}
</style>