(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{ymdj:function(e,t,a){"use strict";a.r(t);a("DjyN");var n,l,r,i=a("NUBc"),s=(a("g9YV"),a("wCAj")),o=(a("iQDF"),a("+eQT")),c=(a("+L6B"),a("2/Rp")),d=(a("OaEy"),a("2fM7")),m=a("q1tI"),p=a.n(m),u=a("MuoO"),h=a("mjZG"),g=a("usdK"),y=d["a"].Option,E=(n=Object(u["connect"])(e=>{var t=e.supplier,a=e.loading;return{supplier:t,loading:a.models.supplier}}),n((r=class extends m["Component"]{constructor(){super(...arguments),this.state={startValue:null,endValue:null,endOpen:!1,id:"",page:1,limit:h["f"]},this.disabledStartDate=(e=>{var t=this.state.endValue;return!(!e||!t)&&e.valueOf()>t.valueOf()}),this.disabledEndDate=(e=>{var t=this.state.startValue;return!(!e||!t)&&e.valueOf()<=t.valueOf()}),this.onChange=((e,t)=>{this.setState({[e]:t})}),this.onStartChange=(e=>{this.onChange("startValue",e)}),this.onEndChange=(e=>{this.onChange("endValue",e)}),this.handleStartOpenChange=(e=>{e||this.setState({endOpen:!0})}),this.handleEndOpenChange=(e=>{this.setState({endOpen:e})})}componentWillMount(){var e=this.props.location.query.id;this.state.id=e,this.props.dispatch({type:"supplier/supp_fetchCorderDetail",payload:{id:e}})}render(){var e=this.props.location.query.company,t=this.state,n=t.startValue,l=t.endValue,r=t.endOpen,m=this.props,u=m.supplier,h=m.loading,E=u.supp_CorderDetail,v=u.supp_CorderGoodsConditionList,x=v||{cars:null,goods:null,sites:null},_=(x.cars,x.goods,x.sites,E||{total:0,list:[]}),f=_.total,C=_.list;console.log(E),console.log(u);var k=[{align:"center",title:"\u88c5\u8f66\u65f6\u95f4",dataIndex:"real_load_time",key:"real_load_time"},{align:"center",title:"\u8f66\u724c",dataIndex:"car_head_code",key:"car_head_code"},{align:"center",title:"\u5ba2\u6237",dataIndex:"supp_company_name",key:"supp_company_name"},{align:"center",title:"\u6c14\u6e90",dataIndex:"goods_name",key:"goods_name"},{align:"center",title:"\u7ad9\u70b9",dataIndex:"site_num",key:"site_num"},{align:"center",title:"\u88c5\u8d27\u91cf\uff08\u5428\uff09",dataIndex:"load_quantity",key:"load_quantity"},{align:"center",title:"\u5378\u8d27\u91cf\uff08\u5428\uff09",dataIndex:"unload_quantity",key:"unload_quantity"},{align:"center",title:"\u7ed3\u7b97\u91cf\uff08\u5428\uff09",dataIndex:"charge_quantity",key:"charge_quantity"},{align:"center",title:"\u9500\u552e\u4ef7\uff08\u5143/\u5428\uff09",dataIndex:"price",key:"price"},{align:"center",title:"\u9500\u552e\u989d\uff08\u5143\uff09",dataIndex:"fee_sum",key:"fee_sum"},{align:"center",title:"\u989d\u5916\u8d39\u7528\uff08\u5143\uff09",dataIndex:"extra_fee",key:"extra_fee"},{align:"center",title:"\u5408\u8ba1\u91d1\u989d\uff08\u5143\uff09",dataIndex:"total_sum",key:"total_sum"},{align:"center",title:"\u72b6\u6001",dataIndex:"status",key:"status",render:(e,t,a)=>{var n="";return 28==t.status&&(n="\u5f85\u5bf9\u8d26"),29==t.status&&(n="\u5bf9\u8d26\u4e2d"),30==t.status&&(n="\u5df2\u5bf9\u8d26"),31==t.status&&(n="\u5f85\u7ed3\u6b3e"),32==t.status&&(n="\u5df2\u5f00\u7968"),33==t.status&&(n="\u5df2\u5b8c\u6210"),34==t.status&&(n="\u5df2\u53d6\u6d88"),p.a.createElement("span",null,n)}}];return p.a.createElement("div",null,p.a.createElement("div",{className:"toolbar"},p.a.createElement(c["a"],{type:"primary",icon:"rollback",onClick:()=>g["a"].goBack()},"\u8fd4\u56de"),p.a.createElement("img",{src:a("645o"),style:{margin:"0 20px 0 40px"},alt:""}),p.a.createElement("span",{className:"font-purple-color",style:{fontWeight:"bold"}},e),p.a.createElement("span",{className:"font-purple-color",style:{marginLeft:40}},"\u9500\u552e\u5bf9\u8d26\u660e\u7ec6\xa0\xa0\xa0\xa0",e," \u81f3 ",e),p.a.createElement("div",{style:{float:"right"}},p.a.createElement(c["a"],{type:"primary",style:{marginRight:10}},"\u5168\u90e8\u5bfc\u51fa"),p.a.createElement(c["a"],{type:"primary",style:{marginRight:10}},"\u786e\u8ba4\u5bf9\u8d26"),p.a.createElement(c["a"],{type:"primary",style:{marginRight:10}},"\u786e\u8ba4\u4ed8\u6b3e"),p.a.createElement(c["a"],{type:"primary"},"\u786e\u8ba4\u5f00\u7968"))),p.a.createElement("div",{style:{padding:"0px 24px 60px"}},p.a.createElement("div",{style:{textAlign:"right",fontSize:"1rem",margin:"20px 0px"}},p.a.createElement("span",{style:{marginRight:10}},"\u5bf9\u8d26\u65f6\u95f4"),p.a.createElement(o["a"],{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm",value:n,placeholder:"\u8d77\u59cb\u65f6\u95f4",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange}),p.a.createElement("span",{style:{margin:"0 10px"}},"-"),p.a.createElement(o["a"],{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm",value:l,placeholder:"\u622a\u6b62\u65f6\u95f4",onChange:this.onEndChange,open:r,onOpenChange:this.handleEndOpenChange}),p.a.createElement("span",{style:{margin:"0 12px 0 20px"}},"\u8f66\u724c"),p.a.createElement(d["a"],{defaultValue:"jack",style:{width:"8.75rem"}},p.a.createElement(y,{value:"jack"},"\u9500\u552e\u989d"),p.a.createElement(y,{value:"lucy"},"\u5229\u6da6\u8d21\u732e"),p.a.createElement(y,{value:"Yiminghe"},"\u8d21\u732e\u5360\u6bd4")),p.a.createElement("span",{style:{margin:"0 12px 0 20px"}},"\u6c14\u6e90"),p.a.createElement(d["a"],{defaultValue:"jack",style:{width:"8.75rem"}},p.a.createElement(y,{value:"jack"},"\u9500\u552e\u989d"),p.a.createElement(y,{value:"lucy"},"\u5229\u6da6\u8d21\u732e"),p.a.createElement(y,{value:"Yiminghe"},"\u8d21\u732e\u5360\u6bd4")),p.a.createElement("span",{style:{margin:"0 12px 0 20px"}},"\u7ad9\u70b9"),p.a.createElement(d["a"],{defaultValue:"jack",style:{width:"8.75rem"}},p.a.createElement(y,{value:"jack"},"\u9500\u552e\u989d"),p.a.createElement(y,{value:"lucy"},"\u5229\u6da6\u8d21\u732e"),p.a.createElement(y,{value:"Yiminghe"},"\u8d21\u732e\u5360\u6bd4")),p.a.createElement("span",{style:{margin:"0 12px 0 20px"}},"\u72b6\u6001"),p.a.createElement(d["a"],{defaultValue:"",style:{width:"8.75rem"}},p.a.createElement(y,{value:"",style:{color:"#7B7B7B"}},"\u5168\u90e8"),p.a.createElement(y,{value:"1",style:{color:"#FFAD4D"}},"\u5bf9\u8d26\u4e2d"),p.a.createElement(y,{value:"2",style:{color:"#8FCBFF"}},"\u5df2\u5bf9\u8d26"),p.a.createElement(y,{value:"3",style:{color:"#91A5F5"}},"\u5df2\u5f00\u7968"))),p.a.createElement("div",{className:"table-container"},p.a.createElement(s["a"],{columns:k,dataSource:C,loading:h,pagination:!1,rowKey:e=>e.id,highLightColor:"#aaa",rowClassName:(e,t)=>{return t%2===0?"oddRow":"evenRow"}})),p.a.createElement("div",{style:{textAlign:"center",marginTop:40}},p.a.createElement(i["a"],{current:this.state.page,pageSize:this.state.limit,total:parseInt(f)}))))}},l=r))||l);t["default"]=E}}]);