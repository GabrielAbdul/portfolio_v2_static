(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8536:(e,t,a)=>{Promise.resolve().then(a.bind(a,3987))},3987:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>z});var r=a(5155),s=a(2115),n=a(7711),i=a(6579),l=a.n(i),c=a(698),o=a(8679),d=a(3906),h=a(3851),m=a(3463),p=a(9795);function x(){let e=(0,c._)(["\n            radial-gradient(","px circle at ","px ","px, ",", transparent 100%)\n          "]);return x=function(){return e},e}function u(){let e=(0,c._)(["\n            radial-gradient(","px circle at ","px ","px,\n              ",", \n              ",", \n              hsl(var(--border)) 100%\n            )\n          "]);return u=function(){return e},e}function v(e){let{children:t,className:a,gradientSize:n=200,gradientColor:i="#262626",gradientOpacity:l=.8,gradientFrom:c="#9E7AFF",gradientTo:v="#FE8BBB"}=e,g=(0,s.useRef)(null),b=(0,o.d)(-n),j=(0,o.d)(-n),f=(0,s.useCallback)(e=>{if(g.current){let{left:t,top:a}=g.current.getBoundingClientRect(),r=e.clientX,s=e.clientY;b.set(r-t),j.set(s-a)}},[b,j]),w=(0,s.useCallback)(e=>{e.relatedTarget||(document.removeEventListener("mousemove",f),b.set(-n),j.set(-n))},[f,b,n,j]),y=(0,s.useCallback)(()=>{document.addEventListener("mousemove",f),b.set(-n),j.set(-n)},[f,b,n,j]);return(0,s.useEffect)(()=>(document.addEventListener("mousemove",f),document.addEventListener("mouseout",w),document.addEventListener("mouseenter",y),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseout",w),document.removeEventListener("mouseenter",y)}),[y,f,w]),(0,s.useEffect)(()=>{b.set(-n),j.set(-n)},[n,b,j]),(0,r.jsxs)("div",{ref:g,className:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,p.QP)((0,m.$)(t))}("group relative flex size-full rounded-xl",a),children:[(0,r.jsx)("div",{className:"absolute inset-px z-10 rounded-xl bg-background"}),(0,r.jsx)("div",{className:"relative z-30",children:t}),(0,r.jsx)(d.P.div,{className:"pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",style:{background:(0,h.E)(x(),n,b,j,i),opacity:l}}),(0,r.jsx)(d.P.div,{className:"pointer-events-none absolute inset-0 rounded-xl bg-border duration-300 group-hover:opacity-100",style:{background:(0,h.E)(u(),n,b,j,c,v)}})]})}var g=a(8190);let b={darkMode:["class"],content:["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}"],theme:{screens:{sm:{min:"768px"}},extend:{colors:{background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",card:{DEFAULT:"hsl(var(--card))",foreground:"hsl(var(--card-foreground))"},popover:{DEFAULT:"hsl(var(--popover))",foreground:"hsl(var(--popover-foreground))"},primary:{DEFAULT:"hsl(var(--primary))",foreground:"hsl(var(--primary-foreground))"},secondary:{DEFAULT:"hsl(var(--secondary))",foreground:"hsl(var(--secondary-foreground))"},muted:{DEFAULT:"hsl(var(--muted))",foreground:"hsl(var(--muted-foreground))"},accent:{DEFAULT:"hsl(var(--accent))",foreground:"hsl(var(--accent-foreground))"},destructive:{DEFAULT:"hsl(var(--destructive))",foreground:"hsl(var(--destructive-foreground))"},border:"hsl(var(--border))",input:"hsl(var(--input))",ring:"hsl(var(--ring))",chart:{1:"hsl(var(--chart-1))",2:"hsl(var(--chart-2))",3:"hsl(var(--chart-3))",4:"hsl(var(--chart-4))",5:"hsl(var(--chart-5))"}},borderRadius:{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"}}},plugins:[a(3844)]},j=e=>{let{experience:t}=e,{strItem1:a,strItem2:s,strItem3:n,strExpItem:i}=t,l=b.theme.screens.sm.min;return(0,r.jsx)(v,{className:"exp-card cursor-pointer text-wrap",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{minWidth:l,children:(0,r.jsxs)("div",{className:"grid auto-cols-auto grid-flow-col p-5 text-wrap",children:[(0,r.jsx)("div",{className:"date col-start-1 mr-12 text-xs font-bold pb-2 text-no-wrap max-w-fit",children:a}),(0,r.jsxs)("div",{className:"title-description col-start-2 pb-2 max-w-fit",children:[(0,r.jsx)("p",{className:"title text-primary pb-2",children:s}),(0,r.jsx)("p",{className:"description text-sm",children:n})]}),(0,r.jsx)("div",{className:"badges grid auto-cols-min grid-flow-col col-start-2 row-start-3 gap-3 justify-self-stert",children:i.map((e,t)=>(0,r.jsx)("div",{className:"badge",children:e},t))})]})}),(0,r.jsx)(g.default,{maxWidth:l,children:(0,r.jsxs)("div",{className:"grid auto-cols-auto grid-flow-col p-5",children:[(0,r.jsx)("div",{className:"date mr-2 text-xs font-bold pb-2 text-no-wrap",children:a}),(0,r.jsxs)("div",{className:"title-description col-start-2 pb-2",children:[(0,r.jsx)("p",{className:"title text-primary pb-2",children:s}),(0,r.jsx)("p",{className:"description text-sm",children:n})]}),(0,r.jsx)("div",{className:"badges grid auto-cols-min grid-flow-col col-start-2 row-start-3 gap-3 justify-self-stert",children:i.map((e,t)=>(0,r.jsx)("div",{className:"badge",children:e},t))})]})})]})})};var f=a(5565);let w=e=>{let{project:t}=e,{proItem1:a,proItem2:s,proItem3:n,proItem4:i}=t,l=b.theme.screens.sm.min;return(0,r.jsx)(v,{className:"exp-card cursor-pointer h-full text-wrap",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{minWidth:l,children:(0,r.jsxs)("div",{className:"grid auto-cols-auto grid-flow-col gap-8 p-5 text-wrap",children:[(0,r.jsx)("div",{className:"relative min-w-[10rem] h-[10vh] rounded border-2 border-slate-500",children:(0,r.jsx)(f.default,{src:i,alt:n,objectPosition:"50% 50%",objectFit:"cover",loading:"lazy",layout:"fill",quality:100})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-l text-primary",children:a}),(0,r.jsx)("div",{children:s})]})]})}),(0,r.jsx)(g.default,{maxWidth:l,children:(0,r.jsx)("div",{className:"grid auto-rows-auto grid-flow-row gap-8 p-5 text-wrap",children:(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-l text-primary mb-2",children:a}),(0,r.jsx)("div",{className:"relative w-[12rem] h-[15vh] mb-2 rounded border-2 border-slate-500",children:(0,r.jsx)(f.default,{src:i,alt:n,objectPosition:"50% 50%",objectFit:"cover",loading:"lazy",layout:"fill",quality:100})}),(0,r.jsx)("div",{children:s})]})})})]})})},y=JSON.parse('{"D":{"xd":"Gabriel Abdul-Raheem","Xo":"Web Developer","xl":"Building the standard for responsive,\\n innovative, and impactful\\nuser experiences.","Le":[{"strItem1":"2025 — Current","strItem2":"Freelance Web Developer, Station8","strItem3":"Build and maintain web components used to construct industry standard client frontends. Work alongside UI designers, product managers, and other developers to implement best practices in user experience.","strExpItem":["Next.js","TypeScript","TailwindCSS"],"strLink":"https://station8branding.com/"},{"strItem1":"2022 — 2024","strItem2":"Software Engineer, CymSTAR","strItem3":"Designed and executed embedded system functionalities, significantly enhancing the realism and performance of simulation environments. Collaborated with cross-functional teams to integrate advanced features and optimize system performance.","strExpItem":["C","C#","Assembly","Python"],"strLink":"https://www.cymstar.com/"},{"strItem1":"May — Nov\'22 ","strItem2":"Full Stack Web Developer, FordAV","strItem3":"Revamped core intranet functionalities by implementing full-stack improvements, addressing bugs, and adding feature-rich solutions. Engineered modular front-end components with TypeScript and HTML/CSS, increasing code reusability and maintainability. Designed high-perforamance backend APIs, streaminlining communication between systems and enhancing data flow efficiency.","strExpItem":["Angular","TypeScript","HTML/CSS","KendoUI"],"strLink":"https://fordav.com/"},{"strItem1":"2021 — 2022","strItem2":"Web Developer, Technical People","strItem3":"Developed a click to call feature for the company website to increase lead generation.","strExpItem":["TwilioAPI","HTML","CSS","JavaScript"],"strLink":"https://technicalpeople.com/"}],"DT":[{"proItem1":"Teams Page","proItem2":"Developed a dynamically rendered teams page utilizing Next.js, TypeScript and TailwindCSS to display team members and their details.","proItem3":"Teams Logo","proItem4":"/teams-logo.png","strLink":"https://teams-page-gules.vercel.app/","strObjFit":"contain"},{"proItem1":"gabdulraheem V1","proItem2":"The first version of my personal portfolio website to showcase my projects and skills. Written in HTML, TailwindCSS, and JavaScript.","proItem3":"Portfolio Logo","proItem4":"/portfolio-logo.png","strLink":"https://gabdulraheemv1.vercel.app/"},{"proItem1":"AirBnb Clone","proItem2":"Github repo to fully functional Airbnb clone created with JavaScript and HTML/CSS on the front-end, Python and SQLAlchemy on the back-end, and Bash scripts for a CLI.","proItem3":"Airbnb Logo","proItem4":"/airbnb.png","strLink":"https://github.com/GunterPearson/AirBnB_clone_v4"},{"proItem1":"Shell Clone","proItem2":"A simple shell clone written in C that mimics the basic functionality of a Unix shell, including executing commands, handling input/output redirection, and supporting background processes.","proItem3":"Shell Clone Logo","proItem4":"/bash-logo.jpg","strLink":"https://github.com/GabrielAbdul/shell_v2"}]}}'),N=(0,n.default)(()=>a.e(563).then(a.bind(a,563)),{loadableGenerated:{webpack:()=>[563]},ssr:!1}),k=(0,n.default)(()=>Promise.resolve().then(a.bind(a,8190)),{loadableGenerated:{webpack:()=>[8190]},ssr:!1}),z=()=>{let{xd:e,Xo:t,xl:a,Le:n,DT:i}=y.D,[c,o]=(0,s.useState)("about"),d=b.theme.screens.sm.min;return(0,s.useEffect)(()=>{let e=()=>{let e=window.scrollY+window.innerHeight/2;for(let t of["about","experience","projects"]){let a=document.getElementById(t);if(a){let{offsetTop:r,offsetHeight:s}=a;if(e>=r&&e<r+s){o(t);break}}}};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:l().className,children:[(0,r.jsxs)(k,{minWidth:d,children:[(0,r.jsx)(N,{}),(0,r.jsxs)("div",{className:"grid auto-cols-auto grid-flow-col gap-5 lg:mr-20 mr-20",children:[(0,r.jsx)("div",{className:"w-full",children:(0,r.jsxs)("header",{className:"sticky top-24 mt-24 justify-self-end",children:[(0,r.jsx)("h1",{className:"text-[2.6rem] text-nowrap tracking-tight font-bold mb-1",children:e}),(0,r.jsx)("h2",{className:"text-xl mb-4",children:t}),(0,r.jsx)("p",{className:"text text-nowrap",children:a.split("\n").map((e,t)=>(0,r.jsxs)(s.Fragment,{children:[e,(0,r.jsx)("br",{})]},t))}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"flex flex-col gap-3 mt-16 text-xs font-bold",children:[(0,r.jsx)("li",{className:"nav-item ".concat("about"===c?"active":""),children:(0,r.jsx)("a",{href:"#about",children:"ABOUT"})}),(0,r.jsx)("li",{className:"nav-item ".concat("experience"===c?"active":""),children:(0,r.jsx)("a",{href:"#experience",children:"EXPERIENCE"})}),(0,r.jsx)("li",{className:"nav-item ".concat("projects"===c?"active":""),children:(0,r.jsx)("a",{href:"#projects",children:"PROJECTS"})})]})}),(0,r.jsxs)("ul",{className:"lg:sticky top-0 mt-40 py-40 flex flex-row gap-4",children:[(0,r.jsx)("li",{className:"icon",children:(0,r.jsx)("a",{href:"https://www.github.com/GabrielAbdul",target:"_blank",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-6 w-6","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})})}),(0,r.jsx)("li",{className:"icon",children:(0,r.jsx)("a",{href:"https://www.linkedin.com/in/gabrielabdulraheem",target:"_blank",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"})})})}),(0,r.jsx)("li",{className:"icon",children:(0,r.jsx)("a",{href:"https://github.com/qtparcel/resume/blob/main/GabrielAbdulRaheem_Resume.pdf",target:"_blank",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",fill:"currentColor",className:"h-6 w-6",children:[(0,r.jsx)("path",{d:"m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z"}),(0,r.jsx)("path",{d:"M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z"}),(0,r.jsx)("path",{d:"M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z"})]})})})]})]})}),(0,r.jsxs)("div",{className:"w-[30vw] justify-self-center",children:[(0,r.jsx)("section",{id:"about",className:"pt-24 pb-12",style:{color:"var(--text-secondary)"},children:(0,r.jsx)("div",{className:"about-text",children:(0,r.jsxs)("div",{className:"about mb-40",style:{color:"var(--text-secondary)"},children:[(0,r.jsxs)("p",{children:[" ","As a passionate developer, I combine creative ingenuity with robust engineering to deliver pixel-perfect user interfaces. My specialty lies at the intersection of perspective and performance, curating unique experiences that are not only visually stunning but also optimized for usability."," "]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Currently, Im a Freelance Web Developer at"," ",(0,r.jsx)("a",{href:"https://station8branding.com/",target:"_blank",className:"text-primary",children:"Station8"}),", specializing in front end development."]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Over the years Ive had the opportunity to work on a large variety of projects, from"," ",(0,r.jsx)("a",{href:"https://technicalpeople.com/",target:"_blank",className:"text-primary",children:"small corporations"})," ","and"," ",(0,r.jsx)("a",{href:"https://www.fordav.com/",target:"_blank",className:"text-primary",children:"construction companies"})," ","to",(0,r.jsxs)("a",{href:"https://www.cymstar.com/",target:"_blank",className:"text-primary",children:[" ","government contracting"]})," ","and now"," ",(0,r.jsx)("a",{href:"https://station8branding.com/",target:"_blank",className:"text-primary",children:"branding agencies"}),". Additionally, I offer web services for small business owners enhancing their market presence."]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["In my spare time, Im usually at the gym or outside, reading, or serving guests at the"," ",(0,r.jsx)("a",{href:"https://olivegarden.com",target:"_blank",className:"text-primary",children:"Olive Garden"}),"."]})]})})}),(0,r.jsxs)("section",{id:"experience",className:"pb-36",children:[n.map((e,t)=>(0,r.jsx)("a",{target:"_blank",href:e.strLink,children:(0,r.jsx)(j,{experience:e},t)},t)),(0,r.jsx)("div",{className:"text-l font-bold",style:{color:"var(--text-primary)"},children:(0,r.jsx)("a",{href:"https://github.com/qtparcel/resume/blob/main/GabrielAbdulRaheem_Resume.pdf",target:"_blank",className:"text-primary link",children:"View Full Resume"})})]}),(0,r.jsx)("section",{id:"projects",children:i.map((e,t)=>(0,r.jsx)("a",{target:"_blank",href:e.strLink,children:(0,r.jsx)(w,{project:e},t)},t))}),(0,r.jsx)("footer",{children:(0,r.jsxs)("p",{className:"ml-2 mt-20 pb-36 text-sm max-w-xs",children:["Inspired by Brittany Chiang. Written in"," ",(0,r.jsx)("a",{href:"https://code.visualstudio.com/",target:"_blank",children:(0,r.jsxs)("span",{className:"text-primary hover-accent",children:["Visual Studio Code"," "]})}),"Built with",(0,r.jsxs)("a",{href:"https://nextjs.org/",target:"_blank",children:[(0,r.jsx)("span",{className:"text-primary hover-accent",children:" Next.js"})," ","and"," "]}),(0,r.jsx)("a",{href:"https://tailwindcss.com/",target:"_blank",children:(0,r.jsxs)("span",{className:"text-primary hover-accent",children:["TailwindCSS,"," "]})}),"deployed with"," ",(0,r.jsxs)("a",{href:"https://porkbun.com/",target:"_blank",children:[(0,r.jsx)("span",{className:"text-primary hover-accent",children:"Porkbun"}),"."]})]})})]})]})]}),(0,r.jsx)(k,{maxWidth:d,children:(0,r.jsxs)("div",{className:"grid auto-rows-auto grid-flow-row",children:[(0,r.jsxs)("header",{className:"mt-12 mb-24 place-self-center w-full",children:[(0,r.jsx)("h1",{className:"text-4xl text-wrap tracking-tight font-bold mb-1",children:e}),(0,r.jsx)("h2",{className:"text-xl mb-4",children:t}),(0,r.jsx)("div",{className:"text text-wrap",children:a.split("\n").map((e,t)=>(0,r.jsxs)(s.Fragment,{children:[e,(0,r.jsx)("br",{})]},t))}),(0,r.jsxs)("ul",{className:"pt-5 flex flex-row gap-4",children:[(0,r.jsx)("li",{className:"icon",children:(0,r.jsx)("a",{href:"https://www.github.com/GabrielAbdul",target:"_blank",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-6 w-6","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})})}),(0,r.jsx)("li",{className:"icon",children:(0,r.jsx)("a",{href:"https://www.linkedin.com/in/gabrielabdulraheem",target:"_blank",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-6 w-6","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"})})})}),(0,r.jsx)("li",{className:"icon",children:(0,r.jsx)("a",{href:"https://github.com/qtparcel/resume/blob/main/GabrielAbdulRaheem_Resume.pdf",target:"_blank",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",fill:"currentColor",className:"h-6 w-6",children:[(0,r.jsx)("path",{d:"m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z"}),(0,r.jsx)("path",{d:"M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z"}),(0,r.jsx)("path",{d:"M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z"})]})})})]})]}),(0,r.jsxs)("section",{id:"m-about",className:"place-self-center",children:[(0,r.jsx)("h2",{className:"text-sm font-bold mb-2 max-w-sm",children:"ABOUT"}),(0,r.jsx)("div",{className:"about-text",children:(0,r.jsxs)("div",{className:"about mb-40",style:{color:"var(--text-secondary)"},children:[(0,r.jsxs)("p",{children:[" ","As a passionate developer, I combine creative ingenuity with robust engineering to deliver pixel-perfect user interfaces. My specialty lies at the intersection of perspective and performance, curating unique experiences that are not only visually stunning but also optimized for usability."," "]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Currently, Im a Freelance Web Developer at"," ",(0,r.jsx)("a",{href:"https://station8branding.com/",target:"_blank",className:"text-primary",children:"Station8"}),", specializing in front end development."]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Over the years Ive had the opportunity to work on a large variety of projects, from"," ",(0,r.jsx)("a",{href:"https://technicalpeople.com/",target:"_blank",className:"text-primary",children:"small corporations"})," ","and"," ",(0,r.jsx)("a",{href:"https://www.fordav.com/",target:"_blank",className:"text-primary",children:"construction companies"})," ","to",(0,r.jsxs)("a",{href:"https://www.cymstar.com/",target:"_blank",className:"text-primary",children:[" ","government contracting"]})," ","and now"," ",(0,r.jsx)("a",{href:"https://station8branding.com/",target:"_blank",className:"text-primary",children:"branding agencies"}),". Additionally, I offer web services for small business owners enhancing their market presence."]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["In my spare time, Im usually at the gym or outside, reading, or serving guests at the"," ",(0,r.jsx)("a",{href:"https://olivegarden.com",target:"_blank",className:"text-primary",children:"Olive Garden"}),"."]})]})})]}),(0,r.jsxs)("section",{className:"mb-12",id:"m-experience",children:[(0,r.jsx)("h2",{className:"text-sm font-bold mb-2",children:"EXPERIENCE"}),(0,r.jsx)("div",{className:"v-[8vh] max-w-[95vw] text-wrap",children:n.map((e,t)=>(0,r.jsx)("a",{target:"_blank",href:e.strLink,children:(0,r.jsx)(j,{experience:e},t)},t))})]}),(0,r.jsxs)("section",{id:"m-projects",children:[(0,r.jsx)("h2",{className:"text-sm font-bold mb-2",children:"PROJECTS"}),(0,r.jsx)("div",{className:"v-[10vh]",children:i.map((e,t)=>(0,r.jsx)("a",{target:"_blank",href:e.strLink,children:(0,r.jsx)(w,{project:e},t)},t))})]}),(0,r.jsx)("section",{children:(0,r.jsxs)("p",{className:"ml-2 mt-20 pb-20 text-sm max-w-sm",children:["Inspired by Brittany Chiang. Written in"," ",(0,r.jsx)("a",{href:"https://code.visualstudio.com/",target:"_blank",children:(0,r.jsxs)("span",{className:"text-primary hover-accent",children:["Visual Studio Code"," "]})}),"Built with",(0,r.jsxs)("a",{href:"https://nextjs.org/",target:"_blank",children:[(0,r.jsx)("span",{className:"text-primary hover-accent",children:" Next.js"})," ","and"," "]}),(0,r.jsx)("a",{href:"https://tailwindcss.com/",target:"_blank",children:(0,r.jsxs)("span",{className:"text-primary hover-accent",children:["TailwindCSS,"," "]})}),"deployed with"," ",(0,r.jsxs)("a",{href:"https://porkbun.com/",target:"_blank",children:[(0,r.jsx)("span",{className:"text-primary hover-accent",children:"Porkbun"}),"."]})]})})]})})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[406,175,441,517,358],()=>t(8536)),_N_E=e.O()}]);