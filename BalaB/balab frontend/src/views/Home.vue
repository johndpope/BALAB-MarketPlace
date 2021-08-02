<template>
  <div>
    <PageHeader />
    <PageNavbar />
    <Banner />
    <FeatureSection />
    <Categories />
    <ProductWrapper />
    <MiddleBanner />
    <TopProduct />
    <PageFooter />
  </div>
</template>
<script>
import PageHeader from "../components/General/Header.vue";
import PageNavbar from "../components/General/Nav.vue";
import Banner from "../components/Home/Banner.vue";
import FeatureSection from "../components/Home/FeatureSection.vue";
import Categories from "../components/Home/Categories.vue";
import ProductWrapper from "../components/Home/ProductWrapper.vue";
import MiddleBanner from "../components/Home/MiddleBanner.vue";
import TopProduct from "../components/Home/TopProduct.vue";
import PageFooter from "../components/General/FooterPage.vue";
export default {
  name: "Home",
  components: {
    PageHeader,
    PageNavbar,
    Banner,
    FeatureSection,
    Categories,
    ProductWrapper,
    MiddleBanner,
    TopProduct,
    PageFooter
  },
};
</script>
<style>
</style>