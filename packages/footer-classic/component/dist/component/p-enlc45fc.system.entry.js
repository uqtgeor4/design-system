System.register(["./p-ccca12b4.system.js"],(function(e){"use strict";var t,r,s;return{setters:[function(e){t=e.r;r=e.h;s=e.H}],execute:function(){var o=e("uq_footer_classic",function(){function e(e){t(this,e)}e.prototype.validateName=function(e){var t=typeof e==null;if(t){throw new Error("pageUrl: required")}};e.prototype.hasLastUpdated=function(){return typeof this.pageLastUpdated!=="undefined"&&this.pageLastUpdated!==null&&/\S/.test(this.pageLastUpdated)};e.prototype.render=function(){return r(s,null,r("div",{class:"site-footer"},r("div",{class:"site-footer__content"},r("div",{class:"row"},r("div",{class:"columns large-9 medium-8"},r("span",{class:"footer__copyright"},"© The University of Queensland"),r("div",{class:"footer__contact"},"Enquiries: ",r("a",{href:"tel:+61733651111",class:"footer__link footer__enquiries-phone"},"+61 7 3365 1111"),"   |   ",r("a",{href:"https://uq.edu.au/contacts",class:"footer__link footer__contacts-link"},"Contact directory")),r("div",{class:"footer__meta"},r("abbr",{title:"Australian Business Number"},"ABN"),": 63 942 912 684   |   ",r("abbr",{title:"Commonwealth Register of Institutions and Courses for Overseas Students"},"CRICOS")," Provider No: ",r("a",{class:"footer__link cricos__link",href:"https://www.uq.edu.au/about/cricos-link",rel:"external"},"00025B"))),r("div",{class:"columns large-3 medium-4"},r("div",{class:"site-footer__emergency-contact"},r("strong",{class:"site-footer__sub-title"},"Emergency"),r("br",null),"Phone: ",r("a",{href:"tel:+61733653333",class:"footer__link footer__emergency-phone"},"3365 3333")))),r("div",{class:"row"},r("div",{class:"site-footer__footer"},r("div",{class:"columns large-9 medium-8 end"},r("a",{href:"https://www.uq.edu.au/terms-of-use/",rel:"external",class:"footer__link footer__terms-link"},"Privacy & Terms of use"),"   |   ",r("a",{href:"http://www.uq.edu.au/feedback?r="+this.pageUrl,rel:"nofollow",class:"footer__link footer__feedback-link"},"Feedback")," ",this.hasLastUpdated()?r("span",null,"  |   ",r("span",{class:"footer__last-updated"},"Updated: ",this.pageLastUpdated)):""))))))};Object.defineProperty(e,"watchers",{get:function(){return{pageUrl:["validateName"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return e}())}}}));