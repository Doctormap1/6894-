/*Copyright 2000-2005,Coremetrics 4.0.23B $Revision: 33616 $*/

if(!cGB){var cGB=true;if(!cm_ClientID){var cm_ClientID="90010394";}if(!cm_HOST){var cm_HOST="test.coremetrics.com/cm?";}
if(!cm_ClientTS){var dt=new Date();var cm_ClientTS=dt.getTime();}if(!cm_TrackLink){var cm_TrackLink="A";}
if(!cm_DelayHandlerReg){var cm_DelayHandlerReg="F";}if(!cm_SkipHandlerReg){var cm_SkipHandlerReg="";}
if(!cm_TrackTime){var cm_TrackTime=false;}if(!cm_TrackImpressions){var cm_TrackImpressions="RS";}
if(!cm_SecureTags||cm_SecureTags==null){var cm_SecureTags="|2|3|";}if(!cm_FirstPartyDetect){var cm_FirstPartyDetect=false;}
if(!cm_DownloadExtensions){var cm_DownloadExtensions=null;}if(!cm_UseUTF8){var cm_UseUTF8=false;}
if(!cm_FormError){var cm_FormError="";}if(cm_UseCookie==null){var cm_UseCookie=true;}if(!cm_TimeoutSecs){var cm_TimeoutSecs=15;}
if(!cmUA){var cmUA=new Object();cmUA["MSIE"]=2083;}if(!documentefaultLimit){var documentefaultLimit=8197;}if(cGQ==null){var cGQ=true;}
if(!cGO){var cGO=1024;}if(!cGR){var cGR=600000;}if(!encodeURIComponent){var encodeURIComponent=null;}var cG8;var cG8Index;var cG6=document;var cGP=window.location;var cGT;var cG7=new _cG7();cG6.cmTagCtl=cG7;var CI=cmStartTagSet;var CJ=cmSendTagSet;var cG1=0;var cG0=new Array("vn1","vn2","st","pi","rs","ec","rf","ul");var cmLastPageID=null;var cGA=null;
if(!cG4){var cG4=5000;}if(!cG5){var cG5=200;}var cG2=new Object();var cG3=new Object();var cGM=navigator.appVersion;var cGN=navigator.userAgent;var cGS=cGN.indexOf("Opera")>=0;var cGU=cGN.indexOf("Safari")>=0;var cmT2=-1;var cmT3=-1;var cGC="";var cGD="";var cGE="";var cGF="";var cGG="";var cGH="";var cGI="";var cGJ="";var cGK="";var cGL="";var chost=null;
var cci=null;CI();if(cm_UseCookie){var pi=cI("cmRS","pi","");if(pi!="")cmLastPageID=pi;chost=cm_HOST;cm_HOST=cI("cmRS","ho",chost);cci=cm_ClientID;cm_ClientID=cI("cmRS","ci",cci);var cT3=cI("cmRS","t3","");if(cT3!=""){cGA=cT3;}var cT1=cI("cmRS","t1","");if(cT1!=""&&(!cGA||cm_ClientTS - cGA<cGR)){cmAddShared("st",cT1);var ul=cI("cmRS","ul","");var rf=cI("cmRS","rf","");var cT2=cI("cmRS","t2","");var cT4=cI("cmRS","t4","");if(cm_TrackTime)cN(cT1,cT2,cT3,cT4,true,pi);var hr=cI("cmRS","hr","");if(hr!=""){var ti=cI("cmRS","lti","");if(cm_ClientTS - ti<cGR){var nm=cI("cmRS","ln","");cM(cT1,ti,nm,hr,true,pi,ul,rf);}}var cV6=cI("cmRS","ac","");var cV7=cI("cmRS","fd","");if((cV6!="")||(cV7!="")){var ti=cI("cmRS","fti","");if(cm_ClientTS - ti<cGR){var cV9=cI("cmRS","fn","");var cV0=cI("cmRS","fu","");cL(cT1,ti,cV9,cV6,cV0,cV7,true,pi,ul,rf);}}var cError=unescape(cI("cmRS","uer",""));CH(cT1,cT3,cError,true,pi);}CC("cmRS");}if(!cGS&&(cF(4)||CD(5))){this.onload=cK(this,"onload",this.onload,"cY(e)",cY);this.onunload=cK(this,"onunload",this.onunload,"cZ(e)",cZ);if(cm_DelayHandlerReg.indexOf("L")==-1)window.cX("main");if(cm_DelayHandlerReg.indexOf("F")==-1)cU();}CJ(1);if(chost)cm_HOST=chost;if(cci)cm_ClientID=cci;}
function cmStartTagSet(){if(cG8)return;cG8=new Array();cG8[0]=new _cm();cG8Index=1;}
function cmAddShared(nm,val){if(cG8)cG8[0][nm]=val;}
function cmSendTagSet(){var request;while((request=C7(arguments[0]))!=null){c9(request);}cG8=null;}
function CQ(pl,host,qs){this.pl=pl;this.hosts=host.split(",");if(qs)this.qs=qs;this.cM5=CR;}
function CR(){var a=arguments;var h=a[0]?a[0]:this.hosts[0];return this.pl+"//"+h+(this.qs?this.qs:"");}
function _cG7(){this.cM0=new Object();this.uls=new Object();this.rfs=new Object();this.cTI=new Array();this.cPE=0;this.normalizeURL=c2;this.getPageID=c1;this.getPluginPageID=cmGetPluginPageID;}
function cmGetPluginPageID(cVA){splitClientIDs=cm_ClientID.split(";");finalClientID=cVA;for(n=0;n<splitClientIDs.length;n++){if(splitClientIDs[n]==cVA){finalClientID=cm_ClientID;break;}}return this.getPageID(finalClientID);}
function c1(cVA){var pi=cG7.cM0[cVA];return pi?pi:"";}
function CS(cVA){var ul=cG7.uls[cVA];if(!ul)ul=cGP.href;return ul?ul:"";}
function CT(cVA){var rf=cG7.rfs[cVA];if(!rf)rf=cG6.referrer;return rf?rf:"";}
function CP(href){var h=cGT;if(!h)h=cGT=cG7.normalizeURL(cGP.href,false);var a=href.indexOf("#");if(a>=0&&a<=h.length){var ha=h.indexOf("#");if(ha<0)ha=h.length;if(href.substring(0,a)==h.substring(0,ha))return href.substring(a);}return href;}
function c2(url,isHref){if(isHref){url=CP(url);var pfx=cGP.protocol+"//"+cGP.host;if(url.indexOf(pfx)==0)url=url.substring(pfx.length);}return cD(url);}
function c4(){for(b in cmUA)if(cGM.indexOf(b)!=-1)return cmUA[b];return documentefaultLimit;}
function C0(n){if(cG7){if(cG7.cTI&&cG7.cTI[n])cG7.cTI[n].cmLD=true;cG7.cPE--;if(cG7.onResponse)cG7.onResponse(n);}}
function CN(n){if(cG7){cG7.cPE--;var img=null;if(cG7.cTI&&cG7.cTI[n]){img=cG7.cTI[n];img.cmLD=true;}if(cG7.onError&&(!img||!img.cmTO))cG7.onError(3,img);}}
function c6(host,n){if(cG3)cG3[host]=true;C0(n);}
function CO(n){if(cG7&&cG7.cTI&&cG7.cTI[n]&&!(cG7.cTI[n].cmLD)){var img=cG7.cTI[n];img.cmTO=img.src;img.src="";if(cG7.onError)cG7.onError(4,img.cmTO);}}
function c8(host){if(!cG3||cG3[host])return true;var dt=new Date();if((dt.getTime()-cG2[host])>cG4)return true;return false;}
function CV(host,url){if(!cG2[host]||c8(host)){var img=new Image();var i=cG1;cG7.cTI[cG1++]=img;if(!cG2[host]){var dt=new Date();cG2[host]=dt.getTime();img.onload=new Function("if(c6)c6('"+host+"',"+i+");");}else{img.onload=new Function("if(C0)C0("+i+");");}img.onerror=new Function("if(CN)CN("+i+");");if(cG7.onTagSent)cG7.onTagSent(url,i);img.src=url;setTimeout('if(CO)CO('+i+');',cm_TimeoutSecs * 1000);}else{setTimeout('if(CV)CV("'+host+'","'+url+'");',cG5);}}
function c9(img){if(cI("documentisabled"))return;var limit=c4();var url=img.cM5(img.hosts[0]);if(url.length>limit)url=url.substring(0,limit-6)+"&err=O";cG7.cPE++;CV(img.hosts[0],url);}
function cC(){if(cG8)cG8[cG8Index++]=this;else{var request=this.getImgSrc(arguments[0],1);c9(request);return request;}}
function C4(src,tgt,compact){if(!compact){if(!src.rf){if(!cG6.referrer)tgt.rf="";else tgt.rf=cG6.referrer;}else if(src!=tgt)tgt.rf=src.rf;if(!src.ul||src.ul==""||src.ul=="(none)")tgt.ul=cGP.href;else if(src!=tgt)tgt.ul=src.ul;var ul=cG7.normalizeURL(tgt.ul,false);if(ul!="")tgt.ul=ul;}}
function C5(tgt,compact){if(cm_FirstPartyDetect&&!compact){if(cI("cmRS")||cI("TestSess")){tgt.ts="Y";}else{CB("TestSess","Y");tgt.ts=cI("TestSess");}tgt.tp=cI("TestPerm");if(tgt.tp!="Y"){dt.setHours(dt.getHours()+5);CB("TestPerm","Y",dt.toGMTString());tgt.tp=cI("TestPerm");}}}
function C6(tag,cV3){var qs="";if(tag.tid)qs+="tid="+tag.tid;var isPV=(tag.tid==1||(tag.pc&&tag.pc.charAt(0)=='Y'));if(!tag.lp&&isPV)tag.lp=cmLastPageID;for(var cOb in tag){if(!tag[cOb]||tag[cOb]==""||tag[cOb].constructor==Function||cOb=="qs"||cOb=="tid")continue;if(cV3&&cV3[cOb]==tag[cOb])continue;if(qs!="")qs+="&";qs+=cD(cOb)+"="+cE(cD(tag[cOb]));}if(!tag.rs&&tag.ci){if(tag.pi&&isPV&&c1(tag.ci)=="")cG7.cM0[tag.ci]=tag.pi;if(tag.ul)cG7.uls[tag.ci]=tag.ul;if(tag.rf)cG7.rfs[tag.ci]=tag.rf;}if(cV3&&cm_SecureTags.indexOf("|"+tag.tid+"|")!=-1)cV3.protocol="https:";return qs;}
function C8(cV3){var cm_pl=location.protocol;if(cV3&&cV3.protocol)cm_pl=cV3.protocol;if(cm_pl!="http:"&&cm_pl!="https:")cm_pl="http:";return cm_pl;}
function c0(){var a=arguments;C4(this,this,a[0]);C5(this,a[0]);var cV3=new Object();var qs=C6(this,cV3);var req=new CQ(C8(cV3),cm_HOST,qs);return a[1]?req:req.cM5();}
function C7(){var cV3,first,p,a,pl,lim,len,l,i,tq;if(!cG8||cG8.length<2)return null;cV3=cG8[0];first=cG8[1];cV3.ci=first.ci;for(i=2;i<cG8.length;i++){if(cV3.ci.indexOf(cG8[i].ci)==-1){cV3.ci+=";"+cG8[i].ci;}}for(i=0;i<cG0.length;i++){p=cG0[i];if(!cV3[p])cV3[p]=first[p];}a=arguments;C4(first,cV3,a[0]);C5(cV3,a[0]);pl=C8(cV3);img=new CQ(pl,cm_HOST);img.qs=C6(cV3);lim=c4();len=0;l=pl.length+img.hosts[0].length+img.qs.length;if(l>len)len=l;for(i=1;i<cG8.length;i++){tq=C6(cG8[i],cV3);if(i>1&&len+tq.length+1>lim){for(j=1;j<cG8.length-i+1;j++)cG8[j]=cG8[j+i-1];cG8.length=cG8.length-i+1;break;}len+=tq.length+1;img.qs+="&"+tq;}if(i==cG8.length)cG8=null;return img;}
function _cm(){var i,a=arguments;this.ci=cm_ClientID;for(i=0;i<a.length;i++)this[a[i]]=a[++i];this.write=cC;this.getImgSrc=c0;this.writeImg=cC;this.st=cm_ClientTS;this.vn1="4.0.23B";if(cF(5.5)||!cF(0)){var ec=(cm_UseUTF8&&encodeURIComponent)||cGU?"utf-8":cG6.charset;if(!ec)ec=cG6.defaultCharset;if(!ec)ec=cG6.characterSet;this.ec=ec;}}
function cD(s){var z="";s=z+(!s?"":s);return s.split("'").join(z).split("\"").join(z).split("\r").join(z).split("\n").join(z);}
function cE(s){var i=0,j;while(s.charAt(i)==" "&&i!=s.length)i++;j=s.length-1;while(s.charAt(j)==" "&&j!=0)j--;s=s.substring(i,j+1);if(cm_UseUTF8&&encodeURIComponent)s=encodeURIComponent(s);else s=escape(s);s=s.split("+").join("%2B");return s;}
function cF(ver){var i=cGM.indexOf("MSIE");if(i!=-1)return(parseFloat(cGM.substring(i+5))>=ver);return false;}
function CD(ver){return(cGN.indexOf("Gecko")!=-1&&parseInt(cGM)>=ver);}
function cI(nm,skey,cV5){var dc=cG6.cookie;var cV4=cJ(nm,dc,";");if(!skey||!cV4){if(!cV4&&cV5!=null){return cV5;}return cV4;}cV4=cJ(skey,cV4,"&");if(!cV4&&cV5!=null){return cV5;}return unescape(cV4);}
function CL(){var cookies,dc,nv,i,c=0;dc=cG6.cookie;if(dc){cookies=dc.split(";");c=cookies.length;for(i=0;i<cookies.length;i++){nv=cookies[i].split("=");if(nv.length<2||nv[1]==null||nv[1]==""){c--;}}}return c;}
function CB(nm,val,expires){var err,len,v,dc=cG6.cookie;err=null;len=val.length+1;if(!cI(nm)){len+=nm.length;}if(len>4096)err=1;else if(dc){if(CL()>=20)err=2;else if(dc.length+len+2>4096)err=1;}if(err){if(cG7.onError)cG7.onError(err,name);return false;}v=nm+"="+val+";path=/";if(expires)v+=";expires="+expires;cG6.cookie=v;return true;}
function CC(nm){var v=cI(nm);if(v!=null){var dt=new Date();dt.setYear(1973);cG6.cookie=nm+"=;path=/;expires="+dt.toGMTString();}return v;}
function cJ(nm,src,sep){var pfx,s,begin,end,obj=null;pfx=nm+"=";s=sep+' ';begin=src.indexOf(s+pfx);if(begin==-1){s=sep;begin=src.indexOf(s+pfx);}if(begin==-1){begin=src.indexOf(pfx);if(begin!=0){return null;}}else{begin+=s.length;}end=src.indexOf(s,begin);if(end==-1){end=src.length;}return src.substring(begin+pfx.length,end);}
function cK(elt,type,handle,fName,f){if(handle){var event=handle.toString();if(event.indexOf(fName)==-1){if(cGU&&event.indexOf("function "+"(")==0){fName=fName+";"+event.substring(event.indexOf("{"),event.length);}else{elt["_c_"+type]=handle;fName="if(!e)var e=null;"+fName+";return this._c_"+type+"("+(cF(5)?"":"e")+");"}var newfunc=new Function("e",fName);return newfunc;}else{return handle;}}else{return f;}}
function CG(e){var e;if(cF(4)){if(window.event){e=window.event.srcElement;}}else if(e){if(CD(5)){e=e.currentTarget;}else{e=e.target;}}return e;}
function CU(cm,cVBH,pi,dest,ref){var ul,rf;cm.pi=pi?pi:c1(cVBH);if(cGQ){if(dest||ref){cm.ul=dest?dest:"";cm.rf=ref?ref:"";}else{ul=CS(cVBH);rf=CT(cVBH);if(cm.pi==""||ul.indexOf("cm_")>0||(rf!=""&&rf.indexOf(cGP.protocol+"//"+cGP.host)!=0)){cm.ul=ul;cm.rf=rf;}}}}
function cL(t1,t3,fname,cVB,url,field,resent,pi,dest,ref){var cm=new _cm("tid","10");CU(cm,cm.ci,pi,dest,ref);cm.st=t1;cm.ti=t3;cm.fo=fname;cm.ac=cVB;cm.hr=url;cm.fi=field;if(resent)cm.rs="Y";cm.write(1);}
function cM(t1,ti,name,href,resent,pi,dest,ref){var cm=new _cm("tid","8");CU(cm,cm.ci,pi,dest,ref);cm.st=t1;cm.ti=ti;cm.nm=name;cm.hr=href;if(resent)cm.rs="Y";cm.write(1);}
function cN(t1,t2,cx,t4,resent,pi){var cm=new _cm("tid","11");cm.pi=pi?pi:c1(cm.ci);cm.st=t1;cm.lc=t2;cm.lx=t4;cm.cx=cx;if(resent)cm.rs="Y";cm.write(1);}
function CM(href){var n,len,a,q;if((n=href.indexOf("?"))==-1)n=href.lastIndexOf("/");if(n!=-1){len=href.indexOf("#",n);if(len==-1)len=href.length;while(n!=-1&&n<len){n=href.indexOf("cm_",n);if(n!=-1){a=href.indexOf("&",n);if(a==-1)a=len;q=href.indexOf("=",n);if(q!=-1&&q<a)this[href.substring(n,q)]=href.substring(q+1,a);n=a;}}}}
function CK(href,trackSP,trackRE){var cm,link,sp,re;if((trackSP||trackRE)&&href){cm=new _cm("tid","9");link=new CM(CP(href));if(trackSP){sp=cm.cm_sp_o=link.cm_sp_o;if(!sp)sp=cm.cm_sp=link.cm_sp;}if(trackRE){re=cm.cm_re_o=link.cm_re_o;if(!re)re=cm.cm_re=link.cm_re;}if(sp||re){cm.pi=c1(cm.ci);cm.st=cm_ClientTS;cm.write(1);}}}
function CH(t1,ti,msg,resent,pi){if(msg!=cGL){var cm=new _cm("tid","12");cm.pi=pi?pi:c1(cm.ci);cm.st=t1;cm.ti=ti;if(resent)cm.rs="Y";cm.er=msg;cm.write(1);cGL=cm_FormError;}}
function cO(cVC,cVB){var dt,url="";cVB=cVC+":"+cVB;if(cVC!=-1){var curForm=cG6.forms[cVC];if(cF(5))url=curForm.attributes.action.nodeValue;else if(curForm.attributes.getNamedItem){url=curForm.attributes.getNamedItem('action');if(url)url=url.value;}else url=curForm.action;if(!url)url="";}if(cV(url)){dt=new Date();cGH=dt.getTime();cGF=cVB;cGE=cG7.normalizeURL(url,true);cL(cm_ClientTS,cGH,cGD,cGF,cGE,cGC,false);cGG=cGC;cGC="";}else{cGF="";}}
function cP(e){CI();var e=CG(e);cO(e?e.cM1:-1,"S");CA(1);CJ(1);CE();}
function cQ(e){var e=CG(e);if(e)cO(e.cM1,"R");}
function cR(e){var e=CG(e);if(e)e.cM3="xyzzy";}
function cS(e){var e=CG(e);if(e)e.cM3=e.value;}
function cT(e){var e=CG(e);if(e&&(e.type!="submit")&&(e.type!="reset")){if(e.value!=e.cM3){cGC=cGC+e.cM1+":"+e.cM2+":"+e.name+";";}}}
function CF(e){var e=CG(e);if(e)cGC=cGC+e.cM1+":"+e.cM2+":"+e.name+";";}
function cU(){if(cm_SkipHandlerReg.indexOf("F")==-1){var i,form,cV9,j,e;for(i=0;i<cG6.forms.length;i++){form=cG6.forms[i];if(form.cM1==null){form.cM1=i;if(cF(5))cV9=form.attributes.name.nodeValue;else if(form.attributes.getNamedItem){cV9=form.attributes.getNamedItem('name');if(cV9)cV9=cV9.value;}else cV9=form.name;if(!cV9)cV9="";cGD=cGD+cV9+":"+i+";";form.onsubmit=cK(form,"onsubmit",form.onsubmit,"cP(e)",cP);form.onreset=cK(form,"onreset",form.onreset,"cQ(e)",cQ);for(j=0;j<form.elements.length;j++){e=form.elements[j];e.cM1=i;e.cM2=j;e.cM3="";e.onfocus=cK(e,"onfocus",e.onfocus,"cS(e)",cS);e.onblur=cK(e,"onblur",e.onblur,"cT(e)",cT);e.onchange=cK(e,"onchange",e.onchange,"cR(e)",cR);if(e.type=='submit'||e.type=='button')e.onclick=cK(e,"onclick",e.onclick,"CF(e)",CF);}}}}}
function cV(path){if(cm_TrackLink==true||cm_TrackLink=="A")return true;else{if(cm_TrackLink=="E"&&path.indexOf("/")!=0)return true;var de;if((de=cm_DownloadExtensions)!=null){var p=path.lastIndexOf(".");if(p!=-1){var ext=path.substring(p);for(var e in de){if(ext==de[e])return true;}}}return false;}}
function cW(e){CI();var e=CG(e);if(e)C9(e);CA(1);CJ(1);CE();}
function C9(e){cGI="";cGJ="";cGK="";var type=e.tagName.toUpperCase();if(type=="AREA"){cGJ=e.href?e.href:"";var p=e.parentElement?e.parentElement:e.parentNode;if(p!=null)cGI=p.name?p.name:"";}else{while(type!="A"&&type!="HTML"){if(!e.parentElement)e=e.parentNode;else e=e.parentElement;if(e)type=e.tagName.toUpperCase();}if(type=="A"){cGJ=e.href?e.href:"";cGI=e.name?e.name:"";}}cGJ=cG7.normalizeURL(cGJ,true);if(cV(cGJ)==true){var dt=new Date();cGK=dt.getTime();cM(cm_ClientTS,cGK,cGI,cGJ,false);}else{cGJ="";}}
function cX(phase){CI();var i,lnk,imp,trackSP,trackRE;imp=cm_TrackImpressions;trackSP=(imp.indexOf("S")!=-1);trackRE=(imp.indexOf("R")!=-1);for(i=0;i<cG6.links.length;i++){lnk=cG6.links[i];if(cm_SkipHandlerReg.indexOf("L")==-1){if(!CD(5)){lnk.onclick=cK(lnk,"onclick",lnk.onclick,"cW(e)",cW);}else if(!lnk.cM4){lnk.addEventListener("click",cW,false);lnk.cM4=1;}}if(phase=="onload"){CK(lnk.href,trackSP,trackRE);}}CJ(1);}
function cY(e){var dt=new Date();cmT2=dt.getTime();CH(cm_ClientTS,cmT2,cm_FormError,false);if(!cGS&&(cF(4)||CD(5))){window.cX("onload");cU();}cGB=null;}
function cZ(e){cG3=null;CI();if(cGC!=""){cO(-1,"U");}CA(0);CH(cm_ClientTS,cmT3,cm_FormError,false);CJ(1);CE();if(cG7.cPE==0){var pi=escape(c1(cm_ClientID));CB("cmRS","t3="+cmT3+"&pi="+pi);}if(cG7.onUnload)cG7.onUnload();if(cF(5)&&!cF(5.5)&&window.parent!=window)cG7.cTI=null;else{if(!cGU){for(i=0;i<cG7.cTI.length;i++){cG7.cTI[i].onload=null;cG7.cTI[i].onerror=null;}}}}
function CA(force){var dt=new Date();var cx=dt.getTime();if(cm_TrackTime&&(cmT3==-1||force==1||(cx-cmT3)>10000)){cN(cm_ClientTS,cmT2,cx,cGA,false);}cmT3=cx;}
function CE(){if(cm_UseCookie){var cVF,cVG,pg,cVD,cVE="";cVF=cGA?"&t4="+cGA:"";cVG=(cGJ!="")?"&lti="+cGK+"&ln="+escape(cGI)+"&hr="+escape(cGJ):"";pg=new Object();CU(pg,cm_ClientID);cVD="&t1="+cm_ClientTS+"&t2="+cmT2+"&t3="+cmT3+cVF+cVG+"&fti="+cGH+"&fn="+escape(cGD)+"&ac="+cGF+"&fd="+escape(cGG)+"&uer="+escape(cm_FormError)+"&fu="+escape(cGE)+"&pi="+escape(pg.pi)+"&ho="+escape(cm_HOST)+"&ci="+escape(cm_ClientID);if(pg.ul&&pg.rf&&pg.ul.length+pg.rf.length<cGO)cVE="&ul="+escape(pg.ul)+"&rf="+escape(pg.rf);if(!CB("cmRS",cVD+cVE))if(!CB("cmRS",cVD))CB("cmRS","t3="+cmT3+"&pi="+escape(pg.pi));}}

