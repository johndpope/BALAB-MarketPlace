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
              <!-- <img src="./imgs/bg.jpg" width="150px" /> -->
            </div>
            <div class="heading mb-4">
              <h4>Create an account</h4>
            </div>
            <form>
              <div class="form-input">
                <span><i class="fa fa-user"></i></span>
                <input type="text" placeholder="Full Name" required />
              </div>
              <div class="form-input">
                <span><i class="fa fa-envelope"></i></span>
                <input type="email" placeholder="Email Address" required />
              </div>
              <div class="form-input">
                <span><i class="fa fa-lock"></i></span>
                <input type="password" placeholder="Password" required />
              </div>
              <div class="row mb-3">
                <div class="col-12 d-flex">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="cb1"
                    />
                    <label class="custom-control-label text-white" for="cb1"
                      >I agree all terms & conditions</label
                    >
                  </div>
                </div>
              </div>
              <div class="text-left mb-3">
                <button type="submit" class="btn">Register</button>
              </div>
              <div class="text-center mb-2">
                <div class="mb-3" style="color: #777">or register with</div>

                <a href="" class="btn btn-social btn-facebook">facebook</a>

                <a href="" class="btn btn-social btn-google">google</a>

                <a href="" class="btn btn-social btn-twitter">twitter</a>
              </div>
              <div style="color: #777">
                Already have an account
                <a href="login" class="login-link">Login here</a>
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
import funbuttons from "../components/Buttons.vue";
export default {
  components: {
    funbuttons,
  },
};
</script>
<style>
@import url("../../css/app.css");
</style>