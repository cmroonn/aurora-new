import LazyLoad from "vanilla-lazyload";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import { isBrowserSupportWebp } from "./modules/support-webp.js";
import IMask from "imask";

import { validInputs } from "./modules/valid-inputs.js";
import { formHandle } from "./modules/form-handle.js";
import { validateForm } from "./modules/validate.js";
import { selector } from "./modules/selector.js";
import { datePicker } from "./modules/date-picker.js";
import { swiper } from "./modules/swiper.js";
import { fancy } from "./modules/fancy.js";
import { accordeonFunc } from "./modules/accordeon.js";
import { map } from "./modules/map.js";
import { cardsAnim } from "./modules/cards-anim.js";
import { tabs } from "./modules/tabs.js";
import { mobileMenu } from "./modules/mobile-menu.js";


datePicker();
selector();
isBrowserSupportWebp();
swiper();
fancy();
accordeonFunc();
map();
cardsAnim();
tabs();
mobileMenu();
//handleAttachFiles();
validInputs();
// formHandle();
// validateForm();

let myLazyLoad = new LazyLoad();
myLazyLoad.update();



document.addEventListener("DOMContentLoaded", function() {
    // вызов модалки на кнопке "Подобрать судно"
    try {
        const btn = document.getElementById('takeYacht');
        const popup = document.getElementById('eventTypePopup');
        btn.addEventListener('click', function() {
            popup.style.display = 'flex';
        });
    } catch (e) {
        console.log(e);
    }

    // закрытие попапов при клике на .close-btn
    try {
        const closeBtns = document.querySelectorAll(".close-btn");
        
        closeBtns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                let parent = btn.closest('.popup');
                parent.style.display = 'none';
            })
        });
    } catch (e) {
        console.log(e);
    }

    try {
        const filtersBtn = document.querySelector('.filters-btn');
        const filters = document.querySelector('.filters');
        
        filtersBtn.addEventListener("click", function () {
            filters.classList.toggle("active");
        });

        const filtersTabs = document.querySelectorAll('.filters-tabs .button, .routes-hero .tabs .button');

        filtersTabs.forEach(function(tab) {
            tab.addEventListener("click", function () {
                tab.classList.toggle("active");
            });
        });

        const clearBtn = document.querySelector(".routes-hero .clear");

        clearBtn.addEventListener("click", function () {
            filtersTabs.forEach(function(tab) {
                tab.classList.remove("active");
            });
        });
    } catch (e) {
        console.log(e);
    }

    try {
        const allOrderBtns = document.querySelectorAll('.open-order-form');
        const popup = document.getElementById('orderPopup');
        if (allOrderBtns && popup) {
            allOrderBtns.forEach(function (btn) {
                btn.addEventListener("click", function (event) {
                    event.preventDefault();
                    popup.classList.add("active");
                });
            });
        }
    } catch (e) {
        console.log(e);
    }

    try {
        const allOrderBtns = document.querySelectorAll('.open-choosefleet-form');
        const popup = document.getElementById('chooseFleetPopup');
        if (allOrderBtns && popup) {
            allOrderBtns.forEach(function (btn) {
                btn.addEventListener("click", function (event) {
                    event.preventDefault();
                    popup.classList.add("active");
                });
            });
        }
    } catch (e) {
        console.log(e);
    }

    try {
        const allCloseBtns = document.querySelectorAll(".close-btn");
        if(allCloseBtns) {
            allCloseBtns.forEach(function (btn) {
                btn.addEventListener("click", function(event) {
                    event.preventDefault();
                    let parent = btn.closest(".order-modal");
                    parent.classList.remove("active");
                });
            });
        }
    } catch (e) {
        console.log(e);
    }
});
