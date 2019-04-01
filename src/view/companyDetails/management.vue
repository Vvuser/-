<template>
	<div>
		<div class="Administrative">
			<div class="AdministrativeIcon"></div>
			<span class="Administrativenods">行政许可</span>
		</div>
		<div>
			<el-table :data="tableData" border class="AdministrativeTable">
				<el-table-column prop="date" label="序号" width="69">
				</el-table-column>
				<el-table-column prop="name" label="许可文件编号" width="161">
				</el-table-column>
				<el-table-column prop="address" label="许可文件名称" width="153">
				</el-table-column>
				<el-table-column prop="nav" label="有效期自" width="118">
				</el-table-column>
				<el-table-column prop="box" label="有效期至" width="120">
				</el-table-column>
				<el-table-column prop="book" label="许可机关" width="98">
				</el-table-column>
				<el-table-column prop="adboxk" label="详情" width="80">
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
				<el-table-column prop="originatorTabledate" label="序号" width="70"></el-table-column>
				<el-table-column prop="originatorTablename" label="评价年度" width="96"></el-table-column>
				<el-table-column prop="address" label="纳税人信用级别" width="140"></el-table-column>
				<el-table-column prop="nav" label="纳税人名称" width="210"></el-table-column>
				<el-table-column prop="box" label="纳税人识别号" width="283"></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
						date: '1',
						name: 'A10319301',
						address: '压力容器使用登记',
						nav: '2018-10-10',
						box: '-',
						book: '省质监局',
						adboxk: '详情'
					},
					{
						date: '2',
						name: 'A10319301',
						address: '压力容器使用登记',
						nav: '2018-10-10',
						box: '-',
						book: '省质监局',
						adboxk: '详情'
					},
					{
						date: '3',
						name: 'A10319301',
						address: '压力容器使用登记',
						nav: '2018-10-10',
						box: '-',
						book: '省质监局',
						adboxk: '详情'
					},
					{
						date: '4',
						name: 'A10319301',
						address: '压力容器使用登记',
						nav: '2018-10-10',
						box: '-',
						book: '省质监局',
						adboxk: '详情'
					},
					{
						date: '4',
						name: 'A10319301',
						address: '压力容器使用登记',
						nav: '2018-10-10',
						box: '-',
						book: '省质监局',
						adboxk: '详情'
					}
				],
				tableData1: [{
					originatorTabledate: '1',
					originatorTablename: '2017',
					address: 'A级',
					nav:'武汉科前生物股份有限公司',
					box:'42010172567014'
				},
				{
					originatorTabledate: '1',
					originatorTablename: '2017',
					address: 'A级',
					nav:'武汉科前生物股份有限公司',
					box:'42010172567014'
				}]
			}
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
