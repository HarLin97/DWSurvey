(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"12Lk":function(e,s,r){"use strict";r.r(s);var t=r("vaYH"),n=r.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){r.d(s,e,function(){return t[e]})}(a);var o=r("5/8B"),u=r("JFUb"),i=Object(u.a)(n.a,o.a,o.b,!1,function(e){r("mGU/")},null,null);s.default=i.exports},"5/8B":function(e,s,r){"use strict";r.d(s,"a",function(){return t}),r.d(s,"b",function(){return n});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[r("dw-answer-default-layout",{attrs:{"ext-props":e.extProps},model:{value:e.survey,callback:function(s){e.survey=s},expression:"survey"}})],1)},n=[]},"5F7v":function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"DwAnswerMessageBody"}},"6+7N":function(e,s,r){"use strict";r.d(s,"a",function(){return t}),r.d(s,"b",function(){return n});var t=function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"dw-answer-custom-theme"},[s("el-row",[void 0!==this.answerProps.sid&&null!==this.answerProps.sid||void 0!==this.answerProps.surveyId&&null!==this.answerProps.surveyId?s("el-col",[s("dw-answer-survey-main",{attrs:{"answer-props":this.answerProps,"ext-props":this.extProps}})],1):this._e()],1)],1)},n=[]},"82+z":function(e,s,r){"use strict";r.r(s);var t=r("wHW8"),n=r.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){r.d(s,e,function(){return t[e]})}(a);var o=r("6+7N"),u=r("JFUb"),i=Object(u.a)(n.a,o.a,o.b,!1,function(e){r("zvDL"),r("YAUU"),r("CSZb")},"data-v-2b58bc5a",null);s.default=i.exports},"9EdS":function(e,s,r){},CKcK:function(e,s,r){"use strict";r.d(s,"a",function(){return t}),r.d(s,"b",function(){return n});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"dw-answer-container",style:e.anBodyStyle},[r("el-row",[r("el-col",{attrs:{xs:e.anBodySpan.xs,sm:e.anBodySpan.sm,md:e.anBodySpan.md,lg:e.anBodySpan.lg,xl:e.anBodySpan.xl}},[r("el-container",[null!=e.survey&&e.survey.hasOwnProperty("showSurvey")&&e.survey.showSurvey?r("el-main",{staticStyle:{padding:"10px"},attrs:{id:"dw-container-root"}},[r("div",[r("div",[r("div",{staticClass:"dw-container-body"},[e.survey.hasOwnProperty("surveyStyle")&&e.survey.surveyStyle.hasOwnProperty("showProgressbar")&&e.survey.surveyStyle.showProgressbar?r("div",{staticClass:"dw-survey-answer-progress",style:e.dwElProgressStyle},[r("el-progress",{attrs:{"show-text":!1,"stroke-width":3,percentage:e.survey.hasOwnProperty("answerProgress")?parseFloat(e.survey.answerProgress.percentage):0,color:e.survey.surveyStyle.progressColor,"define-back-color":"#dcdfe6"}})],1):e._e(),e._v(" "),r("dw-answer-survey-body",{ref:"designContainerBody",attrs:{"ext-props":e.extProps},model:{value:e.survey,callback:function(s){e.survey=s},expression:"survey"}})],1)])]),e._v(" "),r("div",{},[r("dw-footer-sm")],1)]):e._e()],1)],1)],1)],1)},n=[]},CSZb:function(e,s,r){},DEaP:function(e,s,r){"use strict";r.r(s);var t=r("5F7v"),n=r.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){r.d(s,e,function(){return t[e]})}(a);var o=r("m9k+"),u=r("JFUb"),i=Object(u.a)(n.a,o.a,o.b,!1,null,null,null);s.default=i.exports},EAXh:function(e,s,r){"use strict";r.d(s,"a",function(){return t}),r.d(s,"b",function(){return n});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[null!==e.survey&&e.survey.hasOwnProperty("answerMsg")?r("div",[r("div",[e.survey.hasOwnProperty("answerMsg")&&!e.survey.answerMsg.showAnswerMsg?r("div",[r("div",{staticClass:"dw-container-body-center",staticStyle:{"padding-bottom":"30px"}},[r("div",[r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.survey.surveyStyle.pageTopImg.enabled&&e.survey.surveyStyle.pageTopImg.hasOwnProperty("httpSrc")&&null!==e.survey.surveyStyle.pageTopImg.httpSrc,expression:"survey.surveyStyle.pageTopImg.enabled && survey.surveyStyle.pageTopImg.hasOwnProperty('httpSrc') && survey.surveyStyle.pageTopImg.httpSrc!==null"}]},[r("div",{staticStyle:{position:"relative"}},[r("el-image",{staticStyle:{width:"100%",height:"200px",display:"block"},attrs:{src:e.survey.surveyStyle.pageTopImg.httpSrc,fit:"cover"}}),e._v(" "),e.survey.surveyStyle.logoImg.enabled&&e.survey.surveyStyle.logoImg.hasOwnProperty("httpSrc")&&null!==e.survey.surveyStyle.logoImg.httpSrc?["pageTopImgLeft"===e.survey.surveyStyle.logoImg.position?r("div",{staticStyle:{position:"absolute",left:"10px",top:"10px"}},[r("el-image",{staticStyle:{height:"40px",display:"block"},attrs:{src:e.survey.surveyStyle.logoImg.httpSrc,fit:"cover"}})],1):e._e(),e._v(" "),"pageTopImgRight"===e.survey.surveyStyle.logoImg.position?r("div",{staticStyle:{position:"absolute",right:"10px",top:"10px"}},[r("el-image",{staticStyle:{height:"40px",display:"block"},attrs:{src:e.survey.surveyStyle.logoImg.httpSrc,fit:"cover"}})],1):e._e()]:e._e()],2)]),e._v(" "),e.survey.surveyStyle.logoImg.enabled&&e.survey.surveyStyle.logoImg.hasOwnProperty("httpSrc")&&null!==e.survey.surveyStyle.logoImg.httpSrc?r("div",["topLogoLeft"===e.survey.surveyStyle.logoImg.position?r("div",{staticClass:"dw-display-flex-left dw-answer-logo-bg-color"},[r("div",{staticStyle:{padding:"10px"}},[r("el-image",{staticStyle:{height:"40px",display:"block"},attrs:{src:e.survey.surveyStyle.logoImg.httpSrc,fit:"cover"}})],1)]):e._e(),e._v(" "),"topLogoCenter"===e.survey.surveyStyle.logoImg.position?r("div",{staticClass:"dw-display-flex-center dw-answer-logo-bg-color"},[r("div",{staticStyle:{padding:"10px"}},[r("el-image",{staticStyle:{height:"40px",display:"block"},attrs:{src:e.survey.surveyStyle.logoImg.httpSrc,fit:"cover"}})],1)]):e._e(),e._v(" "),"topLogoRight"===e.survey.surveyStyle.logoImg.position?r("div",{staticClass:"dw-display-flex-right dw-answer-logo-bg-color"},[r("div",{staticStyle:{padding:"10px"}},[r("el-image",{staticStyle:{height:"40px",display:"block"},attrs:{src:e.survey.surveyStyle.logoImg.httpSrc,fit:"cover"}})],1)]):e._e()]):e._e(),e._v(" "),e.survey.hasOwnProperty("isShowScore")&&e.survey.isShowScore&&e.survey.hasOwnProperty("dwEsSurveyAnswer")?r("div",{staticStyle:{padding:"10px","font-size":"16px",color:"var(--dw-answer-primary-color)","border-bottom":"1px dashed var(--dw-answer-primary-color)"}},[e._v("\n                答卷得分："),r("strong",{staticStyle:{color:"red","font-size":"20px"}},[e._v(e._s(e.survey.dwEsSurveyAnswer.answerCommon.sumScore)+"分")])]):e._e(),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.survey.hasOwnProperty("surveyStyle")&&e.survey.surveyStyle.hasOwnProperty("showPageHeader")&&e.survey.surveyStyle.showPageHeader,expression:"survey.hasOwnProperty('surveyStyle') && survey.surveyStyle.hasOwnProperty('showPageHeader') && survey.surveyStyle.showPageHeader"}],staticStyle:{padding:"20px 20px 0 20px"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.survey.hasOwnProperty("surveyStyle")&&e.survey.surveyStyle.hasOwnProperty("showSurveyTitle")&&e.survey.surveyStyle.showSurveyTitle,expression:"survey.hasOwnProperty('surveyStyle') && survey.surveyStyle.hasOwnProperty('showSurveyTitle') && survey.surveyStyle.showSurveyTitle"}],staticStyle:{"text-align":"center","font-weight":"bold",padding:"10px 0"}},[r("dw-html-label-common",{attrs:{survey:e.survey},model:{value:e.survey.surveyNameObj,callback:function(s){e.$set(e.survey,"surveyNameObj",s)},expression:"survey.surveyNameObj"}})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.survey.hasOwnProperty("surveyStyle")&&e.survey.surveyStyle.hasOwnProperty("showSurveyNote")&&e.survey.surveyStyle.showSurveyNote,expression:"survey.hasOwnProperty('surveyStyle') && survey.surveyStyle.hasOwnProperty('showSurveyNote') && survey.surveyStyle.showSurveyNote"}],staticStyle:{"font-size":"13px",color:"#7b7b7b","line-height":"20px","padding-top":"15px"}},[void 0!==e.survey.surveyDetail?r("dw-html-label-common",{attrs:{survey:e.survey},model:{value:e.survey.surveyDetail.surveyNodeObj,callback:function(s){e.$set(e.survey.surveyDetail,"surveyNodeObj",s)},expression:"survey.surveyDetail.surveyNodeObj"}}):e._e()],1)]),e._v(" "),r("div",{staticClass:"dw-survey-answer-body",staticStyle:{"padding-top":"20px"}},[r("div",[r("div",[r("transition-group",e._l(e.survey.questions,function(s,t){return r("div",{key:"surveyQu"+t,ref:"designQuestionRoot",refInFor:!0},[r("dw-answer-question",{ref:"designQuestion",refInFor:!0,attrs:{index:t,item:s},model:{value:e.survey,callback:function(s){e.survey=s},expression:"survey"}})],1)}),0)],1)]),e._v(" "),!e.survey.readonly&&e.survey.pageAttr.curPage>=e.survey.pageAttr.pageSize?r("div",{staticClass:"dw-width-100bf",staticStyle:{"text-align":"left"}},[r("div",[e.survey.hasOwnProperty("answerCheckResult")&&null!==e.survey.answerCheckResult&&e.survey.answerCheckResult.showCaptcha?r("div",[r("div",{staticClass:"dw-display-flex",staticStyle:{"margin-bottom":"10px"}},[r("div",{staticStyle:{width:"160px"}},[r("el-input",{attrs:{placeholder:"请输入右侧验证码"},model:{value:e.anRandomCode,callback:function(s){e.anRandomCode=s},expression:"anRandomCode"}})],1),e._v(" "),r("div",{staticStyle:{"margin-left":"5px"}},[r("el-image",{attrs:{src:"/api/dwsurvey/anon/jcap/jcaptcha.do"}})],1)])]):e._e()]),e._v(" "),e.survey.answerMsg.noSurveyJson?e._e():r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"dw-answer-button-style1",attrs:{type:"primary"},on:{click:e.submitAnswer}},[e._v("提交答卷")]),e._v(" "),r("el-button",{directives:[{name:"show",rawName:"v-show",value:e.survey.pageAttr.curPage>1,expression:"survey.pageAttr.curPage>1"}],staticClass:"dw-answer-button-style1",attrs:{type:"primary",plain:""},on:{click:function(s){return e.nextPage(e.survey.pageAttr.curPage-1,"prev")}}},[e._v("上一页")])],1):e._e()])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.survey.dwDebug,expression:"survey.dwDebug"}],staticClass:"dw-debug"},[e._v(e._s(e.answer))])])])]):r("div",[r("div",{staticStyle:{padding:"50px 20px","text-align":"center",background:"white"}},[r("div",{staticStyle:{"padding-bottom":"20px"}},[e.survey.answerMsg.noSurveyJson?e._e():r("div",{staticStyle:{"text-align":"center","font-weight":"bold"}},[r("dw-html-label-common",{attrs:{survey:e.survey},model:{value:e.survey.surveyNameObj,callback:function(s){e.$set(e.survey,"surveyNameObj",s)},expression:"survey.surveyNameObj"}})],1)]),e._v(" "),e.survey.answerMsg.hasOwnProperty("showAnswerPwd")&&e.survey.answerMsg.showAnswerPwd?r("div",{staticStyle:{"text-align":"left"}},[r("el-form",{attrs:{"label-position":"top"}},[r("el-form-item",{attrs:{label:"此问卷需要答卷密码，请输入答卷密码"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入答卷密码",clearable:""},model:{value:e.anPwd,callback:function(s){e.anPwd=s},expression:"anPwd"}}),e._v(" "),r("div",{staticStyle:{color:"red"}},[e._v(e._s(e.survey.answerMsg.answerPwdError))])],1)],1),e._v(" "),r("div",{staticClass:"dw-width-100bf",staticStyle:{"text-align":"left"}},[r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"dw-answer-button-style1",attrs:{type:"primary"},on:{click:e.configCheckAnswerPwdButton}},[e._v("开始答卷")])],1)],1):e._e(),e._v(" "),r("div",[e.survey.answerMsg.hasOwnProperty("answerCheckResult")&&e.survey.answerMsg.answerCheckResult.hasOwnProperty("anCheckResultCode")&&e.survey.answerMsg.answerCheckResult.anCheckResultCode>=400?[r("div",{staticStyle:{color:"red"}},[e._v(" "+e._s(e.survey.answerMsg.answerCheckResult.anCheckResultMsg))])]:[r("div",{staticStyle:{color:"dodgerblue"}},[e._v(" "+e._s(e.survey.answerMsg.answerMsgInfo))]),e._v(" "),e.survey.surveyAttrs.scoreAttr.enabled&&e.survey.surveyAttrs.scoreAttr.showSumScore.enabled?r("div",{staticStyle:{padding:"5px"}},[r("div",{staticStyle:{color:"#097ef3",padding:"5px"}},[e._v("总得分："),r("strong",{staticStyle:{color:"red"}},[e._v(e._s(e.survey.answerMsg.answerCheckResult.sumScore)+"分")])]),e._v(" "),"sumAfterDetail"===e.survey.surveyAttrs.scoreAttr.showSumScore.showContent?r("div",{staticStyle:{padding:"5px"}},[r("el-button",{on:{click:e.showAnswerDetail}},[e._v("查看详情")])],1):e._e()]):e._e()],e._v(" "),e.isReAnswer?r("div",{staticStyle:{"padding-top":"15px"}},[r("el-button",{on:{click:e.backReAnswer}},[e._v("重新填写")])],1):e._e()],2)])])])]):e._e()])},n=[]},HJiV:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t,n=(t=r("Nlzp"))&&t.__esModule?t:{default:t};s.default={name:"DwFooterSm",data:function(){return{footerInfo:{siteName:"调问网",siteUrl:"http://www.diaowen.net",siteIcp:"京ICP备13050030号-3",siteMail:"service@diaowen.net",sitePhone:"18888888888",versionInfo:"DWSurvey OSS V5.0 Vue",versionNumber:"OSS V5.0",versionBuilt:"20211128",years:"2012-2021"}}},mounted:function(){this.queryDWSurveyFooter()},methods:{queryDWSurveyFooter:function(){var e=this;this.axios.get(n.default.surveyFooterInfo,{}).then(function(s){var r=s.data.data;console.debug(r),e.footerInfo=r})}}}},LMU1:function(e,s,r){"use strict";r.r(s);var t=r("TPNo"),n=r.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){r.d(s,e,function(){return t[e]})}(a);var o=r("CKcK"),u=r("JFUb"),i=Object(u.a)(n.a,o.a,o.b,!1,function(e){r("iKLK"),r("9EdS")},"data-v-a62cec6a",null);s.default=i.exports},NW5o:function(e,s,r){"use strict";r.r(s);var t=r("Q6Sr"),n=r.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){r.d(s,e,function(){return t[e]})}(a);var o=r("EAXh"),u=r("JFUb"),i=Object(u.a)(n.a,o.a,o.b,!1,function(e){r("Xpv/")},"data-v-20701f0a",null);s.default=i.exports},"P5e+":function(e,s,r){"use strict";r.r(s);var t=r("HJiV"),n=r.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){r.d(s,e,function(){return t[e]})}(a);var o=r("R2ns"),u=r("JFUb"),i=Object(u.a)(n.a,o.a,o.b,!1,function(e){r("wQ1U")},"data-v-56ae8690",null);s.default=i.exports},Q6Sr:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=p(r("gDS+")),n=p(r("OjaA")),a=p(r("nMAJ")),o=p(r("NOWu")),u=p(r("nNty")),i=p(r("43hw")),l=r("BNG+"),y=r("ZXcj"),d=r("TdIW"),v=p(r("DEaP")),c=r("HCiu"),w=r("uhZI"),h=r("1y4o");function p(e){return e&&e.__esModule?e:{default:e}}s.default={name:"DwAnswerSurveyBody",components:{DwAnswerMessageBody:v.default,DwHtmlLabelCommon:i.default,DwAnswerQuestion:u.default,DwFooter:o.default,DwDesignQuestion:a.default,DwTextEditLabelCommon:n.default},model:{prop:"survey",event:"update-survey"},props:{survey:{type:Object,default:function(){}},extProps:{type:Object,default:function(){}}},data:function(){return{fullscreenLoading:!1,answer:{},isReAnswer:!1,anPwd:"",anRandomCode:"",indexResponseId:null,dbAnswerId:null}},watch:{"survey.watchEventScrollToId":{handler:function(e,s){console.debug("newVal",e),this.dwScrollIntoView()}}},mounted:function(){this.$route.query.hasOwnProperty("anPwd")&&(this.anPwd=this.$route.query.anPwd),this.anPwd=this.$route.query.anPwd,w.dwUpSurveyStyle.dwUpSurveyStyleMain(this.survey)},methods:{nextPage:function(e,s){(e<this.survey.pageAttr.curPage||(0,y.validateQuestionsBool)(this.survey.questions))&&(0,h.showPageByIndex)(this.survey,e,s)},backReAnswer:function(){this.survey.answerMsg.showAnswerMsg=!1,this.survey.answerMsg.answerMsgInfo=null,this.answer={}},configCheckAnswerPwdButton:function(){var e=this;this.fullscreenLoading=!0,setTimeout(function(){e.checkAnPwd()},200)},checkAnPwd:function(){var e=this,s={sid:this.survey.sid,anPwd:this.anPwd};(0,d.dwSurveyAnswerCheckPwd)(s).then(function(s){var r=s.data;r.hasOwnProperty("resultCode")&&200===r.resultCode?(e.$message.success("验证通过，请开始答卷"),e.survey.answerMsg.showAnswerMsg=!1,e.survey.answerMsg.showAnswerPwd=!1):e.$message.warning("密码错误！"),e.fullscreenLoading=!1})},submitAnswer:function(){(0,y.validateQuestionsBoolBySurvey)(this.survey)?null!==this.extProps&&void 0!==this.extProps&&this.extProps.hasOwnProperty("isPreview")&&this.extProps.isPreview?this.$message.warning("当前预览状态，不可以提交答卷！"):this.submitAnswerPost():this.$message.warning("请根据提示完成表单！")},submitAnswerPost:function(){var e=this,s=this.survey.sid,r=(0,c.getEsId)(this.survey),n=(0,l.getSurveyAnswerData)(this.survey);n.anPwd=this.anPwd,n.answerCommon.sid=s,this.answer=n,console.debug("answer",n);var a=(0,t.default)(n),o={surveyId:n.answerCommon.surveyId,sid:s,jsonVersion:6,answerJson:a,anRandomCode:this.anRandomCode};this.fullscreenLoading=!0,(0,d.dwSaveSurveyAnswerJson)(o).then(function(t){var n=t.data;if(n.hasOwnProperty("resultCode")&&200===n.resultCode){var a=n.data;if(a.hasOwnProperty("anCheckIsPass")&&a.hasOwnProperty("anCheckResultCode")&&a.hasOwnProperty("indexResponseId")&&a.hasOwnProperty("dbAnswerId")){var o=a.anCheckIsPass,u=a.anCheckResultCode,i=a.indexResponseId,l=a.dbAnswerId;if(o&&201===u&&null!==l){if(e.survey.answerMsg.showAnswerMsg=!0,e.survey.answerMsg.answerMsgInfo="答卷提交成功",e.survey.answerMsg.answerCheckResult=a,e.isReAnswer=!1,c.surveyAnswerLocalStorage.clearAnswerHistory(s,r),e.fullscreenLoading=!1,e.indexResponseId=i,e.dbAnswerId=l,e.survey.surveyAttrs.scoreAttr.enabled&&e.survey.surveyAttrs.scoreAttr.showSumScore.enabled&&"sumAndDetail"===e.survey.surveyAttrs.scoreAttr.showSumScore.showContent){e.$message.success("提交成功，即将显示答卷结果...");var y=e;setTimeout(function(){y.$router.push("/v6/diaowen/an/review/"+s+"/"+l)},1500)}}else if(a.hasOwnProperty("anCheckResultMsg")){var d=a.anCheckResultMsg;e.survey.answerMsg.showAnswerMsg=!0,e.survey.answerMsg.answerMsgInfo=d,e.survey.answerMsg.answerCheckResult=a,a.hasOwnProperty("anCheckResultCode")&&410===a.anCheckResultCode&&(e.isReAnswer=!0)}else e.$message.warning("数据未保存，请确认！"),e.isReAnswer=!0}}else e.$message.error("保存失败！"),e.survey.answerMsg.showAnswerMsg=!0,e.survey.answerMsg.answerMsgInfo="答卷保存失败，请重试!",e.isReAnswer=!0;e.fullscreenLoading=!1}),console.debug("submit-answer")},showAnswerDetail:function(){var e=this.survey.sid;this.$router.push("/v6/diaowen/an/review/"+e+"/"+this.dbAnswerId)},dwScrollIntoView:function(){var e=this.survey.scrollToQuIndex;console.debug("scrollToQuIndex",e),null!==e&&e>=0&&this.$refs.designQuestionRoot[e]&&this.$refs.designQuestionRoot[e].scrollIntoView({behavior:"smooth",block:"center"})}}}},R2ns:function(e,s,r){"use strict";r.d(s,"a",function(){return t}),r.d(s,"b",function(){return n});var t=function(){this.$createElement;return this._self._c,this._m(0)},n=[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"dw-footer-main"},[s("div",[s("span",[this._v("Powered by "),s("a",{attrs:{href:"https://www.diaowen.net"}},[s("strong",[this._v("DWSurvey")])])])])])}]},TPNo:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=i(r("NUBw")),n=i(r("NW5o")),a=i(r("NOWu")),o=i(r("P5e+")),u=r("HCiu");function i(e){return e&&e.__esModule?e:{default:e}}s.default={name:"DwAnswerDefaultLayout",components:{DwFooterSm:o.default,DwFooter:a.default,DwAnswerSurveyBody:n.default,DwDesignContainerBodyCenter:t.default},model:{prop:"survey",event:"update-survey"},props:{survey:{type:Object,default:function(){}},extProps:{type:Object,default:function(){}}},data:function(){return{surveyId:"",drag:!1,headerQuToolbarStyle:"",containerLRStyle:"",lrContentHeight:"",containerBodyStyle:"",questions:[],radio:"1",hover:!1,answerSurvey:{questions:[]},anBodySpan:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:20,offset:2},lg:{span:16,offset:4},xl:{span:12,offset:6}},anBodyStyle:{},customColor:"#025bb7",dwElProgressStyle:"position: fixed;z-index:10000;"}},mounted:function(){if(null!==this.extProps&&void 0!==this.extProps){var e=this.extProps;if(console.debug("extProps",e),e.hasOwnProperty("anBodySpan")){var s=e.anBodySpan;s.hasOwnProperty("xs")&&(this.anBodySpan.xs=s.xs),s.hasOwnProperty("sm")&&(this.anBodySpan.sm=s.sm),s.hasOwnProperty("md")&&(this.anBodySpan.md=s.md),s.hasOwnProperty("lg")&&(this.anBodySpan.lg=s.lg),s.hasOwnProperty("xl")&&(this.anBodySpan.xl=s.xl)}e.hasOwnProperty("anBodyStyle")&&(this.anBodyStyle=e.anBodyStyle),e.hasOwnProperty("isPreview")&&e.isPreview&&(this.dwElProgressStyle="")}u.surveyAnswerLocalStorage.clearAnswerByDate()},beforeCreate:function(){},beforeDestroy:function(){},methods:{}}},"Xpv/":function(e,s,r){},YAUU:function(e,s,r){},iKLK:function(e,s,r){},"m9k+":function(e,s,r){"use strict";r.d(s,"a",function(){return t}),r.d(s,"b",function(){return n});var t=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  答卷成功\n")])},n=[]},"mGU/":function(e,s,r){},uhZI:function(e,s,r){"use strict";function t(e){if(e.hasOwnProperty("surveyStyle")){var s=e.surveyStyle;if(s.hasOwnProperty("pageTopImg")){var r=s.pageTopImg;if(r.hasOwnProperty("src")){var t=r.src;void 0!==t&&null!==t&&(e.surveyStyle.pageTopImg.httpSrc=""+t)}}if(s.hasOwnProperty("pageBgImg")){var n=s.pageBgImg;if(n.hasOwnProperty("src")){var a=n.src;void 0!==a&&null!==a&&(n.enabled?(e.surveyStyle.pageBgImg.httpSrc=""+a,document.documentElement.style.setProperty("--dw-answer-page-bg-image","url("+e.surveyStyle.pageBgImg.httpSrc+")")):document.documentElement.style.setProperty("--dw-answer-page-bg-image","none"))}}if(s.hasOwnProperty("logoImg")){var o=s.logoImg;if(o.hasOwnProperty("src")){var u=o.src;void 0!==u&&null!==u&&(e.surveyStyle.logoImg.httpSrc=""+u)}}}}function n(e){if(e.hasOwnProperty("surveyStyle")){var s=e.surveyStyle,r=s.pageThemeColor,t=s.pageBgColor,n=s.logoBgColor,a=s.pageThemeColor1;document.documentElement.style.setProperty("--dw-answer-page-bg-color",t),document.documentElement.style.setProperty("--dw-answer-primary-color",r),document.documentElement.style.setProperty("--dw-answer-primary-color-1",a),document.documentElement.style.setProperty("--dw-answer-logo-bg-color",n),console.debug("surveyStyle",s)}}Object.defineProperty(s,"__esModule",{value:!0}),s.dwUpSurveyStyle={dwUpSurveyStyleMain:function(e){null!==e&&(t(e),n(e))},dwUpImgSrcVar:t,dwUpAnswerStyleVar:n}},vaYH:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=w(r("NW5o")),n=w(r("LMU1")),a=r("XJYT"),o=r("TdIW"),u=r("1y4o"),i=r("C8a3"),l=r("HCiu"),y=r("BNG+"),d=r("DZWd"),v=r("pC62"),c=r("YwVo");function w(e){return e&&e.__esModule?e:{default:e}}s.default={name:"DwAnswerSurveyMain",components:{DwAnswerDefaultLayout:n.default,DwAnswerSurveyBody:t.default},props:{extProps:{type:Object,default:function(){}},answerProps:{type:Object,default:function(){}}},data:function(){return{uuidList:[],survey:null,loading:!0,answerData:null,answerCheckResult:null}},watch:{$route:function(e,s){console.debug("$route to",e),this.survey=null,this.loading=!0,this.answerData=null,this.answerCheckResult=null,this.loadSurvey()}},mounted:function(){this.loadSurvey()},methods:{loadSurvey:function(){var e=this,s=a.Loading.service({fullscreen:!0,spinner:"fa-solid fa-spinner fa-spin-pulse",background:"#00000091",customClass:"dw-loading dw-answer-custom-theme",text:"数据加载中"}),r={surveyId:this.answerProps.surveyId,sid:this.answerProps.sid,answerId:this.answerProps.answerId,anPwd:this.answerProps.anPwd};this.$route.query.hasOwnProperty("anPwd")&&(r.anPwd=this.$route.query.anPwd),(0,i.getSurveyAnswerJsonBySurveyId)(r,function(r,t){r.dwDebug=!1,null!=e.extProps&&(e.extProps.hasOwnProperty("readonly")&&(r.readonly=e.extProps.readonly),e.extProps.hasOwnProperty("isShowScore")&&(r.isShowScore=e.extProps.isShowScore,r.hasOwnProperty("surveyAttrs")&&(r.isShowScore=r.surveyAttrs.scoreAttr.enabled&&e.extProps.isShowScore),r.hasOwnProperty("surveyType")&&(r.isShowScore=r.isShowScore||"exam"===r.surveyType))),e.answerCheckResult=t,t.hasOwnProperty("anCheckIsPass")&&t.hasOwnProperty("anCheckResultMsg")&&!t.anCheckIsPass&&403!==t.anCheckResultCode&&409!==t.anCheckResultCode?(r.answerMsg={showAnswerMsg:!0,answerMsgInfo:t.anCheckResultMsg,noSurveyJson:!1,answerCheckResult:t},e.survey=r):(r.answerCheckResult=t,(0,u.initAnswerBySurvey)(r),e.loadAnswerData(r),null!==e.survey&&(e.survey.answerCheckResult=e.answerCheckResult));var n=r.surveyNameObj.dwText;document.title=n+" - 调问网",e.$nextTick(function(){s.close()})},function(r){if(r.hasOwnProperty("anCheckIsPass")&&r.hasOwnProperty("anCheckResultMsg")&&!r.anCheckIsPass){var t={showAnswerMsg:!0,answerMsgInfo:r.anCheckResultMsg,noSurveyJson:!0,answerCheckResult:r};e.survey={answerMsg:t,showSurvey:!0},r.anCheckResultCode>=500&&e.$message.error(r.anCheckResultMsg)}e.$nextTick(function(){s.close()})})},loadAnswerData:function(e){var s=this;if(this.answerProps.hasOwnProperty("answerId")&&null!==this.answerProps.answerId&&void 0!==this.answerProps.answerId){var r=this.answerProps.answerId;(0,o.dwSurveyAnswerById)({answerId:r}).then(function(r){var t=r.data;200===t.resultCode?s.answerData=t.data:s.$message.warning("未找到对应的答卷记录！"),s.answerData2Survey(e)})}else this.answerData2Survey(e)},answerData2Survey:function(e){null!=this.answerData&&(0,u.parseAnswerData)(e,this.answerData),e.answerMsg={showAnswerMsg:!1,answerMsgInfo:null,noSurveyJson:!1},this.setSurveyData(e)},setSurveyData:function(e){var s=this;if(this.answerProps.hasOwnProperty("answerId")&&null!==this.answerProps.answerId&&void 0!==this.answerProps.answerId){if(e.hasOwnProperty("dwEsSurveyAnswer")&&null!==e.dwEsSurveyAnswer){var r=e.dwEsSurveyAnswer;if((void 0===this.extProps||this.extProps.hasOwnProperty("readonly")&&!this.extProps.readonly)&&r.hasOwnProperty("answerCommon")&&r.answerCommon.hasOwnProperty("anTime")&&r.answerCommon.anTime.hasOwnProperty("endAnDate")){var t=r.answerCommon.anTime.endAnDate;if(null!==t){var n=new Date(t).getTime();l.surveyAnswerLocalStorage.getSurveyAnswerActionTime(e)>n?this.$confirm("检测到当前加载的答卷数据在本地有过修改，是否使用本地最新修改。","提示",{confirmButtonText:"是，使用本地最新数据",cancelButtonText:"否，使用原始提交数据",type:"warning"}).then(function(){s.localStorage2Survey(e),s.lastSetSurvey()}).catch(function(){s.survey=e,s.lastSetSurvey()}):(this.survey=e,this.lastSetSurvey())}else this.survey=e,this.lastSetSurvey()}else this.survey=e,this.lastSetSurvey()}}else this.localStorage2Survey(e),this.lastSetSurvey()},localStorage2Survey:function(e){var s=this.getLocalStorage(e);null!==s?(this.localSurveyInitParams(s),this.survey=s):((0,u.showPageByIndex)(e,1,"next"),this.survey=e)},getLocalStorage:function(e){var s=e.sid,r=(0,l.getEsId)(e),t=l.surveyAnswerLocalStorage.getSurveyAnswerObjByLocalStorage(s,r);if(null!==t&&e.hasOwnProperty("dwVersion")&&t.hasOwnProperty("dwVersion")){if(e.dwVersion===t.dwVersion)return t;var n=(0,y.getSurveyAnswerData)(t);return(0,u.parseAnswerData)(e,n),(0,u.showPageByIndex)(e,1,"next"),e}return null},checkAnswerPwd:function(){var e=this.survey;null!=e&&e.hasOwnProperty("surveyAttrs")&&e.surveyAttrs.hasOwnProperty("anPwdAttr")&&e.surveyAttrs.anPwdAttr.hasOwnProperty("enabled")&&e.surveyAttrs.anPwdAttr.enabled&&!this.answerCheckResult.anCheckIsPass&&(this.survey.answerMsg.showAnswerMsg=!0,this.survey.answerMsg.showAnswerPwd=!0,this.survey.answerMsg.answerPwdError="请输入正确密码")},lastSetSurvey:function(){var e=this.survey;if((0,d.initAnswerSurveyProgress)(e),(0,u.showPageByIndex)(e,1,"next"),(0,v.dwSurveyAnswerLogicLoad)(e),this.checkAnswerPwd(),(0,c.dwSurveyAnswerQueryParamsLoad)(this,e),null!=this.survey&&this.survey.hasOwnProperty("firstLoadAnswer")&&(this.survey.firstLoadAnswer=!1),null!=this.survey){var s=this.answerProps.relateContactEsId;this.survey.dwParams={relateContactEsId:s}}},localSurveyInitParams:function(e){e.watchEvent="oooww",e.watchEventScrollToId="aa22",e.scrollToQuIndex=null}}}},wHW8:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t,n=(t=r("12Lk"))&&t.__esModule?t:{default:t};s.default={name:"DwAnswerSurvey",components:{DwAnswerSurveyMain:n.default},props:{extProps:{type:Object,default:function(){}},answerProps:{type:Object,default:function(){return{sid:null,answerId:null,anPwd:null}}}},data:function(){return{}},mounted:function(){null===this.answerProps||!this.answerProps.hasOwnProperty("sid")||this.answerProps.sid},methods:{}}},wQ1U:function(e,s,r){},zvDL:function(e,s,r){}}]);