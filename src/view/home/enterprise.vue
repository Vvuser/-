<template>
	<div>
		<div class="entepriseheart">
      <span class="enterpriseSc"
			v-for="(item,index) in navItemList"
			:key="index"
			:class="{dd:item==activeNavItem}"
			@click="activeNavItemFun(item)">
        {{item}}</span>
		</div>
		<div class="enteprisebody">
			<div class="entepriserenal">
				<div class="entepriserenalsource">
					<span class="entepriserenalsource-in">公司信息</span>
					<span class="entepriserenalsource-to">注册资金</span>
					<span class="entepriserenalsource-auto">成立年限</span>
				</div>
				<div class="entepriserenalall"
					 v-for="(item,index) in listData"
					:key="index"
					 @click="Enterdetails(item)">
					<div class="entepriserenalallTB" v-show="item.isClick == 0"><img src="../../assets/image/enterprise1.jpg" style="cursor: pointer" alt="" @click.stop="cancelCollect(item.companyid,index)"></div>
					<div class="entepriserenalallnm">
						<img :src="JSON.parse(item.companyInfo).imgUrl" v-if="JSON.parse(item.companyInfo).imgUrl" alt="" class="entepriserenalallnmImg">
						<img src="../../assets/image/default.png" v-else alt="" class="entepriserenalallnmImg">
					</div>
					<div class="entepriserenalallWuHa">
						<div>
							<a href="javascript:;" class="entepriserenalallWuHa-nav">{{JSON.parse(item.companyInfo).name}}</a>
						</div>
						<div class="entepriserenalallFe">
							<span>法定代表人:{{JSON.parse(item.companyInfo).oper_name}}</span>
							<br>
							<span>企业注册号:{{JSON.parse(item.companyInfo).reg_no}}</span>
						</div>
					</div>
					<div class="entepriserenalallZhican">
						<span>{{JSON.parse(item.companyInfo).credit_no}}</span>
					</div>
					<div class="entepriserenalalldate">
						<span>{{JSON.parse(item.companyInfo).start_date}}</span>
					</div>
				</div>
			</div>
			<div class="footer">
				<pagination :total="total" @getCurrentPage="getCurrentPage" :pageSize="pageSize"></pagination>
			</div>
		</div>

	</div>
</template>

<script>
	import pagination from '@/components/pagination'
	import {mapMutations, mapGetters} from 'vuex'
	export default {
		name: "",
		components: {
			pagination
		},
		data() {
			return {
				dd: true,
				collectFlag:false,
				total:0,
				currentPage:1,
				pageSize:10,
				navItemList:["我的收藏","浏览历史"],
				activeNavItem: "",
				listData:[],
			};
		},
		methods: {
			//详情跳转
			/**
			 * 进入企业详情页
			 */
			Enterdetails(item) {
				this.collect(item,1)
				sessionStorage.setItem("enterpriseId", item.companyid)
				this.$router.push({
					path:'/companyDetails/essential'
				})
			},
			collect(item,flag) {
				this.$post('/companykeep/',{
					companyid:item.companyid,
					isClick:flag,
					companyInfo: JSON.stringify(item)
				}).then(res => {
					// this.getEnterpriseList(this.getSeacherText)
				})
			},
			getCurrentPage(page){
				// console.log(`父组件page ${page}`)
				this.currentPage = page
				this.getAjaxData()
			},
			//获取企业信息列表
			getAjaxData(){
				let isclick = this.activeNavItem
				if(isclick == "我的收藏"){
					isclick = 0
				}else {
					isclick = 1
				}
				this.$get(`/companykeep/page/${this.currentPage}/${this.pageSize}/${isclick}`)
						.then(data => {
							console.log(data);
							this.listData = data.data.result
							this.total = data.data.total
						}).catch(error => {
					console.log(error);
				})
			},
			activeNavItemFun(item){
				this.activeNavItem = item
			},
			cancelCollect(p,index){
				this.$get(`/companykeep/delete/${p}`)
						.then(data => {
							console.log(data);
							this.$message.success("取消收藏成功")
							this.listData[index].isClick= 1
						}).catch(error => {
					console.log(error);
					this.$message.success("取消收藏失败")
				})
			}
		},
		watch: {
			activeNavItem(){
				this.currentPage = 1
				this.getAjaxData()
			}
		},
		created() {
			this.activeNavItem = '我的收藏'
			this.getAjaxData()
		}
	};
</script>

  <style scoped>
.dd {
  color: #557bf7;
  font-weight: 600;
}
.enteprisebody {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.entepriseheart {
	width: 1200px;
	margin: 0 auto;
	height: 60px;
	line-height: 60px;
	color: #969ebb;
	font-size: 14px;
	background-color: #fff;
}
.enterpriseSc {
	font-size: 14px;
	font-weight: 600;
	margin-left: 25px;
	cursor: pointer;
}
.enterpriseSc:after{
	content: "";
	display: inline-block;
	height: 14px;
	width: 1px;
	background-color: #969ebb;
	margin-left: 20px;
}
.enterpriseSc:last-child:after{
	display: none;
}
.entepriserenal {
  width: 1140px;
  margin: 0 auto;
}
.entepriserenalsource {
  width: 100%;
  height: 40px;
  background: #ececf5;

  line-height: 40px;
}
.entepriserenalsource-in {
  color: #c1c3ce;
  margin-left: 230px;
}
.entepriserenalsource-to {
  color: #c1c3ce;
  margin-left: 480px;
}
.entepriserenalsource-auto {
  color: #c1c3ce;
  margin-left: 100px;
}
.entepriserenalall {
  padding-top: 20px;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #f7f7fc;
  position: relative;
}
.entepriserenalallTB {
  position: absolute;
  left: 10px;
  width: 25px;
  height: 150px;
  line-height: 150px;
}
.entepriserenalallnm {
  position: absolute;
  left: 45px;
  width: 150px;
  height: 150px;
  line-height: 150px;
	display: flex;
	align-items: center;
}
.entepriserenalallnm .entepriserenalallnmImg{
	width: 120px;
	/*height: 120px;*/
}
.entepriserenalallWuHa {
  position: absolute;
  left: 199px;
  height: 150px;
  width: 500px;
  border: none;
}
.entepriserenalallWuHa-nav {
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  left: 30px;
  top: 30px;
  color: #838895;
}
.entepriserenalallFe {
  position: absolute;
  left: 30px;
  top: 70px;
  line-height: 170%;
  color: #a6aab3;
}
.entepriserenalallZhican {
  position: absolute;
  left: 750px;
  height: 150px;
  line-height: 150px;
}
.entepriserenalalldate {
  position: absolute;
  left: 920px;
  height: 150px;
  line-height: 150px;
}
.footer{
	width: 1200px;
	margin: 0 auto;
	text-align: center;
	padding: 30px 0;
	background-color: #fff;
}
</style>
