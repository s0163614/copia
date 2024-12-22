window.addEventListener("load", () => {
    document.querySelectorAll('a[href^="#"').forEach(e => {
        e.addEventListener("click", function (t) {
            if (t.preventDefault(), t.target.getAttribute("href") && t.target.getAttribute("href").length > 1) {
                let r = t.target.getAttribute("href").substring(1);
                const o = document.getElementById(r).getBoundingClientRect().top - 0;
                window.scrollBy({top: o - 130, behavior: "smooth"})
            } else t.target.getAttribute("href") == "#" && window.scrollTo({top: 0, behavior: "smooth"})
        })
    }), new Swiper(".reviews__swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: !0,
        navigation: {nextEl: "#reviews__swiper-next", prevEl: "#reviews__swiper-prev"},
        breakpoints: {}
    }), new Swiper(".partners__swiper_left", {
        spaceBetween: 20,
        speed: 6e3,
        loop: !0,
        loopedSlides: 9,
        loopedSlidesLimit: !1,
        freeMode: {enabled: !0, momentumRatio: 2},
        centeredSlides: !0,
        slidesPerView: "auto",
        autoplay: {delay: 1, disableOnInteraction: !0}
    }), new Swiper(".partners__swiper_right", {
        spaceBetween: 20,
        speed: 6e3,
        loop: !0,
        loopedSlides: 9,
        loopedSlidesLimit: !1,
        freeMode: {enabled: !0, momentumRatio: 2},
        centeredSlides: !0,
        slidesPerView: "auto",
        autoplay: {delay: 1, disableOnInteraction: !0, reverseDirection: !0}
    }), document.querySelectorAll(".faq-item").forEach(e => {
        e.addEventListener("click", function () {
            this.classList.toggle("active");
            let t = this.querySelector(".faq-item__content");
            t.style.maxHeight ? t.style.maxHeight = null : t.style.maxHeight = t.scrollHeight + "px"
        })
    }), document.querySelector(".header__lang-current").addEventListener("click", () => {
        document.querySelector(".header__lang").classList.toggle("active")
    }), document.querySelector(".header__list-button").addEventListener("click", e => {
        e.preventDefault(), e.target.classList.toggle("active"), document.querySelector(".menu-products").classList.toggle("active")
    }), document.querySelector(".menu-mobile__sub").addEventListener("click", e => {
        e.preventDefault(), e.target.classList.toggle("active"), document.querySelector(".menu-mobile-list").classList.toggle("active")
    }), document.querySelector(".burger").addEventListener("click", () => {
        document.querySelector("body").classList.toggle("menu-open")
    }), document.querySelectorAll(".menu-mobile-list a").forEach(e => {
        e.addEventListener("click", () => {
            document.querySelector("body").classList.remove("menu-open")
        })
    })
});
