<template>
	<div>
		<div class="FinancialInformation" v-show="showFlag.indexOf('6-1')>-1">
			<div class="FinancialInformationIcon"></div>
			<span class="FinancialInformations">财务信息</span>
		</div>
		<div v-show="showFlag.indexOf('6-1')>-1">
			<table class="FinancialInformationTable">
				<tr>
					<th class="FinancialInformationTableths">年份</th>
					<th class="FinancialInformationTabletbs">{{obj.year}}</th>
					<th class="FinancialInformationTabletns">营业总收入</th>
					<th class="FinancialInformationTabletas">{{obj.sale_income}}</th>
				</tr>
				<tr>
					<th class="FinancialInformationTableths">负债总额</th>
					<th class="FinancialInformationTabletbs">{{obj.debit_amount}}</th>
					<th class="FinancialInformationTabletns">净利润</th>
					<th class="FinancialInformationTabletas">{{obj.net_amount}}</th>
				</tr>
				<tr>
					<th class="FinancialInformationTableths">所有者权益合计</th>
					<th class="FinancialInformationTabletbs">{{obj.profit_reta}}</th>
					<th class="FinancialInformationTabletns">利润总额</th>
					<th class="FinancialInformationTabletas">{{obj.profit_total}}</th>
				</tr>
				<tr>
					<th class="FinancialInformationTableths">纳税总额</th>
					<th class="FinancialInformationTabletbs">{{obj.tax_total}}</th>
					<th class="FinancialInformationTabletns">资产总额</th>
					<th class="FinancialInformationTabletas">{{obj.total_equity}}</th>
				</tr>
				<tr>
					<th class="FinancialInformationTableths">主营业务收入</th>
					<th class="FinancialInformationTabletbs">{{obj.serv_fare_income}}</th>
					<th class="FinancialInformationTabletns"></th>
					<th class="FinancialInformationTabletas"></th>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				obj:{}
			}
		},
		props:{
			showFlag:{
				default(){
					return ['6-1']
				}
			}
		},
		methods:{
			// 获取财务信息
			getFinacilcalMessage() {
				let id = sessionStorage.getItem("enterpriseId")
				this.$post('/company/invoke',{
					url: '/reports/getYearIncomeById',
					id: sessionStorage.getItem("enterpriseId") || ""
				}).then(data => {
				  console.log(data)
				  this.obj = data.data || {}
				}).catch(error => {
				  console.log(1)
				})
			}
		},
		created() {
			this.getFinacilcalMessage()
		}
	}
</script>

<style scoped>
	.FinancialInformationTabletbs,.FinancialInformationTabletas{
		color: #b6b9c1;
	}
	.FinancialInformation {
		margin-top: 20px;
		margin-left: 30px;
	}

	.FinancialInformationIcon {
		display: inline-block;
		width: 5px;
		margin-right: -1px;
		height: 14px;
		background-color: #557bf7;
		transform: translateY(1px);
	}

	.FinancialInformations {
		font-weight: bold;
		color: #838895;
	}

	.FinancialInformationTable {
		width: 800px;
		height: 267px;
		margin-left: 30px;
		margin-top: 20px;
	}
	.FinancialInformationTableths{
		width: 140px;
		border: 1px solid #ececf5;
		background: #fcfcff;
		color: #b6b9c1;
	}
	.FinancialInformationTabletbs{
		width: 262px;
		border: 1px solid #ececf5;
	}
	.FinancialInformationTabletns{
		width: 110px;
		border: 1px solid #ececf5;
		background: #fcfcff;
		color: #b6b9c1;
	}
	.FinancialInformationTabletas{
		width: 289px;
		border: 1px solid #ececf5;
	}
</style>
