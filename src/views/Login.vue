<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/logo.jpg" alt />
    </div>
    <InputGroup
      type="number"
      v-model="phone"
      placeholder="请输入手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :errors="errors.phone"
    @btnClick="getVerifyCode"
    ></InputGroup>

    <InputGroup  type="number" v-model="verifyCode" placeholder="验证码"  :errors="errors.code"></InputGroup>

    <div class="login_des">
      <p>
        新用户登录即自动注册，表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <button :disabled="isClick" @click="loginHandle">登录</button>
    </div>
  </div>
</template>
    
<script>
import InputGroup from "@/components/InputGroup.vue";
export default {
  name: "login",
  components: {
    InputGroup
  },
  data() {
    return {
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false
    };
  },
  methods: {
      loginHandle(){
          this.$axios.post('/api/posts/sms_back',{
              phone:this.phone,
              code:this.verifyCode
          }).then(()=>{
              localStorage.setItem('isLogin',true)
              this.$router.push('/')
          }).catch(()=>{
              this.errors = { code:  '验证码错误'};
          })
      },
    getVerifyCode() {
      if (this.validatePhone()) {
          this.validateBtn()
          this.$axios.post('/api/posts/sms_send',{
              tpl_id:'157619',
              key:'c2d207ab95857e356127a3a127d0000e',
              phone:this.phone
          }).then(()=>{
             
          })
      }
    },
    validatePhone() {
      if (!this.phone) {
        this.errors = { phone: "请输入手机号码" };
        return false;
      } else if (
        !/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
          this.phone
        )
      ) {
        this.errors = { phone: "请输入正确的手机号码" };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    validateBtn(){
        let time = 10
        let timeId = setInterval(()=>{
            if(time === 0){
                clearInterval(timeId)
                this.btnTitle = '获取验证码'
                this.disabled = false
            }else{
                 this.btnTitle = `${time--}秒后重试`
                this.disabled = true
            }
        },1000)
    }
  },
  computed: {
      isClick(){
          if(!this.phone ||  !this.verifyCode){
              return true
          }
          return  false
      }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>
