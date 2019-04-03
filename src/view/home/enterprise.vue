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
					:key="index">
					<div class="entepriserenalallTB" v-show="item.isClick == 0"><img src="../../assets/image/enterprise1.jpg" alt="" @click="cancelCollect(item.companyid,index)"></div>
					<div class="entepriserenalallnm"><img src="../../assets/image/logo.png"alt="" class="entepriserenalallnmImg"></div>
					<div class="entepriserenalallWuHa">
						<div>
							<h1 class="entepriserenalallWuHa-nav">武汉科前开发股份有限公司</h1>
						</div>
						<div class="entepriserenalallFe">
							<span>法定代表人:陈焕春</span>
							<br>
							<span>电话:9237828</span>
							<br>
							<span>邮箱:38128931@qq.com</span>
							<br>
							<span>地址:武汉市东湖新技术开发区高新二路419号</span>
						</div>
					</div>
					<div class="entepriserenalallZhican">
						<span>36000万人民币</span>
					</div>
					<div class="entepriserenalalldate">
						<span>2001-01-11</span>
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
				sessionStorage.setItem("enterpriseId", item.id)
				this.$router.push({
					path:'/companyDetails/essential'
				})
			},
			collect(){
				this.collectFlag = !this.collectFlag
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
						}).catch(error => {
					console.log(error);
					this.$message.success("取消收藏失败")

				})
			}
		},
		computed:{
			...mapGetters([
				'getSeacherText'
			])
		},
		watch: {
			getSeacherText(){
				console.log(this.getSeacherText)
				this.getAjaxData()
			},
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
  margin-left: 200px;
}
.entepriserenalall {
  padding-top: 20px;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #f7f7fc;
  position: relative;
}
.entepriserenalallTB {
  position: absolute;
  left: 10px;
  width: 25px;
  height: 200px;
  line-height: 200px;
}
.entepriserenalallnm {
  position: absolute;
  left: 45px;
  width: 150px;
  height: 200px;
  line-height: 200px;
	display: flex;
	align-items: center;
}
.entepriserenalallnm .entepriserenalallnmImg{
	width: 120px;
	height: 120px;
	background: black;
}
.entepriserenalallWuHa {
  position: absolute;
  left: 199px;
  height: 200px;
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
  height: 200px;
  line-height: 200px;
}
.entepriserenalalldate {
  position: absolute;
  left: 1020px;
  height: 200px;
  line-height: 200px;
}
.footer{
	width: 1200px;
	margin: 0 auto;
	text-align: center;
	padding: 30px 0;
	background-color: #fff;
}
</style>
