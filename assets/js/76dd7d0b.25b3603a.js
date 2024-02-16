"use strict";(self.webpackChunkcerebrum=self.webpackChunkcerebrum||[]).push([[8160],{7664:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(1527),i=t(395);const o={title:"Github\u306eGraphQL\u3092\u53e9\u304f",sidebar_position:1},s="Github\u306eGraphQL\u3092\u53e9\u304f",a={id:"Github\u306eGraphQL\u3092\u53e9\u304f",title:"Github\u306eGraphQL\u3092\u53e9\u304f",description:"Github\u306ePAT\u3092\u4f5c\u6210\u3059\u308b\u3002",source:"@site/docs/Github\u306eGraphQL\u3092\u53e9\u304f.md",sourceDirName:".",slug:"/Github\u306eGraphQL\u3092\u53e9\u304f",permalink:"/cerebrum/docs/Github\u306eGraphQL\u3092\u53e9\u304f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Github\u306eGraphQL\u3092\u53e9\u304f",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AppleScript\u3092\u4f7f\u3063\u3066Github\u306e\u8349\u304b\u3099\u751f\u3048\u3066\u3044\u306a\u3044\u6642\u901a\u77e5\u3059\u308b",permalink:"/cerebrum/docs/AppleScript\u3092\u4f7f\u3063\u3066Github\u306e\u8349\u304b\u3099\u751f\u3048\u3066\u3044\u306a\u3044\u6642\u901a\u77e5\u3059\u308b"},next:{title:"Mac\u306equicktime player\u753b\u9762\u53ce\u9332\u3057\u306a\u304b\u3099\u3089\u901a\u77e5\u3092\u8868\u793a\u3059\u308b\u65b9\u6cd5",permalink:"/cerebrum/docs/Mac\u306equicktime player\u753b\u9762\u53ce\u9332\u3057\u306a\u304c\u3089\u901a\u77e5\u3092\u8868\u793a\u3059\u308b\u65b9\u6cd5"}},c={},u=[];function p(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"github\u306egraphql\u3092\u53e9\u304f",children:"Github\u306eGraphQL\u3092\u53e9\u304f"}),"\n",(0,r.jsx)(e.p,{children:"Github\u306ePAT\u3092\u4f5c\u6210\u3059\u308b\u3002\ngh\u7d4c\u7531\u3067\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306fPAT\u3092\u8a2d\u5b9a\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u3059\u308b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"gh auth login\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5fc5\u8981\u306a\u6a29\u9650\u306f 'repo', 'read",":org","', 'admin",":public_key","'.\u306e\u4e09\u3064"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\ngh api graphql -f query='\n  query {\n    user(login: \"TakuyaTaniguchi\") {\n      repositories(first: 80, orderBy: {field: CREATED_AT, direction: DESC}) {\n        nodes {\n          id\n          name\n          owner {\n            login\n          }\n        }\n      }\n    }\n  }'\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"contributions\u306e\u53d6\u5f97"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'gh api graphql -f mutation=\'\n  query {\n    user(login: "TakuyaTaniguchi") {\n        createLabel(input:{\n            title: "Create issue from GraphQL", repositoryId:"repository-id-xxxxxxxxxxxxxxxxxxx",\n            projectIds:"project-id-xxxx", \n            labelIds: ["label-id-xxxxxxx"]}) {\n            issue {\n            id\n            }\n        }\n    }\n  }\'\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5168\u3066\u306emutation\u3092\u53d6\u5f97\u3057\u3066\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304d\u51fa\u3059"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"gh api graphql -f query='\n  query {\n    __schema {\n      mutationType {\n        fields {\n          name\n        }\n      }\n    }\n  }' --jq '.data.__schema.mutationType.fields' > ~/Desktop/mutations.json\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"gh api graphql -f query='\n  query {\n    user(login: \"TakuyaTaniguchi\") {\n     contributionsCollection {\n      contributionCalendar {\n        totalContributions\n        weeks {\n          contributionDays {\n            contributionCount\n            date\n          }\n        }\n      }\n    }\n    }\n  }'\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://zenn.dev/yuichkun/articles/b207651f5654b0",children:"https://zenn.dev/yuichkun/articles/b207651f5654b0"})})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},395:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var r=t(959);const i={},o=r.createContext(i);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);