function cmSetProduction(){cm_HOST="data.coremetrics.com/cm?";}

function cmSetStaging() {
	cmSetProduction();
	cm_ClientID="90026697";
}

function cmCreateImpressionTag(pageID, trackSP, trackRE) {
		var cm = new _cm("tid","9","vn2","4.0");
		cm.pi = pageID;
		if (trackSP){
			cm.cm_sp = trackSP;
		}
		if (trackRE){
			cm.cm_re = trackRE;
		}		
		cm.st = cm_ClientTS;
        cm.writeImg();
}

function cmCreateManualLinkClickTag(href,name) {	
	if (cmHandleLinkClick == null && C9 != null) {
		var cmHandleLinkClick = C9;
	}
	if (cmHandleLinkClick != null) {		
		var link = new Object();
		link.tagName = "A";
		link.name = name; 
		link.href = href; 
		cmHandleLinkClick(link);
	}	
}

function cmGetCookie(name) {
var dc = document.cookie;
var prefix = name + "=";
var begin = dc.indexOf("; " + prefix);
if (begin == -1) {
begin = dc.indexOf(prefix);
if (begin != 0) return null;
} else begin += 2;
var end = document.cookie.indexOf(";", begin);
if (end == -1) end = dc.length;
return unescape(dc.substring(begin + prefix.length, end));}


