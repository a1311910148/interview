(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{451:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#linux环境安装node"}},[s._v("Linux环境安装Node")])]),n("li",[n("a",{attrs:{href:"#linux-更改ssh配置文件"}},[s._v("Linux 更改SSH配置文件")])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"linux环境安装node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux环境安装node"}},[s._v("#")]),s._v(" Linux环境安装Node")]),s._v(" "),n("p",[s._v("Node 官网已经把 linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://link.segmentfault.com/?enc=jLAlFei9h0TE9CM2di5p%2BQ%3D%3D.NRx1i9zUQ2ypIIEeFdOkmcAspKvL3YsF9Tq%2FcpcAM%2BE%3D",target:"_blank",rel:"noopener noreferrer"}},[s._v("node.js官网下载地址"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/local/src/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget https://nodejs.org/dist/v14.16.1/node-v14.16.1-linux-x64.tar.xz    // 下载")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar xf node-v14.16.1-linux-x64.tar.xz         // 解压")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd node-v14.16.1-linux-x64/                   // 进入解压目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./bin/node -v                                 // 执行node命令 查看版本")]),s._v("\nv14.16.1\n")])])]),n("p",[s._v("解压文件的 bin 目录底下包含了 node、npm 等命令，我们可以使用 ln 命令来设置软连接：")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s /usr/local/src/node-v14.16.1-linux-x64/bin/node /usr/bin/node")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node -v")]),s._v("\nv14.16.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s /usr/local/src/node-v14.16.1-linux-x64/bin/npm /usr/bin/npm")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm -v")]),s._v("\nv6.14.12\n")])])]),n("p",[s._v("sh文件 直接复制")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nodejs.org/dist/v14.16.1/node-v14.16.1-linux-x64.tar.xz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf node-v14.16.1-linux-x64.tar.xz\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" node-v14.16.1-linux-x64/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/src/node-v14.16.1-linux-x64/bin/node /usr/bin/node\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/src/node-v14.16.1-linux-x64/bin/npm /usr/bin/npm\n")])])]),n("p",[s._v("全局可以使用 node npm命令")]),s._v(" "),n("h4",{attrs:{id:"node更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node更新"}},[s._v("#")]),s._v(" node更新")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一步：先清除npm缓存：")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" cache clean "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第二步：安装n模块：")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# n模块专门用来管理nodejs的版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第三步：升级node.js到最新稳定")]),s._v("\n$ n stable\n\n")])])]),n("h2",{attrs:{id:"linux-更改ssh配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-更改ssh配置文件"}},[s._v("#")]),s._v(" Linux 更改SSH配置文件")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 打开SSH配置文件")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2  / 键 + PasswordAuthentication")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3  ：键 wq 保存退出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4 设置SSH登录密码")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" \n$ systemctl restart "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);