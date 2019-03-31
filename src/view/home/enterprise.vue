  <template>
  <div>
    <div class="enteprisebody">
      <div class="entepriseheart">
        <span class="enterpriseSc" @click="can()">我的收藏</span>
        <span class="enterpriseLL">|</span>
        <span class="enterpriseLs" @click="to()">浏览历史</span>
      </div>
      <div class="entepriserenal">
        <div class="entepriserenalsource">
          <span class="entepriserenalsource-in">公司信息</span>
          <span class="entepriserenalsource-to">注册资金</span>
          <span class="entepriserenalsource-auto">成立年限</span>
        </div>
        <div class="entepriserenalall">
          <div class="entepriserenalallTB" v-show="isshow">img</div>
          <div class="entepriserenalallnm">img</div>
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
        <div class="entepriserenalall"></div>
        <div class="entepriserenalall"></div>
        <div class="entepriserenalall"></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

  <script>
import axios from "axios";
export default {
  data() {
    return {
      pathIndex: 0,
      isshow: true,
      dd: true
    };
  },
  methods: {
    can() {
      this.isshow = true;
    },
    to() {
      this.isshow = false;
    },
    bdcan() {
      this.$post('/patent/invoke',{
          
        }).then(data => {
          if(data.status == 200){
            
            this.$message.error(data.message);
          } 
        }).catch(error => {
          this.$message.error('1');
          console.log(error);
        })
    }
  },
  created(){
    this.bdcan();
  }
};
</script>

  <style scoped>
.dd {
  color: #557bf7;
  font-weight: 600;
}
.enteprisebody {
  width: 63%;
  height: 1000px;
  margin: 0 auto;
  margin-left: 18.5%;
  margin-right: 14.5%;
  position: absolute;
}
.entepriseheart {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
.enterpriseSc {
  font-size: 14px;
  font-weight: 600;
  margin-left: 25px;
}
.enterpriseLs {
  font-size: 14px;
  font-weight: 600;
  margin-left: 25px;
}
.enterpriseLL {
  margin-left: 25px;
}
.entepriserenal {
  width: 96%;
  height: 800px;
  margin-left: 2%;
  margin-right: 2%;
  height: 300px;
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
</style>
