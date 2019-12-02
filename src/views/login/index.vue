<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- 导航栏 -->

    <!-- 表单 -->
    <van-cell-group>
      <van-field
      v-model="user.mobile"
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
      v-model="user.code"
        label="验证码"
        placeholder="请输入验证码"
      />
    </van-cell-group>
    <!-- /表单 -->

    <!-- 登录按钮 -->
    <div class="login-btn-box">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
    <!-- /登录按钮 -->
  </div>
</template>

<script>
// 引入封装的axios模块
import { login } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  computed: {},
  watch: {
  },
  created () {},
  methods: {
    async onLogin () {
      // 动态更新提示
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '登录中'
      })
      try {
        const res = await login(this.user)

        // res.data.data => { token: 'xxx', refresh_token: 'xxx' }
        this.$store.commit('setUser', res.data.data)

        // const res = await request({
        //   method: 'POST',
        //   url: '/app/v1_0/authorizations',
        //   data: this.user
        // })
        console.log('登录成功', res)
        // 提示 success 或者 fail 的时候，会先把其它的 toast 先清除
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登录失败', err)
        this.$toast.fail('出错了')
      }
    }
  }
}

</script>

<style scoped lang="less">
.login {
  .login-btn-box {
    padding: 20px;
    .van-button {
      width: 100%;
    }
  }
}
</style>
