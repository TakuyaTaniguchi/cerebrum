"use strict";(self.webpackChunkcerebrum=self.webpackChunkcerebrum||[]).push([[3031],{9830:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=r(1527),t=r(395);const i={title:"ruby\u958b\u767a\u74b0\u5883\u30e1\u30e2",sidebar_position:1},o="ruby\u958b\u767a\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b",l={id:"ruby\u958b\u767a\u74b0\u5883\u30e1\u30e2",title:"ruby\u958b\u767a\u74b0\u5883\u30e1\u30e2",description:"asdf\u3067version\u7ba1\u7406\u30c4\u30fc\u30eb\u3092\u5165\u308c\u308b",source:"@site/docs/ruby\u958b\u767a\u74b0\u5883\u30e1\u30e2.md",sourceDirName:".",slug:"/ruby\u958b\u767a\u74b0\u5883\u30e1\u30e2",permalink:"/cerebrum/docs/ruby\u958b\u767a\u74b0\u5883\u30e1\u30e2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"ruby\u958b\u767a\u74b0\u5883\u30e1\u30e2",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/cerebrum/docs/intro"},next:{title:"\u95a2\u6570\u540d\u3092\u6c7a\u3081\u308b\u3068\u304d\u306b\u3061\u3087\u3063\u3068\u3060\u3051\u8003\u3048\u308b\u3053\u3068\u3067\u304d\u305f",permalink:"/cerebrum/docs/\u5909\u6570\u540d\u3066\u3099\u8003\u3048\u308b\u3053\u3068\u304b\u3099\u3066\u3099\u304d\u305f"}},c={},a=[{value:"asdf\u3067version\u7ba1\u7406\u30c4\u30fc\u30eb\u3092\u5165\u308c\u308b",id:"asdf\u3067version\u7ba1\u7406\u30c4\u30fc\u30eb\u3092\u5165\u308c\u308b",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"ruby\u958b\u767a\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b",children:"ruby\u958b\u767a\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,s.jsx)(e.h2,{id:"asdf\u3067version\u7ba1\u7406\u30c4\u30fc\u30eb\u3092\u5165\u308c\u308b",children:"asdf\u3067version\u7ba1\u7406\u30c4\u30fc\u30eb\u3092\u5165\u308c\u308b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"asdf install ruby 3.3.0\nasdf global ruby 3.3.0\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u3044\u305f\u3044\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u9069\u7528\u3059\u308b"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:" asdf local ruby 3.0.2\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"vscode\u306b\u5fc5\u8981\u306a\u62e1\u5f35\u6a5f\u80fd\u3092\u5165\u308c\u308b\nRuby\nRuby LSP\nruby-robocop-revived\nVSCode rdbg Ruby Debugger"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"setting.json\u306e\u8a2d\u5b9a"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'    "[ruby]": {\n        "editor.defaultFormatter": "Shopify.ruby-lsp",\n        "editor.formatOnSave": true,\n        "editor.formatOnType": true,\n        "editor.tabSize": 2,\n        "editor.insertSpaces": true,\n        "files.trimTrailingWhitespace": true,\n        "files.insertFinalNewline": true,\n        "files.trimFinalNewlines": true,\n        "editor.rulers": [\n            120\n        ],\n        "editor.semanticHighlighting.enabled": true,\n        "rubyLsp.rubyVersionManager": "asdf",\n        "rubyLsp.formatter": "rubocop",\n    },\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"launch.json\u3067\u30c7\u30d0\u30c3\u30af\u306e\u4f5c\u6210\u3059\u308b"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    // IntelliSense \u3092\u4f7f\u7528\u3057\u3066\u5229\u7528\u53ef\u80fd\u306a\u5c5e\u6027\u3092\u5b66\u3079\u307e\u3059\u3002\n    // \u65e2\u5b58\u306e\u5c5e\u6027\u306e\u8aac\u660e\u3092\u30db\u30d0\u30fc\u3057\u3066\u8868\u793a\u3057\u307e\u3059\u3002\n    // \u8a73\u7d30\u60c5\u5831\u306f\u6b21\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044: https://go.microsoft.com/fwlink/?linkid=830387\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "rdbg",\n            "name": "Debug current file with rdbg",\n            "request": "launch",\n            "cwd": "${workspaceRoot}",\n            "script": "bin/rails server",\n            "args": [],\n            "askParameters": false,\n            "useBundler": true,\n        },\n        {\n            "type": "rdbg",\n            "name": "Attach with rdbg",\n            "request": "attach"\n        }\n    ]\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},395:(n,e,r)=>{r.d(e,{Z:()=>l,a:()=>o});var s=r(959);const t={},i=s.createContext(t);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);