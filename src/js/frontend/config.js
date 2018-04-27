requirejs.config({
    baseUrl: '../src/js/frontend/',
    paths: {
        // libraries
        ace: 'libs/ace/ace',
        charts: 'libs/charts.min',
        cropper: 'libs/cropper.min',
        moment: 'libs/moment.min',
        progress: 'libs/progressbar.min',
        signature: 'libs/signature.min',
        particle: 'libs/particles.min',
        geocomplete: 'libs/geocomplete',
        owlCarousel: 'libs/owl.carousel.min',
        jQuery: 'libs/jquery.min',
        // controller
        app: 'controller/app',
        // core
        api: 'controller/core/api',
        cart: 'controller/core/cart',
        editor: 'controller/core/editor',
        storage: 'controller/core/storage',
        user: 'controller/core/user',
        // default
        main: 'main',
        // pages
        page: 'controller/pages/page',
        about: 'controller/pages/about',
        blog: 'controller/pages/blog',
        course: 'controller/pages/course',
        courses: 'controller/pages/courses',
        eduide: 'controller/pages/eduide',
        home: 'controller/pages/home',
        signup: 'controller/pages/signup',
        // ajax
        ajaxLogin: 'ajax/user/login',
        ajaxRegister: 'ajax/user/register'
    }
});