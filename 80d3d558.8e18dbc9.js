(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return o}));var a=n(3),b=n(8),i=(n(0),n(171)),c={id:"getting_start",title:"CSK\u9879\u76ee\u5f00\u53d1\u5feb\u901f\u5165\u95e8 V2",slug:"/getting_start"},l={unversionedId:"guides/getting_start/getting_start",id:"guides/getting_start/getting_start",isDocsHomePage:!1,title:"CSK\u9879\u76ee\u5f00\u53d1\u5feb\u901f\u5165\u95e8 V2",description:"\u901a\u8fc7\u672c\u7bc7\u4f60\u5c06\u901a\u8fc7\u4e00\u7cfb\u5217\u5177\u4f53\u7684\u793a\u4f8b\u64cd\u4f5c\u4e86\u89e3\u5230\uff1a",source:"@site/docs/guides/getting_start/getting_start new.md",slug:"/getting_start",permalink:"/getting_start",version:"current"},r=[{value:"1. \u505a\u597d\u51c6\u5907",id:"1-\u505a\u597d\u51c6\u5907",children:[{value:"1.1 \u4e0b\u8f7d\u5b89\u88c5 LStudio",id:"11-\u4e0b\u8f7d\u5b89\u88c5-lstudio",children:[]},{value:"1.2 \u767b\u5f55",id:"12-\u767b\u5f55",children:[]},{value:"1.3 \u5b89\u88c5\u9a71\u52a8",id:"13-\u5b89\u88c5\u9a71\u52a8",children:[]},{value:"1.4 \u51c6\u5907 LSKits \u5f00\u53d1\u677f",id:"14-\u51c6\u5907-lskits-\u5f00\u53d1\u677f",children:[]}]},{value:"2. \u5236\u4f5c\u7b2c\u4e00\u4e2a CSK \u56fa\u4ef6",id:"2-\u5236\u4f5c\u7b2c\u4e00\u4e2a-csk-\u56fa\u4ef6",children:[{value:"2.1 \u521b\u5efa\u9879\u76ee",id:"21-\u521b\u5efa\u9879\u76ee",children:[]},{value:"2.3 \u8d44\u6e90\u914d\u7f6e",id:"23-\u8d44\u6e90\u914d\u7f6e",children:[]},{value:"2.4 \u56fa\u4ef6\u6253\u5305",id:"24-\u56fa\u4ef6\u6253\u5305",children:[]},{value:"2.5 \u56fa\u4ef6\u70e7\u5f55",id:"25-\u56fa\u4ef6\u70e7\u5f55",children:[]},{value:"2.6 \u201c\u4f60\u597d\u54c8\u5229\uff01\u201d",id:"26-\u4f60\u597d\u54c8\u5229\uff01",children:[]}]},{value:"3. \u70b9\u4eae LED \u706f",id:"3-\u70b9\u4eae-led-\u706f",children:[{value:"3.1 \u6ce8\u518c\u56de\u8c03\u4e8b\u4ef6\u5e76\u914d\u7f6e\u5f15\u811a",id:"31-\u6ce8\u518c\u56de\u8c03\u4e8b\u4ef6\u5e76\u914d\u7f6e\u5f15\u811a",children:[]},{value:"3.2 \u9a71\u52a8GPIO\u8fdb\u884cLED\u63a7\u5236",id:"32-\u9a71\u52a8gpio\u8fdb\u884cled\u63a7\u5236",children:[]},{value:"3.3 \u4f53\u9a8c\u65b0\u7684\u6548\u679c",id:"33-\u4f53\u9a8c\u65b0\u7684\u6548\u679c",children:[]}]},{value:"\u4e86\u89e3\u66f4\u591a",id:"\u4e86\u89e3\u66f4\u591a",children:[]}],p={toc:r};function o(e){var t=e.components,c=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u901a\u8fc7\u672c\u7bc7\u4f60\u5c06\u901a\u8fc7\u4e00\u7cfb\u5217\u5177\u4f53\u7684\u793a\u4f8b\u64cd\u4f5c\u4e86\u89e3\u5230\uff1a"),Object(i.b)("ol",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ol"},"\u5982\u4f55\u5b8c\u6210 LStudio \u73af\u5883\u914d\u7f6e\uff1b"),Object(i.b)("li",{parentName:"ol"},"\u5982\u4f55\u4f7f\u7528 LStudio \u521b\u5efa\u9879\u76ee\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u56fa\u4ef6\u914d\u7f6e\uff1b"),Object(i.b)("li",{parentName:"ol"},"\u5982\u4f55\u4f7f\u7528 LStudio \u628a\u56fa\u4ef6\u70e7\u5f55\u5230 LSKits\uff0c\u5f97\u5230\u4e00\u4e2a\u5c0f\u98ce\u6247\u8bed\u97f3\u4ea4\u4e92 demo\uff1b"),Object(i.b)("li",{parentName:"ol"},"\u5982\u4f55\u4f7f\u7528\u7b80\u6d01\u8bed\u6cd5\u5b9e\u73b0\uff1a\u5728\u83b7\u53d6\u56de\u8c03\u540e\uff0c\u5b9a\u4e49 GPIO \u63a7\u5236\u5916\u56f4\u5668\u4ef6\u3002"))),Object(i.b)("h2",{id:"1-\u505a\u597d\u51c6\u5907"},"1. \u505a\u597d\u51c6\u5907"),Object(i.b)("h3",{id:"11-\u4e0b\u8f7d\u5b89\u88c5-lstudio"},"1.1 \u4e0b\u8f7d\u5b89\u88c5 LStudio"),Object(i.b)("p",null,"\u70b9\u51fb",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://castor.iflyos.cn/castor/v3/lstudio/download"}),"\u6b64\u5904"),"\u4e0b\u8f7d LStudio \u5b89\u88c5\u5305\uff0c\u4f9d\u6b21\u70b9\u51fb \u201c\u4e0b\u4e00\u6b65\u201d \u76f4\u81f3\u5b89\u88c5\u5b8c\u6210\u3002"),Object(i.b)("h3",{id:"12-\u767b\u5f55"},"1.2 \u767b\u5f55"),Object(i.b)("p",null,Object(i.b)("img",{src:n(200).default})),Object(i.b)("p",null,"\u4f7f\u7528\u8046\u601d\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\uff0c\u5982\u679c\u6ca1\u6709\u8d26\u53f7\u8bf7\u5148\u6ce8\u518c\u3002"),Object(i.b)("h3",{id:"13-\u5b89\u88c5\u9a71\u52a8"},"1.3 \u5b89\u88c5\u9a71\u52a8"),Object(i.b)("p",null,Object(i.b)("img",{src:n(201).default})),Object(i.b)("p",null,"\u70b9\u51fb\u5de6\u4e0a\u65b9\u5e38\u7528\u5de5\u5177\uff0c\u5b89\u88c5\u70e7\u5f55\u9a71\u52a8\u3002"),Object(i.b)("h3",{id:"14-\u51c6\u5907-lskits-\u5f00\u53d1\u677f"},"1.4 \u51c6\u5907 LSKits \u5f00\u53d1\u677f"),Object(i.b)("p",null,"\u4f60\u9700\u8981\u62ff\u5230\u4e00\u4e2a\u8046\u601d\u5b98\u65b9\u7684\u5f00\u53d1\u677f\uff0c\u8bf7\u5173\u6ce8\u8046\u601d\u79d1\u6280\u516c\u4f17\u53f7\uff08LISTENAI\uff09\u6216\u8054\u7cfb\u8046\u601d\u5546\u52a1\u56e2\u961f\u83b7\u53d6\u3002"),Object(i.b)("p",null,"\u5728\u5f97\u5230 LSKits \u5f00\u53d1\u677f\u540e\uff0c\u7ec4\u88c5\u89c6\u9891\u53ef\u4ee5\u53c2\u8003\u8fd9\u4e2a\u89c6\u9891\uff1a",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.bilibili.com/video/BV1po4y1d7fB"}),"\u8046\u601d\u5f00\u53d1\u677f LSKits \u7ec4\u88c5\u8bf4\u660e")),Object(i.b)("h2",{id:"2-\u5236\u4f5c\u7b2c\u4e00\u4e2a-csk-\u56fa\u4ef6"},"2. \u5236\u4f5c\u7b2c\u4e00\u4e2a CSK \u56fa\u4ef6"),Object(i.b)("p",null,"\u4f60\u5c06\u5b66\u4f1a\u52a8\u624b\u521b\u5efa\u4e00\u4e2a CSK \u56fa\u4ef6\uff0c\u8bf7\u6309\u7167\u6587\u6863\u8bf4\u660e\u9010\u6b65\u64cd\u4f5c\u3002"),Object(i.b)("h3",{id:"21-\u521b\u5efa\u9879\u76ee"},"2.1 \u521b\u5efa\u9879\u76ee"),Object(i.b)("h4",{id:"\u6253\u5f00\u547d\u4ee4\u884c\u7ec8\u7aef"},"\u6253\u5f00\u547d\u4ee4\u884c\u7ec8\u7aef"),Object(i.b)("p",null,"\u63a5\u4e0b\u6765\u4e00\u4e9b\u5217\u7684\u64cd\u4f5c\u9700\u8981\u7528\u5230\u547d\u4ee4\u884c\u8fdb\u884c\u64cd\u4f5c\u3002\u4f60\u53ef\u4ee5\u5728 LStudio \u754c\u9762\u53f3\u4e0a\u89d2\u70b9\u51fb\u300c\u7ec8\u7aef\u300d\u6309\u94ae\u5524\u8d77\u7cfb\u7edf\u7ec8\u7aef\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl + ~")," \u6253\u5f00 LStudio \u5185\u7f6e\u7684\u7ec8\u7aef\u3002"),Object(i.b)("p",null,Object(i.b)("img",{src:n(316).default})),Object(i.b)("h4",{id:"\u68c0\u67e5-lisa-\u73af\u5883"},"\u68c0\u67e5 LISA \u73af\u5883"),Object(i.b)("p",null,"LISA(Listenai Software Architecture)\u662f\u8046\u601d\u667a\u80fd\u63d0\u4f9b\u7684\u8f6f\u4ef6\u6846\u67b6\uff0c\u652f\u6301\u5ba2\u6237\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u4f7f\u7528\u5e76\u7ba1\u7406\u8046\u601d\u63d0\u4f9b\u7684\u8f6f\u4ef6\u5305\u3002CSK \u9879\u76ee\u7684\u521b\u5efa\u4e5f\u4f9d\u8d56 LISA \u73af\u5883\u3002"),Object(i.b)("p",null,"\u5728\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\u884c ",Object(i.b)("inlineCode",{parentName:"p"},"lisa -v"),"\uff0c\u770b\u5230 LISA \u7248\u672c\u53f7\uff0c\u4ee3\u8868 LISA \u51c6\u5907\u5c31\u7eea"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"> lisa --version\n@listenai/lisa/1.3.8 win32-x64 node-v14.15.4\n")),Object(i.b)("h4",{id:"\u9009\u62e9\u521b\u5efa\u9879\u76ee\u7684\u8def\u5f84"},"\u9009\u62e9\u521b\u5efa\u9879\u76ee\u7684\u8def\u5f84"),Object(i.b)("p",null,"\u9879\u76ee\u521b\u5efa\u9700\u8981\u6307\u5b9a\u7684\u8def\u5f84\u521b\u5efa\u9879\u76ee\u3002\u8bf7\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," \u547d\u4ee4\u6307\u5b9a\u8def\u5f84\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"> cd C:\\Users\\oralzl\\\u9879\u76ee\u6587\u4ef6\u5939\n")),Object(i.b)("h4",{id:"\u8f93\u5165\u521b\u5efa\u547d\u4ee4"},"\u8f93\u5165\u521b\u5efa\u547d\u4ee4"),Object(i.b)("p",null,"\u8bf7\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u521b\u5efa\u9879\u76ee ",Object(i.b)("inlineCode",{parentName:"p"},"lisa create newProject -t @generator/csk")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lisa create")," \u662f ",Object(i.b)("inlineCode",{parentName:"li"},"lisa")," \u7528\u4e8e\u521b\u5efa\u9879\u76ee\u7684\u547d\u4ee4"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"newProject")," \u4ee3\u8868\u9879\u76ee\u6587\u4ef6\u5939\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\u3002\u4ec5\u652f\u6301\u82f1\u6587\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u3001",Object(i.b)("inlineCode",{parentName:"li"},"-")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-t")," \u4ee3\u8868\u4f7f\u7528\u6a21\u677f\uff08template\uff09\u521b\u5efa\u9879\u76ee"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@generator/csk")," \u662fCSK\u8bed\u97f3\u4ea4\u4e92\u9879\u76ee\u7684\u6807\u51c6\u6a21\u677f")),Object(i.b)("p",null,"\u8f93\u5165\u521b\u5efa\u547d\u4ee4\u4e4b\u540e\uff0c\u521b\u5efa\u6a21\u677f\u4f1a\u63d0\u4f9b\u67b6\u624b\u67b6\u914d\u7f6e\u9879\u76ee\u6240\u9700\u5176\u4ed6\u8f6f\u4ef6\u5305\u3002"),Object(i.b)("p",null,"\u8bf7\u4f9d\u6b21\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"p"},"@source/csk4002"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"3.1.4"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"@board/lskits-csk4002"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"@algo/csk4002-cae-mlp")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"> lisa create newProject -t @generator/csk\n  \u221a \u9879\u76ee\u521b\u5efa\u51c6\u5907\n  \u221a \u521d\u59cb\u5316\u5b89\u88c5\u4f9d\u8d56\n? \u9009\u62e9\u82af\u7247\u65b9\u6848 @source/csk4002\n? \u9009\u62e9\u57fa\u7840\u56fa\u4ef6\u7248\u672c 3.1.4\n? \u9009\u62e9\u677f\u578b\u6a21\u7248 @board/lskits-csk4002\n? \u9009\u62e9\u7b97\u6cd5\u6a21  @algo/csk4002-cae-mlp\n  \u221a \u521b\u5efacsk\u5f00\u53d1\u9879\u76ee\u76ee\u5f55/\u6587\u4ef6\n  \u221a \u5b89\u88c5\u6e90\u7801/\u5fc5\u8981\u4f9d\u8d56\n  \u221a \u6e90\u7801\u521d\u59cb\u5316\n  \u221a lskit\u914d\u7f6e\u51c6\u5907\n  \u221a \u7b97\u6cd5\u914d\u7f6e\u51c6\u5907\n")),Object(i.b)("p",null,"\u5b8c\u6210\u9879\u76ee\u521b\u5efa\u4e4b\u540e\uff0cLStudio \u4f1a\u81ea\u52a8\u6253\u5f00\u65b0\u9879\u76ee\u3002"),Object(i.b)("h3",{id:"23-\u8d44\u6e90\u914d\u7f6e"},"2.3 \u8d44\u6e90\u914d\u7f6e"),Object(i.b)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8bed\u97f3\u4ea4\u4e92\uff0c\u4f60\u9700\u8981\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5524\u9192\u8bcd\u548c\u547d\u4ee4\u8bcd\u3002\u4e3a\u65b9\u4fbf\u5f00\u53d1\u8005\u5feb\u901f\u5b9e\u73b0\u4ea7\u54c1\u5f00\u53d1\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u8fd120\u4e2a\u5e38\u7528\u8bbe\u5907\u573a\u666f\u6a21\u677f\uff0c\u54c1\u7c7b\u6db5\u76d6\u51b0\u7bb1\u3001\u7a7a\u8c03\u548c\u98ce\u6247\u7b49\uff08\u6301\u7eed\u4e30\u5bcc\u4e2d\uff09\u3002\u8bf7\u70b9\u51fb\u300c\u9876\u90e8\u5de5\u5177\u680f-\u4ea4\u4e92\u914d\u7f6e\u300d\uff0c\u9009\u62e9",Object(i.b)("strong",{parentName:"p"},"\u5c0f\u98ce\u6247"),"\u6a21\u677f\u7136\u540e\u70b9\u51fb\u300c\u4fdd\u5b58\u300d\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{src:n(317).default})),Object(i.b)("h3",{id:"24-\u56fa\u4ef6\u6253\u5305"},"2.4 \u56fa\u4ef6\u6253\u5305"),Object(i.b)("p",null,"\u63a5\u4e0b\u6765\u9700\u8981\u5bf9\u56fa\u4ef6\u8fdb\u884c\u6253\u5305\u3002"),Object(i.b)("p",null,"\u5728\u5f53\u524d\u9879\u76ee\u4e2d\uff0c\u6253\u5f00\u547d\u4ee4\u884c\u7ec8\u7aef\uff0c\u8f93\u5165 ",Object(i.b)("inlineCode",{parentName:"p"},"lisa build")," \uff0c\u89e6\u53d1\u56fa\u4ef6\u6784\u5efa\u6d41\u7a0b\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"> lisa build\n  \u221a \u56fa\u4ef6\u7f16\u8bd1\n  \u221a \u7f16\u8bd1respak.bin\n  \u221a \u6253\u5305lpk\u5305\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"LPK \u6587\u4ef6\u662f\u6700\u7ec8\u6784\u5efa\u4ea7\u7269\uff0c\u53ef\u7528\u4e8e LISA \u70e7\u5f55")),Object(i.b)("h3",{id:"25-\u56fa\u4ef6\u70e7\u5f55"},"2.5 \u56fa\u4ef6\u70e7\u5f55"),Object(i.b)("p",null,"\u6700\u540e\uff0c\u4f60\u9700\u8981\u5c06\u6253\u5305\u597d\u7684\u56fa\u4ef6\u70e7\u5f55\u8fdb LSKits\u3002\u4f60\u53ef\u4ee5\u5148\u67e5\u770b\u6f14\u793a\u89c6\u9891\uff1a",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.bilibili.com/video/BV18T4y1P7Pm"}),"\u8046\u601d\u5f00\u53d1\u677fLSKits\u56fa\u4ef6\u70e7\u5f55\u8bf4\u660e"),"\u3002"),Object(i.b)("p",null,Object(i.b)("img",{src:n(202).default})),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u8bf7\u51c6\u5907 micro-usb \u6570\u636e\u7ebf"),"\uff08\u8bf7\u6ce8\u610f\u4e0d\u662f\u5706\u53e3\u7535\u6e90\u7ebf\uff0c\u67d0\u4e9b USB \u7ebf\u65e0\u6cd5\u8fdb\u884c\u6570\u636e\u4f20\u8f93\uff0c\u9700\u8981\u786e\u8ba4\u6392\u67e5\uff09\uff0c\u4f7f\u7528 USB \u6570\u636e\u7ebf\u8fde\u63a5 LSKits \u4e0e\u7535\u8111\uff0c\u5173\u95ed LSKits \u5f00\u5173\uff08\u5de6\u62e8\uff09\uff1b")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u6309\u4f4f")," LSKits \u4e0a\u7684 ",Object(i.b)("strong",{parentName:"p"},"update")," \u952e\uff0c\u518d\u6253\u5f00\u5f00\u5173\uff08\u53f3\u62e8\uff09\uff0c",Object(i.b)("strong",{parentName:"p"},"\u5148\u4e0d\u8981\u677e\u5f00 update \u952e"),"\uff1b")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"\u5728\u5f53\u524d\u9879\u76ee\u4e2d\uff0c\u6253\u5f00\u547d\u4ee4\u884c\u7ec8\u7aef\uff0c\u8f93\u5165 ",Object(i.b)("inlineCode",{parentName:"p"},"lisa flash")," \uff0c\u89e6\u53d1\u56fa\u4ef6\u70e7\u5f55\u6d41\u7a0b\u3002"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"> lisa flash\n  \u221a \u89e3\u538bLPK\u6587\u4ef6\n  \u221a \u89e3\u6790\u914d\u7f6e\u6587\u4ef6\nbin list > flashboot(0),master(0x10000),script(0xf0000),respak(0x100000)\n[-]\u8bbe\u5907\u8bf7\u8fdb\u5165\u70e7\u5f55\u6a21\u5f0f...\n\u70e7\u5f55\u5206\u533a 1\uff5c \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 17.85 KB/17.85 KB | flashboot(0)\n\u70e7\u5f55\u5206\u533a 2\uff5c \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 475.84 KB/475.84 KB | master(0x10000)\n\u70e7\u5f55\u5206\u533a 3\uff5c \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 3.91 KB/3.91 KB | script(0xf0000)\n\u70e7\u5f55\u5206\u533a 4\uff5c \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 | 4370.25 KB/4370.25 KB | respak(0x100000)\n\u70e7\u5f55\u5b8c\u6210\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"\u70e7\u5f55\u5b8c\u6210\u540e\uff0c\u6309\u51fb LSKits \u7684 ",Object(i.b)("strong",{parentName:"li"},"reset")," \u952e\uff0c\u65b0\u70e7\u5f55\u7684\u56fa\u4ef6\u5373\u53ef\u751f\u6548\u3002")),Object(i.b)("p",null,Object(i.b)("img",{src:n(203).default})),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u82e5\u70e7\u5f55\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\uff1a")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"\u662f\u5426\u5df2\u51c6\u786e\u6267\u884c\u4e0a\u65b9\u70e7\u5f55\u6d41\u7a0b\uff1b"),Object(i.b)("li",{parentName:"ol"},"\u662f\u5426\u5df2\u5b89\u88c5\u70e7\u5f55\u9a71\u52a8\uff1b"),Object(i.b)("li",{parentName:"ol"},"\u8bf7\u786e\u4fdd LSKits \u4e0a\u7684\u82af\u7247\u578b\u53f7\u662f4002\uff1b"),Object(i.b)("li",{parentName:"ol"},"\u70e7\u5f55\u6216\u8005\u91cd\u542f\u7684\u65f6\u5019\uff0c\u9700\u8981\u628a\u4e32\u53e3\u62d4\u6389\u3002\u786c\u4ef6\u4e0a\u4e32\u53e3\u7535\u6e90\u4f1a\u5012\u704c\uff0c\u53ef\u80fd\u5f15\u8d77\u65e0\u6cd5\u91cd\u542f\u6216\u8005\u70e7\u5f55\uff1b"),Object(i.b)("li",{parentName:"ol"},"\u82e5\u8fde\u7eed\u70e7\u5f55\u5931\u8d25\uff0c\u8bf7\u8054\u7cfbFAE/\u63d0\u4ea4\u5de5\u5355\u5bfb\u6c42\u5e2e\u52a9\u3002")))),Object(i.b)("h3",{id:"26-\u4f60\u597d\u54c8\u5229\uff01"},"2.6 \u201c\u4f60\u597d\u54c8\u5229\uff01\u201d"),Object(i.b)("p",null,"\u606d\u559c\u4f60\u5f97\u5230\u4e86\u7b2c\u4e00\u4e2a\u56fa\u4ef6\u3002\u73b0\u5728\u4f60\u53ef\u4ee5\u4f7f\u7528\u5524\u9192\u8bcd",Object(i.b)("strong",{parentName:"p"},"\u4f60\u597d\u54c8\u5229"),"\u548c",Object(i.b)("strong",{parentName:"p"},"\u4ea4\u4e92\u914d\u7f6e\u4e2d\u7684\u547d\u4ee4\u8bcd"),"\u4e0e LSKits \u8fdb\u884c\u4ea4\u4e92\u4e86\u3002"),Object(i.b)("p",null,"\u4f60\u4e5f\u5728 LStudio \u96c6\u6210\u7684\u4e32\u53e3\u5de5\u5177\u4e2d\u67e5\u770b\u8bed\u97f3\u4ea4\u4e92\u8fc7\u7a0b\u4e2d\u7684\u65e5\u5fd7\u3002\u4f60\u9700\u8981\u5148\u81ea\u5907\u4e32\u53e3\u8fde\u63a5\u7535\u8111\u4e0e LSKits\u3002"),Object(i.b)("p",null,"\u5982\u4e0b\u56fe\uff0c",Object(i.b)("strong",{parentName:"p"},"\u4e32\u53e3 RXD")," \u63a5 ",Object(i.b)("strong",{parentName:"p"},"LSKits TX1"),"\uff0c",Object(i.b)("strong",{parentName:"p"},"\u4e32\u53e3 GND")," \u63a5 ",Object(i.b)("strong",{parentName:"p"},"LSKits GND"),"\u3002"),Object(i.b)("p",null,Object(i.b)("img",{src:n(204).default})),Object(i.b)("p",null,"\u5728\u4e32\u53e3\u5b8c\u6210\u5bf9\u63a5\u540e\uff0c\u6253\u5f00 LStudio \u4e32\u53e3\u5de5\u5177\uff0c\u6253\u5f00\u68c0\u6d4b\u5230\u7684\u4e32\u53e3\uff0c\u5373\u53ef\u770b\u5230\u4ea4\u4e92\u8fc7\u7a0b\u4e2d\u7684\u65e5\u5fd7\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{src:n(205).default})),Object(i.b)("h2",{id:"3-\u70b9\u4eae-led-\u706f"},"3. \u70b9\u4eae LED \u706f"),Object(i.b)("p",null,"\u76f8\u4fe1\u4f60\u5df2\u7ecf\u80fd\u591f\u4f53\u9a8c\u5230\u98ce\u6247 demo \u7684\u8bed\u97f3\u4ea4\u4e92\u4e86\uff0c\u4f46\u597d\u50cf\u8fd8\u4e0d\u80fd\u771f\u6b63\u5b9e\u73b0\u98ce\u6247\u63a7\u5236\u3002\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u6839\u636e\u88ab\u63a7\u8bbe\u5907\u82af\u7247\u901a\u4fe1\u534f\u8bae\uff08\u5982 UART/I2S/PWM \u7b49\uff09\u8fdb\u884c\u5f00\u53d1\u3002\u4e3a\u6f14\u793a\u4e0e\u88ab\u63a7\u8bbe\u5907\u901a\u4fe1\uff0c\u6211\u4eec\u901a\u8fc7\u70b9\u4eae LSKits \u4e0a\u4e00\u4e2a LED \u706f\u6765\u5c55\u793a\u901a\u4fe1\u65b9\u5f0f\u7684\u5b9e\u73b0\u3002"),Object(i.b)("h3",{id:"31-\u6ce8\u518c\u56de\u8c03\u4e8b\u4ef6\u5e76\u914d\u7f6e\u5f15\u811a"},"3.1 \u6ce8\u518c\u56de\u8c03\u4e8b\u4ef6\u5e76\u914d\u7f6e\u5f15\u811a"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u4f60\u5c06\u5b9e\u73b0\u5728\u7528\u6237\u4e3b\u7a0b\u5e8f\u4e2d\u6ce8\u518c\u7cfb\u7edf\u56de\u8c03\uff0c\u5728\u56de\u8c03\u4e2d\u5b8c\u6210\u610f\u56fe\u53d1\u9001\u3002")),Object(i.b)("p",null,"\u5728\u9879\u76ee\u76ee\u5f55\u627e\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"app/app_main.c")," \u6587\u4ef6:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u5728\u8bc6\u522b\u56de\u8c03\u51fd\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"cb_esr_recognition")," \u4e2d\u4f7f\u7528\u51fd\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"csk_script_handle_intent")," \uff0c\u53d1\u9001\u5f53\u524d\u7684\u610f\u56fe\u7ed9 ",Object(i.b)("inlineCode",{parentName:"li"},"ScriptEngine")," \u5904\u7406\uff08\u53ef\u901a\u8fc7\u53d6\u6d88\u6e90\u7801\u6ce8\u91ca\u6253\u5f00\u529f\u80fd\uff09;")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'static void\ncb_esr_recognition(keyword_attrs_t *key_attrs)\n{\n    CLOGD("[APP]ESR Recognition: kid=%d", key_attrs->kid);\n\n    // \u5982\u9700\u5728 ScriptEngine \u4e2d\u5904\u7406\u6307\u4ee4\uff0c\u53d6\u6d88\u4e0b\u9762\u8fd9\u4e00\u884c\u7684\u6ce8\u91ca\n    csk_script_handle_intent(key_attrs->txt);\n}\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"\u7ee7\u7eed\u5728",Object(i.b)("inlineCode",{parentName:"li"},"app_main"),"\u4e2d\u8fdb\u884c\u4fee\u6539\uff08\u53ef\u901a\u8fc7\u53d6\u6d88\u6e90\u7801\u6ce8\u91ca\u6253\u5f00\u529f\u80fd\uff09")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"csk_handler_register(CSK_EVENT_WAKE_UP, cb_wake_up)"),"\u6ce8\u518c\u5524\u9192\u56de\u8c03;\n")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"csk_handler_register(CSK_EVENT_ESR_RECOGNITION, cb_esr_recognition)"),"\u6ce8\u518c\u8bc6\u522b\u56de\u8c03\uff1b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"pinmux_config")," \u914d\u7f6e\u82af\u7247\u7ba1\u811a\u7684\u529f\u80fd; "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u4f7f\u7528\u82af\u7247\u7ba1\u811a ",Object(i.b)("inlineCode",{parentName:"li"},"PIN42")," \uff0c\u9009\u7528\u529f\u80fd0\uff08GPIO \u529f\u80fd\uff09\u3002")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'void\napp_main(void)\n{\n    CLOGD("[APP]Hello world");\n\n    // \u5524\u9192\u548c\u547d\u4ee4\u8bcd\u76f8\u5173\u56de\u8c03\uff0c\u53d6\u6d88\u6ce8\u91ca\u4f7f\u7528\n    csk_handler_register(CSK_EVENT_WAKE_UP, cb_wake_up);\n    csk_handler_register(CSK_EVENT_ESR_RECOGNITION, cb_esr_recognition);\n    \n    // \u5982\u4f7f\u7528 PIN42\u7684GPIO\u529f\u80fd\u6765\u9a71\u52a8LED20\uff0c\u53d6\u6d88\u4e0b\u9762\u8fd9\u4e00\u884c\u7684\u6ce8\u91ca\n    pinmux_config(42, 0);  // LED20\n}\n')),Object(i.b)("h3",{id:"32-\u9a71\u52a8gpio\u8fdb\u884cled\u63a7\u5236"},"3.2 \u9a71\u52a8GPIO\u8fdb\u884cLED\u63a7\u5236"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u4f60\u5c06\u4f7f\u7528\u8f7b\u91cf\u7ea7\u8bed\u6cd5\uff0c\u5728\u811a\u672c\u4e2d\u6355\u83b7\u610f\u56fe, \u5e76\u8fdb\u884cGPIO\u7684\u63a7\u5236\u3002")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u6355\u83b7\u547d\u4ee4\u8bcd\u300c\u6253\u5f00\u98ce\u6247\u300d\u540e\uff0c\u70b9\u4eae LED20")),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"app/scripts/intents.rb")," \u5b9a\u4e49\u4e1a\u52a1\u903b\u8f91\u3002\u5148\u4fee\u6539\u7b2c\u4e00\u4e2a\u793a\u4f8b\u65b9\u6cd5\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u628a ",Object(i.b)("inlineCode",{parentName:"li"},"on_intent")," \u540e\u7684\u547d\u4ee4\u8bcd\u4fee\u6539\u4e3a\u9700\u8981\u6355\u83b7\u7684",Object(i.b)("inlineCode",{parentName:"li"},"\u6253\u5f00\u98ce\u6247"),"\uff1b"),Object(i.b)("li",{parentName:"ol"},"\u540c\u6b65\u4fee\u6539\u65e5\u5fd7\u6253\u5370\u5185\u5bb9 ",Object(i.b)("inlineCode",{parentName:"li"},'EngineCore.logger.info "\u6253\u5f00\u98ce\u6247"'),";"),Object(i.b)("li",{parentName:"ol"},"\u53d6\u6d88 ",Object(i.b)("inlineCode",{parentName:"li"},"IO.set 42, :low")," \u7684\u6ce8\u91ca\uff0c\u5b9e\u73b0\u70b9\u4eae LED20\uff1b")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'on_intent "\u6253\u5f00\u98ce\u6247" do\n  EngineCore.logger.info "\u6253\u5f00\u98ce\u6247"\n  \n  # \u70b9\u4eae LED20\n  IO.set 42, :low\nend\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u6355\u83b7\u547d\u4ee4\u8bcd \u300c\u5173\u95ed\u98ce\u6247\u300d \u540e\uff0c\u7184\u706d LED20")),Object(i.b)("p",null,"\u7136\u540e\u4fee\u6539\u7b2c\u4e8c\u4e2a\u793a\u4f8b\u65b9\u6cd5\uff0c\u5b9a\u4e49\u6355\u83b7",Object(i.b)("strong",{parentName:"p"},"\u5173\u95ed\u98ce\u6247"),"\u540e\u7684\u4ea4\u4e92\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'on_intent "\u5173\u95ed\u98ce\u6247" do\n  EngineCore.logger.info "\u5173\u95ed\u98ce\u6247"\n\n  # \u7184\u706d LED20\n  IO.set 42, :high\nend\n')),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u5728LStudio \u4f7f\u7528\u8f7b\u91cf\u7ea7\u8bed\u6cd5\u5b9e\u73b0\u4e1a\u52a1\u914d\u7f6e\uff0c\u53ef\u4ee5\u67e5\u770b",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://open.listenai.com/csk_sdk_demo"}),"CSK SDK\u4f7f\u7528\u793a\u4f8b")," \u3002"),Object(i.b)("p",null,"\u8fd8\u6709\u66f4\u8be6\u5c3d\u7684API\u6587\u6863\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://open.listenai.com/csksdk/csk4002/mruby/table_of_contents.html"}),"EngineCore API"),"\u3002"),Object(i.b)("h3",{id:"33-\u4f53\u9a8c\u65b0\u7684\u6548\u679c"},"3.3 \u4f53\u9a8c\u65b0\u7684\u6548\u679c"),Object(i.b)("p",null,"\u7531\u4e8e\u4e0a\u8ff0\u6b65\u9aa4\u5df2\u7ecf\u4fee\u6539\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"./app")," \u4e2d\u7684\u4ee3\u7801\uff0c\u8bf7\u52a1\u5fc5\u5728\u5de5\u5177\u680f\u70b9\u51fb\u300c\u7f16\u8bd1\u300d\uff0c\u5bf9\u4ee3\u7801\u8fdb\u884c\u91cd\u65b0\u7f16\u8bd1\u3002\n\u5728\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4f9d\u6b21\u8fdb\u884c",Object(i.b)("strong",{parentName:"p"},"\u56fa\u4ef6\u6253\u5305\u3001\u56fa\u4ef6\u70e7\u5f55"),"\u3002"),Object(i.b)("p",null,"\u70e7\u5f55\u5b8c\u6210\u540e\u91cd\u542f\u5f00\u53d1\u5957\u4ef6\uff0c\u5f53\u547d\u4e2d",Object(i.b)("strong",{parentName:"p"},"\u6253\u5f00\u98ce\u6247"),"\u540e\uff0cLED20 \u706f\u5149\u4f1a\u540c\u6b65\u4eae\u8d77\uff1b\u5f53\u547d\u4e2d",Object(i.b)("strong",{parentName:"p"},"\u5173\u95ed\u98ce\u6247"),"\u540e\uff0cLED20 \u706f\u5149\u4f1a\u540c\u6b65\u7184\u706d\u3002"),Object(i.b)("p",null,Object(i.b)("img",{src:n(206).default})),Object(i.b)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u4e32\u53e3\u7ec8\u7aef\u67e5\u770b\u5230\u901a\u8fc7  ",Object(i.b)("inlineCode",{parentName:"p"},"ScriptEngine")," \u5b9a\u4e49\u51fa\u7684\u65e5\u5fd7\uff0c\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},"[I][SCRIPT]\u6253\u5f00\u98ce\u6247 "),"\u3002"),Object(i.b)("p",null,Object(i.b)("img",{src:n(207).default})),Object(i.b)("h2",{id:"\u4e86\u89e3\u66f4\u591a"},"\u4e86\u89e3\u66f4\u591a"),Object(i.b)("p",null,"\u4e3a\u4e86\u5feb\u901f\u5b9a\u5236\u6269\u5c55\u8bed\u97f3\u9879\u76ee\uff0c\u4f60\u53ef\u80fd\u5bf9\u4ee5\u4e0b\u5185\u5bb9\u4e5f\u611f\u5174\u8da3\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://open.listenai.com/vui"}),"\u81ea\u5b9a\u4e49\u8bcd\u8868\u4e0e\u56de\u590d\u8bed")," ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://open.listenai.com/csk_sdk_demo"}),"\u5982\u4f55\u4f7f\u7528LStudio\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5f00\u53d1")," ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://open.listenai.com/guides/firmware/base_config"}),"\u5982\u4f55\u4f7f\u7528LStudio\u4fee\u6539\u57fa\u7840\u914d\u7f6e")," "))),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6750\u6599\u8fdb\u4e00\u6b65\u4e86\u89e3 LSKits\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://open.listenai.com/resource/open/doc_resource%2F%E7%A1%AC%E4%BB%B6%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97%2F%E5%8E%9F%E7%90%86%E5%9B%BE%26PCB%E8%AE%BE%E8%AE%A1%E5%8F%82%E8%80%83%2FLSKits%E7%A1%AC%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%8C%87%E5%AF%BC%E6%89%8B%E5%86%8C.pdf"}),"LSKits\u786c\u4ef6\u4f7f\u7528\u6307\u5bfc\u624b\u518c.pdf"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://open.listenai.com/resource/open/doc_resource%2F%E7%A1%AC%E4%BB%B6%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97%2F%E5%8E%9F%E7%90%86%E5%9B%BE%26PCB%E8%AE%BE%E8%AE%A1%E5%8F%82%E8%80%83%2FLSKits%E5%8F%82%E8%80%83%E8%AE%BE%E8%AE%A1.zip"}),"\u4e0b\u8f7d LSKits \u53c2\u8003\u8bbe\u8ba1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://open.listenai.com/resource/open/doc_resource%2F%E7%A1%AC%E4%BB%B6%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97%2F%E5%8E%9F%E7%90%86%E5%9B%BE%26PCB%E8%AE%BE%E8%AE%A1%E5%8F%82%E8%80%83%2FLSKits%20BOM.zip"}),"LSKits BOM.zip")))),Object(i.b)("p",null,"\u5728\u9879\u76ee\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5982\u679c\u9700\u8981\u5e2e\u52a9\uff0c\u53ef\u4ee5\u901a\u8fc7\u5de5\u5355\u7cfb\u7edf\u5411\u6211\u4eec\u83b7\u53d6\u6280\u672f\u652f\u6301\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://open.listenai.com/cloud_project"}),"\u5de5\u5355\u7cfb\u7edf")," ")))}o.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),b=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var p=b.a.createContext({}),o=function(e){var t=b.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=o(n),O=a,d=s["".concat(c,".").concat(O)]||s[O]||j[O]||i;return n?b.a.createElement(d,l(l({ref:t},p),{},{components:n})):b.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=O;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/login-491d0ac43121087063ffbc20dab07599.png"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install_driver-e3f0e11059688b29e33c44f79a7b93af.png"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20210122044713-9f642fccf7bacc255b46b834fdebe228.png"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20210130170827-491315a5a3c0f6ba9254c5dfc7b318f1.png"},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20210226132255-ade33d7958172742941f47c0541341d4.png"},205:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20210130175945-4aeca07062f989f7c554e44acf34d23e.png"},206:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20210130174852-ecca8489306e1e1c53389fba06660e90.png"},207:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20210130183040-edeaa1a9f975e52d3d9e85ddf59daf9d.png"},316:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},317:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/xuan_mo_ban-91abcb3dd98072bb44d7e55aea24ed74.png"}}]);