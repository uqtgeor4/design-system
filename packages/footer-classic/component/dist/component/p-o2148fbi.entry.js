import{r as e,h as s,H as t}from"./p-4acd2ef5.js";const r=class{constructor(s){e(this,s)}validateName(e){if(null==typeof e)throw new Error("pageUrl: required")}hasLastUpdated(){return null!=this.pageLastUpdated&&/\S/.test(this.pageLastUpdated)}render(){return s(t,null,s("div",{class:"site-footer"},s("div",{class:"site-footer__content"},s("div",{class:"row"},s("div",{class:"columns large-9 medium-8"},s("span",{class:"footer__copyright"},"© The University of Queensland"),s("div",{class:"footer__contact"},"Enquiries: ",s("a",{href:"tel:+61733651111",class:"footer__link footer__enquiries-phone"},"+61 7 3365 1111"),"   |   ",s("a",{href:"https://uq.edu.au/contacts",class:"footer__link footer__contacts-link"},"Contact directory")),s("div",{class:"footer__meta"},s("abbr",{title:"Australian Business Number"},"ABN"),": 63 942 912 684   |   ",s("abbr",{title:"Commonwealth Register of Institutions and Courses for Overseas Students"},"CRICOS")," Provider No: ",s("a",{class:"footer__link cricos__link",href:"https://www.uq.edu.au/about/cricos-link",rel:"external"},"00025B"))),s("div",{class:"columns large-3 medium-4"},s("div",{class:"site-footer__emergency-contact"},s("strong",{class:"site-footer__sub-title"},"Emergency"),s("br",null),"Phone: ",s("a",{href:"tel:+61733653333",class:"footer__link footer__emergency-phone"},"3365 3333")))),s("div",{class:"row"},s("div",{class:"site-footer__footer"},s("div",{class:"columns large-9 medium-8 end"},s("a",{href:"https://www.uq.edu.au/terms-of-use/",rel:"external",class:"footer__link footer__terms-link"},"Privacy & Terms of use"),"   |   ",s("a",{href:`http://www.uq.edu.au/feedback?r=${this.pageUrl}`,rel:"nofollow",class:"footer__link footer__feedback-link"},"Feedback")," ",this.hasLastUpdated()?s("span",null,"  |   ",s("span",{class:"footer__last-updated"},"Updated: ",this.pageLastUpdated)):""))))))}static get watchers(){return{pageUrl:["validateName"]}}static get style(){return":host{display:block}"}};export{r as uq_footer_classic};