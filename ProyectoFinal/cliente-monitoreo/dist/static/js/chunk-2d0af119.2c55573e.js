(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af119"],{"0d6e":function(c,e,s){"use strict";s.r(e);var t=s("7a23");function d(c,e,s,d,i,a){var r=Object(t["w"])("DriveIndicador");return Object(t["r"])(),Object(t["d"])(r)}var i=Object(t["g"])("div",null,[Object(t["g"])("img",{src:"http://www.doctormanzana.com/uploads/7/5/5/9/7559600/published/blog-header-hdd-ssd.jpg?1559204500",class:"my-4 img-thumbnail text-right",style:{height:"250px",display:"block",margin:"0 auto 0 auto"}})],-1),a={class:"row container-fluid text-center col-auto"},r={class:"col-3"},l={class:"card text-black text-center bg-success"},o={class:"card-header bg-success"},n={class:"card-body bg-success"},b=Object(t["g"])("div",{class:"card-footer bg-success"},[Object(t["g"])("small",null,"support: its@edu.ar")],-1),u={class:"col-3"},g={class:"card text-black text-center bg-success"},_={class:"card-header bg-success"},j={class:"card-body bg-success"},O=Object(t["g"])("div",{class:"card-footer bg-success"},[Object(t["g"])("small",null,"support: its@edu.ar")],-1),p={class:"col-3"},v={class:"card text-black text-center bg-success"},k={class:"card-header bg-success"},f={class:"card-body bg-success"},h=Object(t["g"])("div",{class:"card-footer bg-success"},[Object(t["g"])("small",null,"support: its@edu.ar")],-1),m={class:"col-3"},y={class:"card text-black text-center bg-success"},w={class:"card-header bg-success"},x={class:"card-body bg-success"},I=Object(t["g"])("div",{class:"card-footer bg-success"},[Object(t["g"])("small",null,"support: its@edu.ar")],-1);function P(c,e,s,d,P,z){return Object(t["r"])(),Object(t["f"])(t["a"],null,[i,Object(t["g"])("div",a,[Object(t["g"])("div",r,[Object(t["g"])("div",l,[Object(t["g"])("div",o,[Object(t["g"])("h6",null,Object(t["y"])(P.descripcion_disk_total),1)]),Object(t["g"])("div",n,[Object(t["g"])("h4",null,Object(t["y"])(P.valor_disk_total),1)]),b])]),Object(t["g"])("div",u,[Object(t["g"])("div",g,[Object(t["g"])("div",_,[Object(t["g"])("h6",null,Object(t["y"])(P.descripcion_disk_used),1)]),Object(t["g"])("div",j,[Object(t["g"])("h4",null,Object(t["y"])(P.valor_disk_used),1)]),O])]),Object(t["g"])("div",p,[Object(t["g"])("div",v,[Object(t["g"])("div",k,[Object(t["g"])("h6",null,Object(t["y"])(P.descripcion_disk_free),1)]),Object(t["g"])("div",f,[Object(t["g"])("h4",null,Object(t["y"])(P.valor_disk_free),1)]),h])]),Object(t["g"])("div",m,[Object(t["g"])("div",y,[Object(t["g"])("div",w,[Object(t["g"])("h6",null,Object(t["y"])(P.descripcion_disk_perc),1)]),Object(t["g"])("div",x,[Object(t["g"])("h4",null,Object(t["y"])(P.valor_disk_perc),1)]),I])])])],64)}var z=s("8055"),D=s.n(z),S={name:"DriveIndicador",data:function(){return{lista:[],valor_disk_total:"",valor_disk_free:"",valor_disk_used:"",valor_disk_perc:"",descripcion_disk_total:"",descripcion_disk_free:"",descripcion_disk_used:"",descripcion_disk_perc:"",clienteIP:"",cliente_razon:""}},methods:{addIndicadores:function(){var c=this,e=D()(this.clienteIP);e.on("disk-info",(function(e){c.valor_disk_total=e.datatotal,c.descripcion_disk_total=e.descripciontotal})),e.on("disk-info",(function(e){c.valor_disk_free=e.datafree,c.descripcion_disk_free=e.descripcionfree})),e.on("disk-info",(function(e){c.valor_disk_used=e.dataused,c.descripcion_disk_used=e.descripcionused})),e.on("disk-info",(function(e){c.valor_disk_perc=e.dataperc,c.descripcion_disk_perc=e.descripcionperc}))},traerCliente:function(){this.clienteIP="http://"+localStorage.getItem("localIP"),this.cliente_razon=localStorage.getItem("localRZ")}},mounted:function(){this.traerCliente(),this.addIndicadores()}},C=s("6b0d"),J=s.n(C);const R=J()(S,[["render",P]]);var Z=R,q={name:"Socket",components:{DriveIndicador:Z}};const A=J()(q,[["render",d]]);e["default"]=A}}]);
//# sourceMappingURL=chunk-2d0af119.2c55573e.js.map