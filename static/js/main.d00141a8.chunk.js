(this.webpackJsonparktyka=this.webpackJsonparktyka||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){e.exports=t(39)},19:function(e,a,t){},35:function(e,a,t){e.exports=t.p+"static/media/Exo-Black.00564525.ttf"},36:function(e,a,t){e.exports=t.p+"static/media/Exo-Bold.fd0fb607.ttf"},37:function(e,a,t){e.exports=t.p+"static/media/Exo-Light.300557d5.ttf"},38:function(e,a,t){e.exports=t.p+"static/media/Exo-Regular.8bee4f80.ttf"},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),o=t.n(i),r=(t(19),t(12),t(9)),c={width:"100%",height:"300px",maxWidth:"1500px"},s=[{stylers:[{hue:"#2c3e50"},{saturation:250}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:50},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]}],m=function(){window.location="https://maps.google.com?q=49.973436,20.456241"};var p=Object(r.GoogleApiWrapper)({apiKey:"AIzaSyBx51sncgTUQQ5Hl5hIEfM125yfwEWChu4"})((function(e){return console.log(r.Map),l.a.createElement(r.Map,Object.assign({},e,{styles:s,zoom:14,style:c,initialCenter:{lat:49.973436,lng:20.456241}}),l.a.createElement(r.Marker,{position:{lat:49.973436,lng:20.456241},color:"blue",title:"ARKTYKA",onClick:m,icon:"https://raw.githubusercontent.com/natalianowak/arktyka-bochnia/master/public/arktyka-small.png"}))})),d=t(10),u=t(2),h=t(3),y=t(5),f=t(4),E=t(6),k=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(y.a)(this,Object(f.a)(a).call(this,e))).state={menuOpen:!1},t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,a={container:{position:"absolute",top:0,left:0,zIndex:"99",display:"flex",alignItems:"center",background:"white",width:"100%",color:"#23538a"},logo:{margin:"0 auto"},body:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"100vh",filter:this.state.menuOpen?"blur(2px)":null,transition:"filter 0.5s ease"}},t=[l.a.createElement("a",{href:"#1",style:{color:"#23538a",textDecoration:"none"}},"O firmie"),l.a.createElement("a",{href:"#2",style:{color:"#23538a",textDecoration:"none"}},"Oferta"),l.a.createElement("a",{href:"#4",style:{color:"#23538a",textDecoration:"none"}},"Certyfikaty"),l.a.createElement("a",{href:"#5",style:{color:"#23538a",textDecoration:"none"}},"Kontakt"),l.a.createElement("a",{style:{textDecoration:"none",color:"#23538a"},href:"tel:+48 510 311 682"},l.a.createElement("div",{style:{margin:"70px auto"}},l.a.createElement("img",{src:"telefon-orange.png",alt:"telefon"}),l.a.createElement("h3",{className:"contactFlex"},"+48 510 311 682")))].map((function(a,t){return l.a.createElement(g,{key:t,delay:"".concat(.1*t,"s"),onClick:function(){e.handleLinkClick()}},a)}));return l.a.createElement("div",null,l.a.createElement("div",{style:a.container},l.a.createElement(b,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()},color:"#23538a"}),l.a.createElement("div",{style:a.logo},l.a.createElement("img",{style:{width:"150px",padding:"20px 0",marginRight:"40px"},alt:"arktyka-logo",src:"arktyka-logo.png"}))),l.a.createElement(w,{open:this.state.menuOpen},t))}}]),a}(l.a.Component),g=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(y.a)(this,Object(f.a)(a).call(this,e))).state={hover:!1},t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this,a={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"1.2rem",padding:"1rem 0",margin:"0 5%",cursor:"pointer",color:this.state.hover?"#cd572f":"#23538a",transition:"color 0.2s ease-in-out",animation:"0.5s slideIn forwards",animationDelay:this.props.delay},line:{width:"90%",height:"1px",background:"#cd572f",margin:"0 auto",animation:"0.5s shrink forwards",animationDelay:this.props.delay}};return l.a.createElement("div",{style:a.container},l.a.createElement("div",{style:a.menuItem,onMouseEnter:function(){e.handleHover()},onMouseLeave:function(){e.handleHover()},onClick:this.props.onClick},this.props.children),l.a.createElement("div",{style:a.line}))}}]),a}(l.a.Component),w=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(y.a)(this,Object(f.a)(a).call(this,e))).state={open:!!t.props.open&&t.props.open},t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{position:"absolute",top:0,left:0,height:this.state.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"white",color:"#23538a",transition:"height 0.3s ease",zIndex:2},menuList:{paddingTop:"120px"}};return l.a.createElement("div",{style:e.container},this.state.open?l.a.createElement("div",{style:e.menuList},this.props.children):null)}}]),a}(l.a.Component),b=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(y.a)(this,Object(f.a)(a).call(this,e))).state={open:!!t.props.open&&t.props.open,color:t.props.color?t.props.color:"black"},t}return Object(E.a)(a,e),Object(h.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,a={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px"},line:{height:"2px",width:"20px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return l.a.createElement("div",{style:a.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},l.a.createElement("div",{style:Object(d.a)({},a.line,{},a.lineTop)}),l.a.createElement("div",{style:Object(d.a)({},a.line,{},a.lineMiddle)}),l.a.createElement("div",{style:Object(d.a)({},a.line,{},a.lineBottom)}))}}]),a}(l.a.Component),x=(l.a.Component,k);var z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"mountain"},l.a.createElement("div",{className:"hideOnDesktop"},l.a.createElement(x,null)),l.a.createElement("div",{className:"nav hideOnMobile"},l.a.createElement("ul",{className:"navList paddingRightAndLeft wrapper"},l.a.createElement("li",null,l.a.createElement("img",{style:{width:"160px",paddingRight:"100px"},alt:"arktyka-logo",src:"arktyka-logo.png"})),l.a.createElement("li",null,l.a.createElement("a",{href:"#1"},"O firmie")),l.a.createElement("li",null,"\u2022"),l.a.createElement("li",null,l.a.createElement("a",{href:"#2"},"Nasza oferta")),l.a.createElement("li",null,"\u2022"),l.a.createElement("li",null,l.a.createElement("a",{href:"#4"},"Certyfikaty")),l.a.createElement("li",null,"\u2022"),l.a.createElement("li",null,l.a.createElement("a",{href:"#5"},"Kontakt")))),l.a.createElement("div",{id:"1",className:"about paddingRightAndLeft"},l.a.createElement("h1",null,"O firmie"),l.a.createElement("p",{className:"textCenterFlex"},"Firma arktyka dzia\u0142a w bran\u017cy ch\u0142odnictwa, klimatyzacji i\xa0wentylacji."),l.a.createElement("p",{className:"boldText textCenterFlex"},"Podstaw\u0105 naszej pracy s\u0105 najnowsze technologie, profesjonalna obs\u0142uga oraz zadowolenie klient\xf3w."),l.a.createElement("p",null,"Wieloletnie do\u015bwiadczenie zdobyte w kraju i\xa0za granic\u0105 pozwala firmie",l.a.createElement("span",{style:{fontFamily:"Exo Black"}}," ARKTYKA "),"na \u015bwiadczenie kompleksowych us\u0142ug w\xa0zakresie: projektowania, doboru urz\u0105dze\u0144, monta\u017cu i\xa0konserwacji instalacji oraz urz\u0105dze\u0144 ch\u0142odniczych, klimatyzacyjnych i\xa0wentylacyjnych."),l.a.createElement("p",{className:"boldText hideOnMobile textCenterFlex"},"Atutami firmy Arktyka s\u0105:"),l.a.createElement("ul",{className:"aboutList hideOnMobile"},l.a.createElement("li",null,"wieloletnie do\u015bwiadczenie na rynku"),l.a.createElement("li",null,"najwy\u017csza jako\u015b\u0107 rozwi\u0105za\u0144"),l.a.createElement("li",null,"\u015bwiadczenie kompleksowych us\u0142ug"),l.a.createElement("li",null,"ekologiczne technologie"),l.a.createElement("li",null,"indywidualne podej\u015bcie do klineta"),l.a.createElement("li",null,"szybko\u015b\u0107, staranno\u015b\u0107 i\xa0dok\u0142adno\u015b\u0107 w realizacji"),l.a.createElement("li",null,"innowacyjno\u015b\u0107")))),l.a.createElement("div",{className:"offer paddingClass",id:"2"},l.a.createElement("h1",null,"Oferta"),l.a.createElement("p",{className:"textCenterFlex"},"Przygotowujemy projekty wykonawcze i\xa0powykonawcze oraz zajmujemy si\u0119 ich pe\u0142n\u0105 realizacje zar\xf3wno w\xa0obiektach gastronomicznych, biurowych, przemys\u0142owych jak i\xa0dla klient\xf3w indywidualnych."),l.a.createElement("p",{className:"boldText textCenterFlex"},"Zapraszamy do wsp\xf3\u0142pracy"),l.a.createElement("div",{className:"offerBigBox"},l.a.createElement("div",{className:"offerBox box foo"},l.a.createElement("img",{style:{},className:"",src:"icons8-air-conditioner-blue.png",alt:"klimatyzacja"}),l.a.createElement("p",null,"Klimatyzacja mieszka\u0144, obiekt\xf3w biurowych i\xa0handlowych")),l.a.createElement("div",{className:"offerBox box foo"},l.a.createElement("img",{style:{},className:"",src:"icons8-central-air-conditioning-blue.png",alt:"klimatyzacjaSystemowa"}),l.a.createElement("p",null,"Systemy klimatyzacji kana\u0142owej"))),l.a.createElement("div",{className:"offerBigBox"},l.a.createElement("div",{className:"offerBox box foo"},l.a.createElement("img",{style:{},className:"",src:"icons8-fan-blue.png",alt:"wentylacja"}),l.a.createElement("p",null,"Systemy wentylacji obiekt\xf3w przemys\u0142owych")),l.a.createElement("div",{className:"offerBox box foo"},l.a.createElement("img",{style:{},className:"",src:"icons8-cooling-blue.png",alt:"ch\u0142odninctwo"}),l.a.createElement("p",null,"Monta\u017c lad i\xa0szaf ch\u0142odniczych"))),l.a.createElement("div",{className:"offerBigBox"},l.a.createElement("div",{className:"offerBox box foo"},l.a.createElement("img",{style:{},className:"",src:"icons8-service-blue.png",alt:""}),l.a.createElement("p",null,"Przegl\u0105dy gwarancyjne i\xa0pogwarancyjne")),l.a.createElement("div",{className:"offerBox box foo"},l.a.createElement("img",{style:{},className:"",src:"icons8-support-blue.png",alt:""}),l.a.createElement("p",null,"Naprawa urz\u0105dze\u0144")))),l.a.createElement("div",{className:"certificate paddingClass",id:"4"},l.a.createElement("h1",null,"Certyfikaty"),l.a.createElement("ul",{className:"aboutList"},l.a.createElement("li",null,"Szkolenie z\xa0zakresu odzysku czynnik\xf3w zi\u0119bniczych-ch\u0142odniczych -\xa01998r."),l.a.createElement("li",null,"Prawa i\xa0obowi\u0105zki dostawc\xf3w sprz\u0119tu elektrycznego na rynku europejskim -\xa02000r."),l.a.createElement("li",null,"Zmiany w polskim systemie bada\u0144 i certyfikacji oraz zasad nadzoru rynku -\xa02000r."),l.a.createElement("li",null,"Prawne aspekty obs\u0142ugi reklamacji -\xa02003r."),l.a.createElement("li",null,"Sprzeda\u017c profesjonalna -\xa02004r."),l.a.createElement("li",null,"Dochodzenie i za\u0142atwianie reklamacji przez firmy na rynku europejskim -\xa02005r."),l.a.createElement("li",null,"Kurs spawania gazowego -\xa02006r."),l.a.createElement("li",null,"Uprawnienina elektryczne SEP do 1KW wraz z pomiarami -\xa02009r."),l.a.createElement("li",null,"Zarz\u0105dzanie ma\u0142\u0105 firm\u0105 -\xa02010r."))),l.a.createElement("div",{className:"contact paddingClass",id:"5"},l.a.createElement("h1",{style:{color:"white"}},"Kontakt"),l.a.createElement("div",{className:"contactLeft"},l.a.createElement("h3",{className:"boldText"},"ARKTYKA Ch\u0142odnictwo, Klimatyzacja\xa0i\xa0Wentylacja "),l.a.createElement("h3",{className:"boldText"},"Jacek R\u0119bilas "),l.a.createElement("h3",{className:"boldText"},"__________"),l.a.createElement("h3",{className:"contactFlex"},l.a.createElement("img",{style:{alignItems:"center"},className:"contactIcon",src:"domek.png",alt:"adres"}),"32-700\xa0Bochnia, ul.\xa0\u0141ych\xf3w\xa0100 "),l.a.createElement("h3",{className:"contactFlex"},l.a.createElement("img",{style:{alignItems:"center"},className:"contactIcon",src:"nipRegon.png",alt:"nipRegon"}),"NIP:\xa0868-116-45-79, REGON:\xa0121378970"),l.a.createElement("h3",{className:"contactFlex"},l.a.createElement("img",{style:{alignItems:"center"},className:"contactIcon",src:"telefon.png",alt:"telefon"}),l.a.createElement("a",{style:{color:"white",textDecoration:"none"},href:"tel:+48 510 311 682"},"+48 510 311 682")),l.a.createElement("h3",{className:"contactFlex"},l.a.createElement("img",{style:{alignItems:"center"},className:"contactIcon",src:"mail.png",alt:"mail"}),l.a.createElement("a",{style:{color:"white",textDecoration:"none"},href:"mailto:arktyka.bochnia@gmail.com"},"arktyka.bochnia@gmail.com"))),l.a.createElement("div",{className:"contactRight"},l.a.createElement("form",{action:"https://formspree.io/arktyka.bochnia@gmail.com",method:"POST"},l.a.createElement("input",{type:"text",name:"name",placeholder:"Imi\u0119 i nazwisko"}),l.a.createElement("input",{type:"email",name:"_replyto",placeholder:"Adres e-mail"}),l.a.createElement("textarea",{type:"text",name:"name",placeholder:"Tre\u015b\u0107 wiadomo\u015bci"}),l.a.createElement("button",{type:"submit",value:"Send",className:"login-form-button box foo"},"WY\u015aLIJ")))),l.a.createElement("div",{className:"map"},l.a.createElement(p,{className:"mapContainer"})),l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"paddingRightAndLeft"},"Projekt graficzny: ",l.a.createElement("a",{href:"https://dslowik.pl/",className:"boldText"},"Danuta\xa0S\u0142owik"),", Wykonanie: ",l.a.createElement("a",{href:"",className:"boldText"},"Natalia\xa0Nowak"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(35),t(36),t(37),t(38);o.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.d00141a8.chunk.js.map