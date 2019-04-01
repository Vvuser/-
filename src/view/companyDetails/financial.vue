<template>
	<div>
		<div class="FinancialInformation">
			<div class="FinancialInformationIcon"></div>
			<span class="FinancialInformations">财务信息</span>
		</div>
		<div>
			<table class="FinancialInformationTable">
				<tr>
					<th class="FinancialInformationTableths">年份</th>
					<th class="FinancialInformationTabletbs"></th>
					<th class="FinancialInformationTabletns">营业总收入</th>
					<th class="FinancialInformationTabletas"></th>
				</tr>
				<tr>
					<th class="FinancialInformationTableths">负债总额</th>
					<th class="FinancialInformationTabletbs"></th>
					<th class="FinancialInformationTabletns">净利润</th>
					<th class="FinancialInformationTabletas"></th>
				</tr>
				<tr>
					<th class="FinancialInformationTableths">所有者权益合计</th>
					<th class="FinancialInformationTabletbs"></th>
					<th class="FinancialInformationTabletns">利润总额</th>
					<th class="FinancialInformationTabletas"></th>
				</tr>
				<tr>
					<th class="FinancialInformationTableths">纳税总额</th>
					<th class="FinancialInformationTabletbs"></th>
					<th class="FinancialInformationTabletns">资产总额</th>
					<th class="FinancialInformationTabletas"></th>
				</tr>
				<tr>
					<th class="FinancialInformationTableths">主营业乌收入</th>
					<th class="FinancialInformationTabletbs"></th>
					<th class="FinancialInformationTabletns"></th>
					<th class="FinancialInformationTabletas"></th>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
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
