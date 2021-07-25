<template>
  <div>
    <section>
      <div class="categories">
        <div class="wrapper">
          <h6 class="category-sub-title" style="color:#364547">Welcome to BalaB</h6>
          <h3 class="category-title">our categories</h3>
          <div class="categories-container">
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
            <div class="category">
              <img :src="image" alt="img" />
              <i class="fas fa-car fa-3x"></i>
              <div class="category-body">
                <h4>Lorem , ipsum</h4>
                <span>100 courses</span>
              </div>
            </div>
          </div>
          <button class="btn-show-all" type="button">show all</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import image from "./assets/img/back.jpg";
export default {
  name: "Categories", 
    data: function () {
    return {
      image: image,
    };
  },
};
</script>
<style>
@import url("./scss/Categories.css");
</style>