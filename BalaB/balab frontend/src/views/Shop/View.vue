<template>
  <div>
    <PageHeader />
    <PageNavbar />
    <breadcums />
    <ProductContent />
    <PageFooter />
  </div>
</template>
<script>
import PageHeader from "../../components/General/Header.vue";
import PageNavbar from "../../components/General/Nav.vue";
import breadcums from '../../components/Shop/ViewPageBreadcums.vue'
import ProductContent from "../../components/Shop/ProductContent.vue";
import PageFooter from "../../components/General/FooterPage.vue";
export default {
  components: {
    PageHeader,
    PageNavbar,
    breadcums,
    ProductContent,
    PageFooter,
  },
};
</script>