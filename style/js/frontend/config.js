requirejs.config({
    baseUrl: '../style/js/frontend/',
    paths: {
        // libraries
        charts: 'libs/charts.min',
        cropper: 'libs/cropper.min',
        moment: 'libs/moment.min',
        progress: 'libs/progressbar.min',
        signature: 'libs/signature.min',
        particle: 'libs/particles.min',
        geocomplete: 'libs/geocomplete',
        owlCarousel: 'libs/owl.carousel.min',
        // controller
        api: 'controller/api',
        app: 'controller/app',
        cart: 'controller/core/cart',
        storage: 'controller/core/storage',
        user: 'controller/core/user',
        // default
        main: 'main',
        // pages
        page: 'controller/pages/page',
        home: 'controller/pages/home',
        shops: 'controller/pages/shops',
        shop: 'controller/pages/shop',
        configShop: 'controller/pages/shop/config',
        products: 'controller/pages/shop/products',
        strains: 'controller/pages/shop/strains',
        strain: 'controller/pages/shop/strain',
        signup: 'controller/pages/signup',
        // ajax
        ajaxLogin: 'ajax/user/login',
        ajaxRegister: 'ajax/user/register'
    }
});