function getDefPgID(t) { 
if (!t){t ="";}
var cmT = document.title;
if (cmT.indexOf("Bank of America |") == 0) {cmT = cmT.substr(17);}
cmT = cmT + " (" + t + ")";
return(cmT);}

function cmAdStr(){
var linkCt = document.links.length;
var lurl,i,ndx,ad;
var adSt = "";
for (i = 0; i < linkCt; i++) {
lurl = document.links[i].href;
ndx = lurl.lastIndexOf("adlink=");
ndx2 = lurl.lastIndexOf("/adtrack/");
if ((ndx >= 0) && (ndx2>0)) {
ad = lurl.substring(ndx+7, lurl.length).toLowerCase();
if (ad.indexOf("&amp;") >= 0){ad = ad.substring(0, ad.indexOf("&amp;"));}
adSt += "|" + ad + "|";}}
return adSt;}

function cmCreateRegistrationTag(pageID, templateName, cust_id, olb_customer,  state, advisorInfo, categoryID) {
var t=new _cm("tid","1","vn2","e4.0");
if (pageID) {t.pi = pageID;}
else {t.pi = getDefPgID(templateName);}
t.pc="Y";t.cg=categoryID;
t.li = 101;t.ps1 = cust_id;t.ps2 = advisorInfo;t.ps3 = state;t.ps4 = olb_customer;
var a = cmAdStr();
var mx = 100;
var length = a.length;
if (length<=mx) {t.pv11=a;} 
else {t.pv11=a.substring(0,mx);
if (length<=2*mx){t.pv12=a.substring(mx,length);} 
else {
t.pv12=a.substring(mx,2*mx);
if (length<=3*mx){t.pv13=a.substring(2*mx,length);}
else {
t.pv13=a.substring(2*mx,3*mx);
if (length<=4*mx){t.pv14=a.substring(3*mx,length);}
else {
t.pv14=a.substring(3*mx,4*mx);
t.pv15=a.substring(4*mx,length);}}}}
t.writeImg();
}

if ( window.location.href.indexOf("stage") != -1 ) {
	cm_HOST="data.coremetrics.com/eluminate?";
	cm_ClientID="90026697";
}

/* Added cmPageviewOnClick for WR 17926 */
/*
 * PageView Tag for OnClick Events.
 */
function cmPageviewOnClick(pageID,theURL,category) {
	if (pageID && pageID != "")
    {
		var cm = new _cm("tid", "1", "vn2", "e3.1");
        cm.pi = pageID;
        if (theURL && theURL != "")
		{
        	cm.ul = theURL;
		}

		if(category) {
			cm.cg = category;
		}

	 	// if available, override the referrer with the frameset referrer
		if (parent.cm_ref != null) {
			cm.rf = parent.cm_ref;
			parent.cm_ref = document.URL;
		}

        var imgRequest = new Image();
        imgRequest.src = cm.getImgSrc();
	}
	return true;
}
