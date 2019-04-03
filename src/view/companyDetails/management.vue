<template>
	<div>
		<div class="Administrative">
			<div class="AdministrativeIcon"></div>
			<span class="Administrativenods">行政许可</span>
		</div>
		<div>
			<el-table :data="tableData" border class="AdministrativeTable">
				<el-table-column prop="itemId" label="序号" width="69">
				</el-table-column>
				<el-table-column prop="number" label="许可文件编号" width="161">
				</el-table-column>
				<el-table-column prop="name" label="许可文件名称" width="153">
				</el-table-column>
				<el-table-column prop="startDate" label="有效期自" width="118">
				</el-table-column>
				<el-table-column prop="endDate" label="有效期至" width="120">
				</el-table-column>
				<el-table-column prop="department" label="许可机关" width="98">
				</el-table-column>
				<el-table-column label="详情" width="80">
					<template>详情</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="FinanceInformation">
			<div class="FinanceInformationIcon"></div>
			<span class="FinanceInformationKl">融资信息</span>
			<br>
			<span class="FinanceInformationInformation">暂无信息</span>
		</div>
		<div class="SpotCheck">
			<div class="SpotCheckIcon"></div>
			<span class="SpotCheckKl">抽查检查</span>
			<br>
			<span class="SpotCheckInformation">暂无信息</span>
		</div>
		<div class="creditRating">
			<div class="creditRatingIcon"></div>
			<span class="creditRatingKl">税务评级</span>
		</div>
		<div>
			<el-table :data="tableData1" border class="creditRatingTable">
				<el-table-column type="index" label="序号" width="70"></el-table-column>
				<el-table-column prop="year" label="评价年度" width="96"></el-table-column>
				<el-table-column prop="grade" label="纳税人信用级别" width="140"></el-table-column>
				<el-table-column prop="name" label="纳税人名称" width="210"></el-table-column>
				<el-table-column prop="credit_no" label="纳税人识别号" width="283"></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				tableData1: [],
				credit_no: 0,
				name: ""
			}
		},
		methods:{
			// 获取行政许可
			init() {
				let id = sessionStorage.getItem("enterpriseId")
				this.$post('/company/invoke',{
					url: '/administrativeLicense/getAdministrativeLicenseListById',
					id: "fc71e8a5-0742-4a14-af0a-7e3c8ceff426"
				}).then(data => {
				  console.log(data)
				  this.tableData = data.data.items
				}).catch(error => {
				  console.log(1)
				})

				this.$post('/company/invoke',{
					url: '/creditgrade/getCreditGradeById',
					id: "22e2791d-d5cf-48ce-abbf-52937fd89b25"
				}).then(data => {
				  console.log(data)
				  this.tableData1 = data.data.grade_list
				  this.tableData1 = this.tableData1.map(el => {
					  el.name = data.data.name
					  el.credit_no = data.data.credit_no
					  return el
				  })
				  console.log(this.tableData1)
				}).catch(error => {
				  console.log(error)
				})
			}
		},
		created() {
			this.init()
		}
	}
</script>

<style scoped>
	.Administrative {
		margin-left: 30px;
		margin-top: 20px;
	}

	.AdministrativeIcon {
		display: inline-block;
		width: 5px;
		margin-right: -1px;
		height: 14px;
		background-color: #557bf7;
		transform: translateY(1px);
	}

	.Administrativenods {
		font-weight: bold;
		color: #838895;
	}

	.AdministrativeTable {
		width: 800px;

		margin-left: 30px;
		margin-top: 20px;
	}

	.FinanceInformation {
		margin-top: 20px;
		margin-left: 30px;
	}

	.FinanceInformationIcon {
		display: inline-block;
		width: 5px;
		margin-right: -1px;
		height: 14px;
		background-color: #557bf7;
		transform: translateY(1px);
	}

	.FinanceInformationKl {
		font-weight: bold;
		color: #838895;
	}

	.FinanceInformationInformation {}

	.SpotCheck {
		margin-top: 20px;
		margin-left: 30px;
	}

	.SpotCheckIcon {
		display: inline-block;
		width: 5px;
		margin-right: -1px;
		height: 14px;
		background-color: #557bf7;
		transform: translateY(1px);
	}

	.SpotCheckKl {
		font-weight: bold;
		color: #838895;
	}

	.SpotCheckInformation {}

	.creditRating {
		margin-top: 20px;
		margin-left: 30px;
	}

	.creditRatingIcon {
		display: inline-block;
		width: 5px;
		margin-right: -1px;
		height: 14px;
		background-color: #557bf7;
		transform: translateY(1px);
	}

	.creditRatingKl {
		font-weight: bold;
		color: #838895;
	}

	.creditRatingTable {
		width: 800px;
		margin-left: 30px;
		margin-top: 20px;
	}
</style>
