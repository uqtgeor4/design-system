System.register(["./p-ce6706c6.system.js"],(function(e){"use strict";var t,o,s;return{setters:[function(e){t=e.r;o=e.h;s=e.H}],execute:function(){var r=e("uq_footer_classic",function(){function e(e){t(this,e)}e.prototype.validateName=function(e){var t=typeof e==null;if(t){throw new Error("pageUrl: required")}};e.prototype.showLoginOrLogout=function(){return this.showLogin||this.showLogout};e.prototype.hasLastUpdated=function(){return typeof this.pageLastUpdated!=="undefined"&&this.pageLastUpdated!==null&&/\S/.test(this.pageLastUpdated)};e.prototype.render=function(){return o(s,null,o("div",{class:"site-footer"},o("div",{class:"site-footer__content"},o("div",{class:"row"},o("div",{class:"columns medium-8 large-9"},o("span",{class:"footer__copyright"},"© The University of Queensland"),o("div",{class:"footer__contact"},"Enquiries: ",o("a",{href:"tel:+61733651111",class:"footer__link footer__enquiries-phone"},"+61 7 3365 1111"),"   |   ",o("a",{href:"https://uq.edu.au/contacts",class:"footer__link footer__contacts-link"},"Contact directory")),o("div",{class:"footer__meta"},o("abbr",{title:"Australian Business Number"},"ABN"),": 63 942 912 684   |   ",o("abbr",{title:"Commonwealth Register of Institutions and Courses for Overseas Students"},"CRICOS")," Provider No: ",o("a",{class:"footer__link cricos__link",href:"https://www.uq.edu.au/about/cricos-link",rel:"external"},"00025B"))),o("div",{class:"columns medium-4 large-3"},o("div",{class:"site-footer__emergency-contact"},o("strong",{class:"site-footer__sub-title"},"Emergency"),o("br",null),"Phone: ",o("a",{href:"tel:+61733653333",class:"footer__link footer__emergency-phone"},"3365 3333")))),o("div",{class:"row"},o("div",{class:"site-footer__footer"},o("div",{class:this.showLoginOrLogout()?"columns medium-8 large-9 end":"columns medium-8 large-9"},o("a",{href:"https://www.uq.edu.au/terms-of-use/",rel:"external",class:"footer__link footer__terms-link"},"Privacy & Terms of use"),"   |   ",o("a",{href:"http://www.uq.edu.au/feedback?r="+this.pageUrl,rel:"nofollow",class:"footer__link footer__feedback-link"},"Feedback")," ",this.hasLastUpdated()?o("span",null,"  |   ",o("span",{class:"footer__last-updated"},"Updated: ",this.pageLastUpdated)):""),this.showLoginOrLogout()?o("div",{class:"columns large-3 medium-4"},this.showLogin?o("a",{class:"footer__link footer__login-link",href:this.loginUrl},"Login"):"",this.showLogout?o("a",{class:"footer__link footer__logout-link",href:this.logoutUrl},"Logout"):""):"")))))};Object.defineProperty(e,"watchers",{get:function(){return{pageUrl:["validateName"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return e}())}}}));