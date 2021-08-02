<template>
    <div>
        <PageHeader />
        <PageNavbar />
        <breadcums />
        <PageSideBar />  
        <ProductContent />
        <PageFooter />
    </div>
</template>
<script>
    import PageHeader from '../../components/General/Header.vue'
    import PageNavbar from '../../components/General/Nav.vue'
    import breadcums from '../../components/Shop/PageBreadcums.vue'
    import PageSideBar from '../../components/Shop/SidebarPage.vue'
    import ProductContent from '../../components/Shop/ProductContent.vue'
    import PageFooter from '../../components/General/FooterPage.vue'
export default {
    name:"shop",
    components:{
        PageHeader,
        PageNavbar,
        breadcums,
        PageSideBar,
        ProductContent,
        PageFooter
        
    },
}
</script>