(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[182],{18:(e,l,a)=>{"use strict";a.d(l,{cn:()=>n});var r=a(2905),s=a(9660);function n(){for(var e=arguments.length,l=Array(e),a=0;a<e;a++)l[a]=arguments[a];return(0,s.QP)((0,r.$)(l))}},743:(e,l,a)=>{"use strict";a.d(l,{Card:()=>c});var r=a(2840),s=a(18),n=a(495),t=a(6964);let i=function(e){let{external:l=!1,newTab:a=!1,scroll:r=!0}=e,s=(0,n.useRouter)(),i=(0,t.useRef)(null),u=(0,t.useRef)(null),o=(0,t.useRef)(0),d=(0,t.useRef)(!1),c=(0,t.useRef)(0),b=(0,t.useCallback)(e=>{if(e.target){let l=e.target,a=+new Date,r=null==l?void 0:l.closest("a");c.current=e.button,r?d.current=!0:(d.current=!1,o.current=a)}},[s,i,u,o]),v=(0,t.useCallback)(e=>{var n,t;if(null===(n=u.current)||void 0===n?void 0:n.href){let n=+new Date-o.current;(null===(t=u.current)||void 0===t?void 0:t.href)&&n<=250&&!d.current&&0===c.current&&!e.ctrlKey&&(l?window.open(u.current.href,a?"_blank":"_self"):s.push(u.current.href,{scroll:r}))}},[s,i,u,o]);return(0,t.useEffect)(()=>{let e=i.current,l=new AbortController;return e&&(e.addEventListener("mousedown",b,{signal:l.signal}),e.addEventListener("mouseup",v,{signal:l.signal})),()=>{l.abort()}},[i,u,s]),{card:{ref:i},link:{ref:u}}};var u=a(4058),o=a.n(u),d=a(1981);let c=e=>{let{card:l,link:a}=i({}),{className:n,doc:u,relationTo:c,showCategories:b,title:v}=e,{slug:m,categories:h,meta:x,title:g}=u||{},{description:f,image:A}=x||{},p=h&&Array.isArray(h)&&h.length>0,j=v||g,N=null==f?void 0:f.replace(/\s/g," "),y="/".concat(c,"/").concat(m);return(0,r.jsxs)("article",{className:(0,s.cn)("border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer",n),ref:l.ref,children:[(0,r.jsxs)("div",{className:"relative w-full ",children:[!A&&(0,r.jsx)("div",{className:"",children:"No image"}),A&&"string"!=typeof A&&(0,r.jsx)(d.$,{resource:A,size:"33vw"})]}),(0,r.jsxs)("div",{className:"p-4",children:[b&&p&&(0,r.jsx)("div",{className:"uppercase text-sm mb-4",children:b&&p&&(0,r.jsx)("div",{children:null==h?void 0:h.map((e,l)=>{if("object"==typeof e){let{title:a}=e,s=l===h.length-1;return(0,r.jsxs)(t.Fragment,{children:[a||"Untitled category",!s&&(0,r.jsx)(t.Fragment,{children:", \xa0"})]},l)}return null})})}),j&&(0,r.jsx)("div",{className:"prose",children:(0,r.jsx)("h3",{children:(0,r.jsx)(o(),{className:"not-prose",href:y,ref:a.ref,children:j})})}),f&&(0,r.jsx)("div",{className:"mt-2",children:f&&(0,r.jsx)("p",{children:N})})]})]})}},1165:(e,l,a)=>{"use strict";a.d(l,{VideoMedia:()=>i});var r=a(2840),s=a(18),n=a(6964),t=a(2901);let i=e=>{let{onClick:l,resource:a,videoClassName:i}=e,u=(0,n.useRef)(null);if((0,n.useEffect)(()=>{let{current:e}=u;e&&e.addEventListener("suspend",()=>{})},[]),a&&"object"==typeof a){let{filename:e}=a;return(0,r.jsx)("video",{autoPlay:!0,className:(0,s.cn)(i),controls:!1,loop:!0,muted:!0,onClick:l,playsInline:!0,ref:u,children:(0,r.jsx)("source",{src:"".concat((0,t.y)(),"/media/").concat(e)})})}return null}},1981:(e,l,a)=>{"use strict";a.d(l,{$:()=>i});var r=a(2840),s=a(6964),n=a(3756),t=a(1165);let i=e=>{var l;let{className:a,htmlElement:i="div",resource:u}=e,o="object"==typeof u&&(null==u?void 0:null===(l=u.mimeType)||void 0===l?void 0:l.includes("video")),d=i||s.Fragment;return(0,r.jsx)(d,{...null!==i?{className:a}:{},children:o?(0,r.jsx)(t.VideoMedia,{...e}):(0,r.jsx)(n.ImageMedia,{...e})})}},2555:(e,l,a)=>{Promise.resolve().then(a.bind(a,7365)),Promise.resolve().then(a.t.bind(a,4058,23)),Promise.resolve().then(a.bind(a,7594)),Promise.resolve().then(a.bind(a,3398)),Promise.resolve().then(a.bind(a,743)),Promise.resolve().then(a.bind(a,4955)),Promise.resolve().then(a.bind(a,3756)),Promise.resolve().then(a.bind(a,1165)),Promise.resolve().then(a.bind(a,4580)),Promise.resolve().then(a.bind(a,8480))},2901:(e,l,a)=>{"use strict";a.d(l,{y:()=>n});var r=a(4795),s=a(74);let n=()=>{if(r.A){let e=window.location.protocol,l=window.location.hostname,a=window.location.port;return"".concat(e,"//").concat(l).concat(a?":".concat(a):"")}return s.env.VERCEL_PROJECT_PRODUCTION_URL?"https://".concat(s.env.VERCEL_PROJECT_PRODUCTION_URL):"http://localhost:3000"}},3398:(e,l,a)=>{"use strict";a.d(l,{FormBlock:()=>C});var r=a(2840),s=a(495),n=a(6964),t=a(4650),i=a(7776),u=a(5013),o=a(18),d=a(7007),c=a(3669);let b=e=>{let{className:l,ref:a,...s}=e;return(0,r.jsx)(d.bL,{className:(0,o.cn)("peer h-4 w-4 shrink-0 rounded border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",l),ref:a,...s,children:(0,r.jsx)(d.C1,{className:(0,o.cn)("flex items-center justify-center text-current"),children:(0,r.jsx)(c.A,{className:"h-4 w-4"})})})};var v=a(1067);let m=(0,a(4785).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),h=e=>{let{className:l,ref:a,...s}=e;return(0,r.jsx)(v.b,{className:(0,o.cn)(m(),l),ref:a,...s})},x=()=>(0,r.jsx)("div",{className:"mt-2 text-red-500 text-sm",children:"This field is required"}),g=e=>{let{children:l,className:a,width:s}=e;return(0,r.jsx)("div",{className:a,style:{maxWidth:s?"".concat(s,"%"):void 0},children:l})};var f=a(7449);let A=[{label:"Afghanistan",value:"AF"},{label:"\xc5land Islands",value:"AX"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"American Samoa",value:"AS"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Anguilla",value:"AI"},{label:"Antarctica",value:"AQ"},{label:"Antigua and Barbuda",value:"AG"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Aruba",value:"AW"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"},{label:"Bahamas",value:"BS"},{label:"Bahrain",value:"BH"},{label:"Bangladesh",value:"BD"},{label:"Barbados",value:"BB"},{label:"Belarus",value:"BY"},{label:"Belgium",value:"BE"},{label:"Belize",value:"BZ"},{label:"Benin",value:"BJ"},{label:"Bermuda",value:"BM"},{label:"Bhutan",value:"BT"},{label:"Bolivia",value:"BO"},{label:"Bosnia and Herzegovina",value:"BA"},{label:"Botswana",value:"BW"},{label:"Bouvet Island",value:"BV"},{label:"Brazil",value:"BR"},{label:"British Indian Ocean Territory",value:"IO"},{label:"Brunei Darussalam",value:"BN"},{label:"Bulgaria",value:"BG"},{label:"Burkina Faso",value:"BF"},{label:"Burundi",value:"BI"},{label:"Cambodia",value:"KH"},{label:"Cameroon",value:"CM"},{label:"Canada",value:"CA"},{label:"Cape Verde",value:"CV"},{label:"Cayman Islands",value:"KY"},{label:"Central African Republic",value:"CF"},{label:"Chad",value:"TD"},{label:"Chile",value:"CL"},{label:"China",value:"CN"},{label:"Christmas Island",value:"CX"},{label:"Cocos (Keeling) Islands",value:"CC"},{label:"Colombia",value:"CO"},{label:"Comoros",value:"KM"},{label:"Congo",value:"CG"},{label:"Congo, The Democratic Republic of the",value:"CD"},{label:"Cook Islands",value:"CK"},{label:"Costa Rica",value:"CR"},{label:"Cote D'Ivoire",value:"CI"},{label:"Croatia",value:"HR"},{label:"Cuba",value:"CU"},{label:"Cyprus",value:"CY"},{label:"Czech Republic",value:"CZ"},{label:"Denmark",value:"DK"},{label:"Djibouti",value:"DJ"},{label:"Dominica",value:"DM"},{label:"Dominican Republic",value:"DO"},{label:"Ecuador",value:"EC"},{label:"Egypt",value:"EG"},{label:"El Salvador",value:"SV"},{label:"Equatorial Guinea",value:"GQ"},{label:"Eritrea",value:"ER"},{label:"Estonia",value:"EE"},{label:"Ethiopia",value:"ET"},{label:"Falkland Islands (Malvinas)",value:"FK"},{label:"Faroe Islands",value:"FO"},{label:"Fiji",value:"FJ"},{label:"Finland",value:"FI"},{label:"France",value:"FR"},{label:"French Guiana",value:"GF"},{label:"French Polynesia",value:"PF"},{label:"French Southern Territories",value:"TF"},{label:"Gabon",value:"GA"},{label:"Gambia",value:"GM"},{label:"Georgia",value:"GE"},{label:"Germany",value:"DE"},{label:"Ghana",value:"GH"},{label:"Gibraltar",value:"GI"},{label:"Greece",value:"GR"},{label:"Greenland",value:"GL"},{label:"Grenada",value:"GD"},{label:"Guadeloupe",value:"GP"},{label:"Guam",value:"GU"},{label:"Guatemala",value:"GT"},{label:"Guernsey",value:"GG"},{label:"Guinea",value:"GN"},{label:"Guinea-Bissau",value:"GW"},{label:"Guyana",value:"GY"},{label:"Haiti",value:"HT"},{label:"Heard Island and Mcdonald Islands",value:"HM"},{label:"Holy See (Vatican City State)",value:"VA"},{label:"Honduras",value:"HN"},{label:"Hong Kong",value:"HK"},{label:"Hungary",value:"HU"},{label:"Iceland",value:"IS"},{label:"India",value:"IN"},{label:"Indonesia",value:"ID"},{label:"Iran, Islamic Republic Of",value:"IR"},{label:"Iraq",value:"IQ"},{label:"Ireland",value:"IE"},{label:"Isle of Man",value:"IM"},{label:"Israel",value:"IL"},{label:"Italy",value:"IT"},{label:"Jamaica",value:"JM"},{label:"Japan",value:"JP"},{label:"Jersey",value:"JE"},{label:"Jordan",value:"JO"},{label:"Kazakhstan",value:"KZ"},{label:"Kenya",value:"KE"},{label:"Kiribati",value:"KI"},{label:"Democratic People's Republic of Korea",value:"KP"},{label:"Korea, Republic of",value:"KR"},{label:"Kosovo",value:"XK"},{label:"Kuwait",value:"KW"},{label:"Kyrgyzstan",value:"KG"},{label:"Lao People's Democratic Republic",value:"LA"},{label:"Latvia",value:"LV"},{label:"Lebanon",value:"LB"},{label:"Lesotho",value:"LS"},{label:"Liberia",value:"LR"},{label:"Libyan Arab Jamahiriya",value:"LY"},{label:"Liechtenstein",value:"LI"},{label:"Lithuania",value:"LT"},{label:"Luxembourg",value:"LU"},{label:"Macao",value:"MO"},{label:"Macedonia, The Former Yugoslav Republic of",value:"MK"},{label:"Madagascar",value:"MG"},{label:"Malawi",value:"MW"},{label:"Malaysia",value:"MY"},{label:"Maldives",value:"MV"},{label:"Mali",value:"ML"},{label:"Malta",value:"MT"},{label:"Marshall Islands",value:"MH"},{label:"Martinique",value:"MQ"},{label:"Mauritania",value:"MR"},{label:"Mauritius",value:"MU"},{label:"Mayotte",value:"YT"},{label:"Mexico",value:"MX"},{label:"Micronesia, Federated States of",value:"FM"},{label:"Moldova, Republic of",value:"MD"},{label:"Monaco",value:"MC"},{label:"Mongolia",value:"MN"},{label:"Montenegro",value:"ME"},{label:"Montserrat",value:"MS"},{label:"Morocco",value:"MA"},{label:"Mozambique",value:"MZ"},{label:"Myanmar",value:"MM"},{label:"Namibia",value:"NA"},{label:"Nauru",value:"NR"},{label:"Nepal",value:"NP"},{label:"Netherlands",value:"NL"},{label:"Netherlands Antilles",value:"AN"},{label:"New Caledonia",value:"NC"},{label:"New Zealand",value:"NZ"},{label:"Nicaragua",value:"NI"},{label:"Niger",value:"NE"},{label:"Nigeria",value:"NG"},{label:"Niue",value:"NU"},{label:"Norfolk Island",value:"NF"},{label:"Northern Mariana Islands",value:"MP"},{label:"Norway",value:"NO"},{label:"Oman",value:"OM"},{label:"Pakistan",value:"PK"},{label:"Palau",value:"PW"},{label:"Palestinian Territory, Occupied",value:"PS"},{label:"Panama",value:"PA"},{label:"Papua New Guinea",value:"PG"},{label:"Paraguay",value:"PY"},{label:"Peru",value:"PE"},{label:"Philippines",value:"PH"},{label:"Pitcairn",value:"PN"},{label:"Poland",value:"PL"},{label:"Portugal",value:"PT"},{label:"Puerto Rico",value:"PR"},{label:"Qatar",value:"QA"},{label:"Reunion",value:"RE"},{label:"Romania",value:"RO"},{label:"Russian Federation",value:"RU"},{label:"Rwanda",value:"RW"},{label:"Saint Helena",value:"SH"},{label:"Saint Kitts and Nevis",value:"KN"},{label:"Saint Lucia",value:"LC"},{label:"Saint Pierre and Miquelon",value:"PM"},{label:"Saint Vincent and the Grenadines",value:"VC"},{label:"Samoa",value:"WS"},{label:"San Marino",value:"SM"},{label:"Sao Tome and Principe",value:"ST"},{label:"Saudi Arabia",value:"SA"},{label:"Senegal",value:"SN"},{label:"Serbia",value:"RS"},{label:"Seychelles",value:"SC"},{label:"Sierra Leone",value:"SL"},{label:"Singapore",value:"SG"},{label:"Slovakia",value:"SK"},{label:"Slovenia",value:"SI"},{label:"Solomon Islands",value:"SB"},{label:"Somalia",value:"SO"},{label:"South Africa",value:"ZA"},{label:"South Georgia and the South Sandwich Islands",value:"GS"},{label:"Spain",value:"ES"},{label:"Sri Lanka",value:"LK"},{label:"Sudan",value:"SD"},{label:"Suriname",value:"SR"},{label:"Svalbard and Jan Mayen",value:"SJ"},{label:"Swaziland",value:"SZ"},{label:"Sweden",value:"SE"},{label:"Switzerland",value:"CH"},{label:"Syrian Arab Republic",value:"SY"},{label:"Taiwan",value:"TW"},{label:"Tajikistan",value:"TJ"},{label:"Tanzania, United Republic of",value:"TZ"},{label:"Thailand",value:"TH"},{label:"Timor-Leste",value:"TL"},{label:"Togo",value:"TG"},{label:"Tokelau",value:"TK"},{label:"Tonga",value:"TO"},{label:"Trinidad and Tobago",value:"TT"},{label:"Tunisia",value:"TN"},{label:"Turkey",value:"TR"},{label:"Turkmenistan",value:"TM"},{label:"Turks and Caicos Islands",value:"TC"},{label:"Tuvalu",value:"TV"},{label:"Uganda",value:"UG"},{label:"Ukraine",value:"UA"},{label:"United Arab Emirates",value:"AE"},{label:"United Kingdom",value:"GB"},{label:"United States",value:"US"},{label:"United States Minor Outlying Islands",value:"UM"},{label:"Uruguay",value:"UY"},{label:"Uzbekistan",value:"UZ"},{label:"Vanuatu",value:"VU"},{label:"Venezuela",value:"VE"},{label:"Viet Nam",value:"VN"},{label:"Virgin Islands, British",value:"VG"},{label:"Virgin Islands, U.S.",value:"VI"},{label:"Wallis and Futuna",value:"WF"},{label:"Western Sahara",value:"EH"},{label:"Yemen",value:"YE"},{label:"Zambia",value:"ZM"},{label:"Zimbabwe",value:"ZW"}],p=e=>{let{type:l,className:a,ref:s,...n}=e;return(0,r.jsx)("input",{className:(0,o.cn)("flex h-10 w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:s,type:l,...n})},j=[{label:"Alabama",value:"AL"},{label:"Alaska",value:"AK"},{label:"Arizona",value:"AZ"},{label:"Arkansas",value:"AR"},{label:"California",value:"CA"},{label:"Colorado",value:"CO"},{label:"Connecticut",value:"CT"},{label:"Delaware",value:"DE"},{label:"Florida",value:"FL"},{label:"Georgia",value:"GA"},{label:"Hawaii",value:"HI"},{label:"Idaho",value:"ID"},{label:"Illinois",value:"IL"},{label:"Indiana",value:"IN"},{label:"Iowa",value:"IA"},{label:"Kansas",value:"KS"},{label:"Kentucky",value:"KY"},{label:"Louisiana",value:"LA"},{label:"Maine",value:"ME"},{label:"Maryland",value:"MD"},{label:"Massachusetts",value:"MA"},{label:"Michigan",value:"MI"},{label:"Minnesota",value:"MN"},{label:"Mississippi",value:"MS"},{label:"Missouri",value:"MO"},{label:"Montana",value:"MT"},{label:"Nebraska",value:"NE"},{label:"Nevada",value:"NV"},{label:"New Hampshire",value:"NH"},{label:"New Jersey",value:"NJ"},{label:"New Mexico",value:"NM"},{label:"New York",value:"NY"},{label:"North Carolina",value:"NC"},{label:"North Dakota",value:"ND"},{label:"Ohio",value:"OH"},{label:"Oklahoma",value:"OK"},{label:"Oregon",value:"OR"},{label:"Pennsylvania",value:"PA"},{label:"Rhode Island",value:"RI"},{label:"South Carolina",value:"SC"},{label:"South Dakota",value:"SD"},{label:"Tennessee",value:"TN"},{label:"Texas",value:"TX"},{label:"Utah",value:"UT"},{label:"Vermont",value:"VT"},{label:"Virginia",value:"VA"},{label:"Washington",value:"WA"},{label:"West Virginia",value:"WV"},{label:"Wisconsin",value:"WI"},{label:"Wyoming",value:"WY"}],N=e=>{let{className:l,ref:a,...s}=e;return(0,r.jsx)("textarea",{className:(0,o.cn)("flex min-h-[80px] w-full rounded border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",l),ref:a,...s})},y={checkbox:e=>{let{name:l,defaultValue:a,errors:s,label:n,register:i,required:u,width:o}=e,d=i(l,{required:u}),{setValue:c}=(0,t.xW)();return(0,r.jsxs)(g,{width:o,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(b,{defaultChecked:a,id:l,...d,onCheckedChange:e=>{c(d.name,e)}}),(0,r.jsxs)(h,{htmlFor:l,children:[u&&(0,r.jsxs)("span",{className:"required",children:["* ",(0,r.jsx)("span",{className:"sr-only",children:"(required)"})]}),n]})]}),s[l]&&(0,r.jsx)(x,{})]})},country:e=>{let{name:l,control:a,errors:s,label:n,required:i,width:u}=e;return(0,r.jsxs)(g,{width:u,children:[(0,r.jsxs)(h,{className:"",htmlFor:l,children:[n,i&&(0,r.jsxs)("span",{className:"required",children:["* ",(0,r.jsx)("span",{className:"sr-only",children:"(required)"})]})]}),(0,r.jsx)(t.xI,{control:a,defaultValue:"",name:l,render:e=>{let{field:{onChange:a,value:s}}=e,t=A.find(e=>e.value===s);return(0,r.jsxs)(f.l6,{onValueChange:e=>a(e),value:null==t?void 0:t.value,children:[(0,r.jsx)(f.bq,{className:"w-full",id:l,children:(0,r.jsx)(f.yv,{placeholder:n})}),(0,r.jsx)(f.gC,{children:A.map(e=>{let{label:l,value:a}=e;return(0,r.jsx)(f.eb,{value:a,children:l},a)})})]})},rules:{required:i}}),s[l]&&(0,r.jsx)(x,{})]})},email:e=>{let{name:l,defaultValue:a,errors:s,label:n,register:t,required:i,width:u}=e;return(0,r.jsxs)(g,{width:u,children:[(0,r.jsxs)(h,{htmlFor:l,children:[n,i&&(0,r.jsxs)("span",{className:"required",children:["* ",(0,r.jsx)("span",{className:"sr-only",children:"(required)"})]})]}),(0,r.jsx)(p,{defaultValue:a,id:l,type:"text",...t(l,{pattern:/^\S[^\s@]*@\S+$/,required:i})}),s[l]&&(0,r.jsx)(x,{})]})},message:e=>{let{message:l}=e;return(0,r.jsx)(g,{className:"my-12",width:"100",children:l&&(0,r.jsx)(i.A,{data:l})})},number:e=>{let{name:l,defaultValue:a,errors:s,label:n,register:t,required:i,width:u}=e;return(0,r.jsxs)(g,{width:u,children:[(0,r.jsxs)(h,{htmlFor:l,children:[n,i&&(0,r.jsxs)("span",{className:"required",children:["* ",(0,r.jsx)("span",{className:"sr-only",children:"(required)"})]})]}),(0,r.jsx)(p,{defaultValue:a,id:l,type:"number",...t(l,{required:i})}),s[l]&&(0,r.jsx)(x,{})]})},select:e=>{let{name:l,control:a,errors:s,label:n,options:i,required:u,width:o}=e;return(0,r.jsxs)(g,{width:o,children:[(0,r.jsxs)(h,{htmlFor:l,children:[n,u&&(0,r.jsxs)("span",{className:"required",children:["* ",(0,r.jsx)("span",{className:"sr-only",children:"(required)"})]})]}),(0,r.jsx)(t.xI,{control:a,defaultValue:"",name:l,render:e=>{let{field:{onChange:a,value:s}}=e,t=i.find(e=>e.value===s);return(0,r.jsxs)(f.l6,{onValueChange:e=>a(e),value:null==t?void 0:t.value,children:[(0,r.jsx)(f.bq,{className:"w-full",id:l,children:(0,r.jsx)(f.yv,{placeholder:n})}),(0,r.jsx)(f.gC,{children:i.map(e=>{let{label:l,value:a}=e;return(0,r.jsx)(f.eb,{value:a,children:l},a)})})]})},rules:{required:u}}),s[l]&&(0,r.jsx)(x,{})]})},state:e=>{let{name:l,control:a,errors:s,label:n,required:i,width:u}=e;return(0,r.jsxs)(g,{width:u,children:[(0,r.jsxs)(h,{htmlFor:l,children:[n,i&&(0,r.jsxs)("span",{className:"required",children:["* ",(0,r.jsx)("span",{className:"sr-only",children:"(required)"})]})]}),(0,r.jsx)(t.xI,{control:a,defaultValue:"",name:l,render:e=>{let{field:{onChange:a,value:s}}=e,t=j.find(e=>e.value===s);return(0,r.jsxs)(f.l6,{onValueChange:e=>a(e),value:null==t?void 0:t.value,children:[(0,r.jsx)(f.bq,{className:"w-full",id:l,children:(0,r.jsx)(f.yv,{placeholder:n})}),(0,r.jsx)(f.gC,{children:j.map(e=>{let{label:l,value:a}=e;return(0,r.jsx)(f.eb,{value:a,children:l},a)})})]})},rules:{required:i}}),s[l]&&(0,r.jsx)(x,{})]})},text:e=>{let{name:l,defaultValue:a,errors:s,label:n,register:t,required:i,width:u}=e;return(0,r.jsxs)(g,{width:u,children:[(0,r.jsxs)(h,{htmlFor:l,children:[n,i&&(0,r.jsxs)("span",{className:"required",children:["* ",(0,r.jsx)("span",{className:"sr-only",children:"(required)"})]})]}),(0,r.jsx)(p,{defaultValue:a,id:l,type:"text",...t(l,{required:i})}),s[l]&&(0,r.jsx)(x,{})]})},textarea:e=>{let{name:l,defaultValue:a,errors:s,label:n,register:t,required:i,rows:u=3,width:o}=e;return(0,r.jsxs)(g,{width:o,children:[(0,r.jsxs)(h,{htmlFor:l,children:[n,i&&(0,r.jsxs)("span",{className:"required",children:["* ",(0,r.jsx)("span",{className:"sr-only",children:"(required)"})]})]}),(0,r.jsx)(N,{defaultValue:a,id:l,rows:u,...t(l,{required:i})}),s[l]&&(0,r.jsx)(x,{})]})}};var w=a(2901);let C=e=>{var l;let{enableIntro:a,form:o,form:{id:d,confirmationMessage:c,confirmationType:b,redirect:v,submitButtonLabel:m}={},introContent:h}=e,x=(0,t.mN)({defaultValues:o.fields}),{control:g,formState:{errors:f},handleSubmit:A,register:p}=x,[j,N]=(0,n.useState)(!1),[C,M]=(0,n.useState)(),[I,S]=(0,n.useState)(),T=(0,s.useRouter)(),B=(0,n.useCallback)(e=>{let l;(async()=>{S(void 0);let a=Object.entries(e).map(e=>{let[l,a]=e;return{field:l,value:a}});l=setTimeout(()=>{N(!0)},1e3);try{let e=await fetch("".concat((0,w.y)(),"/api/form-submissions"),{body:JSON.stringify({form:d,submissionData:a}),headers:{"Content-Type":"application/json"},method:"POST"}),n=await e.json();if(clearTimeout(l),e.status>=400){var r,s;N(!1),S({message:(null===(s=n.errors)||void 0===s?void 0:null===(r=s[0])||void 0===r?void 0:r.message)||"Internal Server Error",status:n.status});return}if(N(!1),M(!0),"redirect"===b&&v){let{url:e}=v;e&&T.push(e)}}catch(e){console.warn(e),N(!1),S({message:"Something went wrong."})}})()},[T,d,v,b]);return(0,r.jsxs)("div",{className:"container lg:max-w-[48rem]",children:[a&&h&&!C&&(0,r.jsx)(i.A,{className:"mb-8 lg:mb-12",data:h,enableGutter:!1}),(0,r.jsx)("div",{className:"p-4 lg:p-6 border border-border rounded-[0.8rem]",children:(0,r.jsxs)(t.Op,{...x,children:[!j&&C&&"message"===b&&(0,r.jsx)(i.A,{data:c}),j&&!C&&(0,r.jsx)("p",{children:"Loading, please wait..."}),I&&(0,r.jsx)("div",{children:"".concat(I.status||"500",": ").concat(I.message||"")}),!C&&(0,r.jsxs)("form",{id:d,onSubmit:A(B),children:[(0,r.jsx)("div",{className:"mb-4 last:mb-0",children:o&&o.fields&&(null===(l=o.fields)||void 0===l?void 0:l.map((e,l)=>{let a=null==y?void 0:y[e.blockType];return a?(0,r.jsx)("div",{className:"mb-6 last:mb-0",children:(0,r.jsx)(a,{form:o,...e,...x,control:g,errors:f,register:p})},l):null}))}),(0,r.jsx)(u.$,{form:d,type:"submit",variant:"default",children:m})]})]})})]})}},3756:(e,l,a)=>{"use strict";a.d(l,{ImageMedia:()=>u});var r=a(2840),s=a(18),n=a(5774);a(6964);var t=a(2901);let{breakpoints:i}={breakpoints:{"3xl":1920,"2xl":1536,xl:1280,lg:1024,md:768,sm:640}},u=e=>{let l,a;let{alt:u,fill:o,imgClassName:d,priority:c,resource:b,size:v,src:m,loading:h}=e,x=u,g=m||"";if(!g&&b&&"object"==typeof b){let{alt:e,height:r,url:s,width:n}=b;l=n,a=r,x=e||"";let i=b.updatedAt;g="".concat((0,t.y)()).concat(s,"?").concat(i)}let f=v||Object.entries(i).map(e=>{let[,l]=e;return"(max-width: ".concat(l,"px) ").concat(2*l,"w")}).join(", ");return(0,r.jsx)("picture",{children:(0,r.jsx)(n.default,{alt:x||"",className:(0,s.cn)(d),fill:o,height:o?void 0:a,placeholder:"blur",blurDataURL:"data:image/png;base64,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",priority:c,quality:100,loading:h||(c?void 0:"lazy"),sizes:f,src:g,width:o?void 0:l})})}},4580:(e,l,a)=>{"use strict";a.d(l,{HighImpactHero:()=>o});var r=a(2840),s=a(8119),n=a(6964),t=a(7253),i=a(1981),u=a(7776);let o=e=>{let{links:l,media:a,richText:o}=e,{setHeaderTheme:d}=(0,s.Y)();return(0,n.useEffect)(()=>{d("dark")}),(0,r.jsxs)("div",{className:"relative -mt-[10.4rem] flex items-center justify-center text-white","data-theme":"dark",children:[(0,r.jsx)("div",{className:"container mb-8 z-10 relative flex items-center justify-center",children:(0,r.jsxs)("div",{className:"max-w-[36.5rem] md:text-center",children:[o&&(0,r.jsx)(u.A,{className:"mb-6",data:o,enableGutter:!1}),Array.isArray(l)&&l.length>0&&(0,r.jsx)("ul",{className:"flex md:justify-center gap-4",children:l.map((e,l)=>{let{link:a}=e;return(0,r.jsx)("li",{children:(0,r.jsx)(t.A,{...a})},l)})})]})}),(0,r.jsx)("div",{className:"min-h-[80vh] select-none",children:a&&"object"==typeof a&&(0,r.jsx)(i.$,{fill:!0,imgClassName:"-z-10 object-cover",priority:!0,resource:a})})]})}},4795:(e,l,a)=>{"use strict";a.d(l,{A:()=>r});let r=!!window.document&&!!window.document.createElement},4955:(e,l,a)=>{"use strict";a.d(l,{LivePreviewListener:()=>i});var r=a(2840),s=a(2901),n=a(540),t=a(495);a(6964);let i=()=>{let e=(0,t.useRouter)();return(0,r.jsx)(n.p,{refresh:e.refresh,serverURL:(0,s.y)()})}},5013:(e,l,a)=>{"use strict";a.d(l,{$:()=>u});var r=a(2840),s=a(18),n=a(4022),t=a(4785);a(6964);let i=(0,t.F)("inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{defaultVariants:{size:"default",variant:"default"},variants:{size:{clear:"",default:"h-10 px-4 py-2",icon:"h-10 w-10",lg:"h-11 rounded px-8",sm:"h-9 rounded px-3"},variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",ghost:"hover:bg-card hover:text-accent-foreground",link:"text-primary items-start justify-start underline-offset-4 hover:underline",outline:"border border-border bg-background hover:bg-card hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80"}}}),u=e=>{let{asChild:l=!1,className:a,size:t,variant:u,ref:o,...d}=e,c=l?n.DX:"button";return(0,r.jsx)(c,{className:(0,s.cn)(i({className:a,size:t,variant:u})),ref:o,...d})}},7253:(e,l,a)=>{"use strict";a.d(l,{A:()=>u});var r=a(2840),s=a(5013),n=a(18),t=a(4058),i=a.n(t);a(6964);let u=e=>{let{type:l,appearance:a="inline",children:t,className:u,label:o,newTab:d,reference:c,size:b,url:v}=e,m="reference"===l&&"object"==typeof(null==c?void 0:c.value)&&c.value.slug?"".concat((null==c?void 0:c.relationTo)!=="pages"?"/".concat(null==c?void 0:c.relationTo):"","/").concat(c.value.slug):v;if(!m)return null;let h=d?{rel:"noopener noreferrer",target:"_blank"}:{};return"inline"===a?(0,r.jsxs)(i(),{className:(0,n.cn)(u),href:m||v||"",...h,children:[o&&o,t&&t]}):(0,r.jsx)(s.$,{asChild:!0,className:u,size:"link"===a?"clear":b,variant:a,children:(0,r.jsxs)(i(),{className:(0,n.cn)(u),href:m||v||"",...h,children:[o&&o,t&&t]})})}},7449:(e,l,a)=>{"use strict";a.d(l,{bq:()=>c,eb:()=>h,gC:()=>m,l6:()=>o,yv:()=>d});var r=a(2840),s=a(18),n=a(3557),t=a(3049),i=a(356),u=a(3669);a(6964);let o=n.bL;n.YJ;let d=n.WT,c=e=>{let{children:l,className:a,ref:i,...u}=e;return(0,r.jsxs)(n.l9,{className:(0,s.cn)("flex h-10 w-full items-center justify-between rounded border border-input bg-background px-3 py-2 text-inherit ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),ref:i,...u,children:[l,(0,r.jsx)(n.In,{asChild:!0,children:(0,r.jsx)(t.A,{className:"h-4 w-4 opacity-50"})})]})},b=e=>{let{className:l,ref:a,...t}=e;return(0,r.jsx)(n.PP,{className:(0,s.cn)("flex cursor-default items-center justify-center py-1",l),ref:a,...t,children:(0,r.jsx)(i.A,{className:"h-4 w-4"})})},v=e=>{let{className:l,ref:a,...i}=e;return(0,r.jsx)(n.wn,{className:(0,s.cn)("flex cursor-default items-center justify-center py-1",l),ref:a,...i,children:(0,r.jsx)(t.A,{className:"h-4 w-4"})})},m=e=>{let{children:l,className:a,position:t="popper",ref:i,...u}=e;return(0,r.jsx)(n.ZL,{children:(0,r.jsxs)(n.UC,{className:(0,s.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded border bg-card text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:t,ref:i,...u,children:[(0,r.jsx)(b,{}),(0,r.jsx)(n.LM,{className:(0,s.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:l}),(0,r.jsx)(v,{})]})})},h=e=>{let{children:l,className:a,ref:t,...i}=e;return(0,r.jsxs)(n.q7,{className:(0,s.cn)("relative flex w-full cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),ref:t,...i,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(n.VF,{children:(0,r.jsx)(u.A,{className:"h-4 w-4"})})}),(0,r.jsx)(n.p4,{children:l})]})}},7594:(e,l,a)=>{"use strict";a.d(l,{Code:()=>o});var r=a(2840),s=a(7748),n=a(6964),t=a(5013),i=a(3854);function u(e){let{code:l}=e,[a,s]=(0,n.useState)("Copy");return(0,r.jsx)("div",{className:"flex justify-end align-middle",children:(0,r.jsxs)(t.$,{className:"flex gap-1",variant:"secondary",onClick:async()=>{await navigator.clipboard.writeText(l),"Copy"===a&&(s(()=>"Copied!"),setTimeout(()=>{s(()=>"Copy")},1e3))},children:[(0,r.jsx)("p",{children:a}),(0,r.jsx)(i.T,{})]})})}let o=e=>{let{code:l,language:a=""}=e;return l?(0,r.jsx)(s.f4,{code:l,language:a,theme:s.Zj.vsDark,children:e=>{let{getLineProps:a,getTokenProps:s,tokens:n}=e;return(0,r.jsxs)("pre",{className:"bg-black p-4 border text-xs border-border rounded overflow-x-auto",children:[n.map((e,l)=>(0,r.jsxs)("div",{...a({className:"table-row",line:e}),children:[(0,r.jsx)("span",{className:"table-cell select-none text-right text-white/25",children:l+1}),(0,r.jsx)("span",{className:"table-cell pl-4",children:e.map((e,l)=>(0,r.jsx)("span",{...s({token:e})},l))})]},l)),(0,r.jsx)(u,{code:l})]})}}):null}},7776:(e,l,a)=>{"use strict";a.d(l,{A:()=>x});var r=a(2840),s=a(18);a(6964);var n=a(1981);let t=e=>{let l;let{captionClassName:a,className:t,enableGutter:i=!0,imgClassName:u,media:o,staticImage:d,disableInnerContainer:c}=e;return o&&"object"==typeof o&&(l=o.caption),(0,r.jsxs)("div",{className:(0,s.cn)("",{container:i},t),children:[(o||d)&&(0,r.jsx)(n.$,{imgClassName:(0,s.cn)("border border-border rounded-[0.8rem]",u),resource:o,src:d}),l&&(0,r.jsx)("div",{className:(0,s.cn)("mt-6",{container:!c},a),children:(0,r.jsx)(x,{data:l,enableGutter:!1})})]})};var i=a(9676),u=a(3852),o=a(7594);let d=e=>{let{className:l,code:a,language:s}=e;return(0,r.jsx)("div",{className:[l,"not-prose"].filter(Boolean).join(" "),children:(0,r.jsx)(o.Code,{code:a,language:s})})},c=e=>{let{className:l,content:a,style:n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("mx-auto my-8 w-full",l),children:(0,r.jsx)("div",{className:(0,s.cn)("border py-3 px-6 flex items-center rounded",{"border-border bg-card":"info"===n,"border-error bg-error/30":"error"===n,"border-success bg-success/30":"success"===n,"border-warning bg-warning/30":"warning"===n}),children:(0,r.jsx)(x,{data:a,enableGutter:!1,enableProse:!1})})})};var b=a(7253);let v=e=>{let{links:l,richText:a}=e;return(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center",children:[(0,r.jsx)("div",{className:"max-w-[48rem] flex items-center",children:a&&(0,r.jsx)(x,{className:"mb-0",data:a,enableGutter:!1})}),(0,r.jsx)("div",{className:"flex flex-col gap-8",children:(l||[]).map((e,l)=>{let{link:a}=e;return(0,r.jsx)(b.A,{size:"lg",...a},l)})})]})})},m=e=>{let{linkNode:l}=e,{value:a,relationTo:r}=l.fields.doc;if("object"!=typeof a)throw Error("Expected value to be an object");let s=a.slug;return"posts"===r?"/posts/".concat(s):"/".concat(s)},h=e=>{let{defaultConverters:l}=e;return{...l,...(0,i.A)({internalDocToHref:m}),blocks:{banner:e=>{let{node:l}=e;return(0,r.jsx)(c,{className:"col-start-2 mb-4",...l.fields})},mediaBlock:e=>{let{node:l}=e;return(0,r.jsx)(t,{className:"col-start-1 col-span-3",imgClassName:"m-0",...l.fields,captionClassName:"mx-auto max-w-[48rem]",enableGutter:!1,disableInnerContainer:!0})},code:e=>{let{node:l}=e;return(0,r.jsx)(d,{className:"col-start-2",...l.fields})},cta:e=>{let{node:l}=e;return(0,r.jsx)(v,{...l.fields})}}}};function x(e){let{className:l,enableProse:a=!0,enableGutter:n=!0,...t}=e;return(0,r.jsx)(u.s,{converters:h,className:(0,s.cn)({"container ":n,"max-w-none":!n,"mx-auto prose md:prose-md dark:prose-invert ":a},l),...t})}},8119:(e,l,a)=>{"use strict";a.d(l,{HeaderThemeProvider:()=>i,Y:()=>u});var r=a(2840),s=a(6964),n=a(4795);let t=(0,s.createContext)({headerTheme:void 0,setHeaderTheme:()=>null}),i=e=>{let{children:l}=e,[a,i]=(0,s.useState)(n.A?document.documentElement.getAttribute("data-theme"):void 0),u=(0,s.useCallback)(e=>{i(e)},[]);return(0,r.jsx)(t.Provider,{value:{headerTheme:a,setHeaderTheme:u},children:l})},u=()=>(0,s.useContext)(t)},8480:(e,l,a)=>{"use strict";a.d(l,{default:()=>t});var r=a(2840),s=a(8119),n=a(6964);let t=()=>{let{setHeaderTheme:e}=(0,s.Y)();return(0,n.useEffect)(()=>{e("light")},[e]),(0,r.jsx)(n.Fragment,{})}}},e=>{var l=l=>e(e.s=l);e.O(0,[302,21,626,22,515,308,358],()=>l(2555)),_N_E=e.O()}]);