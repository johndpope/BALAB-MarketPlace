<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 d-none d-md-block image-container"></div>

        <div class="col-lg-6 col-md-6 form-container">
          <div
            class="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center"
          >
            <div class="logo mb-3">
              <svg
                id="cart"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <defs></defs>
                <path
                  class="vi-primary"
                  d="M14.58,35.043a3.479,3.479,0,1,1-3.527,3.479A3.5,3.5,0,0,1,14.58,35.043Zm11.771,0a3.479,3.479,0,1,1-3.542,3.479A3.511,3.511,0,0,1,26.351,35.043ZM44,12H14L9,6H4L18,26H30l-2,3H13L9,33H30Z"
                />
                <path
                  class="vi-accent"
                  d="M16,16H36l-2,2H18Zm3,4H32l-2,2H21Z"
                />
              </svg>
            </div>
            <div class="heading mb-4">
              <h4>Login into your account</h4>
            </div>
            <form>
              <div class="form-input">
                <span><i class="fa fa-envelope"></i></span>
                <input type="email" placeholder="Email Address" required />
              </div>
              <div class="form-input">
                <span><i class="fa fa-lock"></i></span>
                <input type="password" placeholder="Password" required />
              </div>
              <div class="row mb-3">
                <div class="col-6 d-flex">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="cb1"
                    />
                    <label class="custom-control-label text-white" for="cb1"
                      >Remember me</label
                    >
                  </div>
                </div>
                <div class="col-6 text-right">
                  <a href="forget.html" class="forget-link">Forget Password</a>
                </div>
              </div>
              <div class="text-left mb-3">
                <button type="submit" class="btn">Login</button>
              </div>
              <div class="text-center mb-2">
                <div class="mb-3" style="color: #777">or login with</div>

                <a href="" class="btn btn-social btn-facebook">facebook</a>

                <a href="" class="btn btn-social btn-google">google</a>

                <a href="" class="btn btn-social btn-twitter">twitter</a>
              </div>
              <div style="color: #777">
                Don't have an account
                <router-link to="register" class="register-link"
                  >Register here</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <funbuttons />
  </div>
</template>
<script>
import funbuttons from "../components/Navigation.vue";
export default {
  components: {
    name: "Login",
    funbuttons,
  },
};
</script>
<style>
@import url("../../css/auth.css");
</style>