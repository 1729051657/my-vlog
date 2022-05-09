---
title: Typora使用教程
date: 2021-05-08
tags:
- Typora
categories:
- 工具
---




# Typora使用教程

> 高能预警：本篇文章内容很长，很长，很长......

## 前言

一次偶然的机会，让我接触到了 .md 文档，进而开始摸索 [如何查看 .md 文档](https://www.cnblogs.com/hyacinthLJP/p/16048127.html)，并意外结识了 Typora 这个编辑器。

## 一、MarkDown

### 1.1 简介

> Markdown 是一种轻量级标记语言，创始人为 John Gruber。它允许人们「使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者 HTML）文档」。

### 1.2 为什么要用MarkDown

对于我而言，我选择MarkDown的原因如下：

1. 回归到内容本身，注重文章本身的结构，而不是样式
   - 不需要考虑字体大小、颜色等，因为 Markdown 中字体样式都与结构有关，无法手动设置
2. MarkDown的语法简单，记住几个常用的就可以释放鼠标了
   - 比如，我想要将 “这是个标题” 设置成二级标题，只需要在标题前添加`##`+空格即可实现，而不需要用鼠标先选中 “这是个标题”，然后在设置成二级标题
3. 当前许多网站都支持用 Markdown 来撰写文档
   - 如 博客园、CSDN、简书、语雀 等，有了这么多网站的支持，你可以随时随地上传本地 MarkDown 文件到博客中

## 二、MarkDown 基本语法

### 2.1 标题

语法格式：`#+空格+标题`，一个`#`是一级标题，两个`##`是两级标题，以此类推，支持六级标题。

### 2.2 字体

- **加粗**
  语法格式：`**加粗**`

- *斜体*
  语法格式：`*斜体*`

- ***斜体加粗***
  语法格式：``***斜体加粗***`

- 删除线
  语法格式：`~~删除线~~`

- 高亮

  语法格式：`==高亮==`

### 2.3 引用

语法格式：`>+引用文字`

> 我是引用文字

引用也可以嵌套：

> > 如加两个`>>`
> >
> > > 三个`>>>`

支持无线套娃~~

### 2.4 分割线

语法格式：三个或者三个以上的 - 或者 * 都可以，如`***`

### 2.5 图片

语法格式：`![alt](图片地址)`

> alt 指的是当图片链接失效时显示的提示文字，最好设置 alt 为本地存储的图片名，方便查找

[![img](https://gitee.com/melephant/picture/raw/master/markdown/Typora.assets/baymax.jpg)](https://gitee.com/melephant/picture/raw/master/markdown/Typora.assets/baymax.jpg)

如果你想要调整图片大小，有两种方式：

1. 右击图片，选择缩放图片
2. 通过HTML调节，格式如下：



```HTML
<div align="center">
    <img style="border-radius: 20px;"
         src="#" 
         alt="#"
         width="688" >
</div>
```

- `<center>`标签设置图片居中对齐
- `border-radius`设置圆角
- `src`放置图片路径（本地路径或网络路径）
- `alt`放置图片链接失效后的显示文字
- `width`设置图片宽度（`witdh`和`height`只设置一个即可，等比例缩放）

你也可以通过如下代码为图片添加图注：



```HTML
<center>
    <img width="688" 
         src="" 
         alt="">
    <br>
    <div style="color: #999;">
        图注
    </div>
</center>
```

[![img](https://gitee.com/melephant/picture/raw/master/markdown/Typora.assets/baymax.jpg)](https://gitee.com/melephant/picture/raw/master/markdown/Typora.assets/baymax.jpg)

Hello,I'm baymax,your healthcare companion.

> 我使用的博客园主题不支持缩放代码，所以我选择了使用HTML的方式调整图片大小。

### 2.6 超链接

语法格式：`[超链接名](超链接地址)`

### 2.7 列表

- 无序列表
  - 语法格式：无序列表用 - + * 任何一种都可以，如`+ 我是无序列表`

> 加号和内容之间需要放置一个空格

- 有序列表
  - 语法格式：`数字+点+空格+内容`，如`1. 我是有序列表`
- 子列表
  - 在子列表前按下tab键即可构成子列表。

### 2.8 表格

语法格式：



```markdown
|左对齐|居中对齐|右对齐|
|:----|:----:|---:|
|左|中|右|
```

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 左     |    中    |     右 |

> 第二行分割表头和内容，并声明内容的对齐格式。
> 一般而言，不这么用，感觉太费劲了，下面再介绍快捷键。

### 2.9 代码

- 行内代码
  - 语法格式：用一个反引号包起来 `代码内容`，代码会以主题中设置的样式出现在行内，但不会实现代码高亮。
- 多行代码
  - 语法格式：代码之间分别用三个反引号包起来，且两边的反引号单独占一行

> \``` 语言
> 代码内容
> \```
> 语言：C、C++、JAVA 等

### 2.10 高级技巧

#### 2.10.1 转义

> Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符

Markdown 使用反斜杠转义特殊字符：



```diff
\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
```

#### 2.10.2 行内公式（inline）

用 `$...$` 括起公式，公式会出现在行内。

#### 2.10.3 块间公式（display）

用 `$$...$$` 括起公式（注意 `$$` 后需要换行），公式会默认显示在行中间。



```powershell
$$
	块间公式
$$
```

#### 2.10.4 支持HTML

## 三、Typora

> Typora 是一款轻便简洁的 Markdown 编辑器，支持即时渲染技术，这也是与其他Markdown编辑器最显著的区别。
> 即时渲染使得你写 Markdown 就像是写Word文档一样流畅自如。
> 个人认为是一款很好用的 MarkDown 编辑器，特来分享给大家❤️

### 3.1 软件安装

阿里云：https://www.aliyundrive.com/s/mDzWKo9h3mB

### 3.2 支持正版

以下内容引用自 [Typora的下载和破解|博客园](https://www.cnblogs.com/xiaohi/p/15907083.html)

> 注意，该破解方法仅适用于 Typora 1.0.x 版本的破解，对于更高版本（如 Typora1.2.4）不适用。下载好 Typora 后可通过 帮助-关于 查看 Typora 版本。

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204191015103.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204191015103.png)

1. 软件安装后，下载破解补丁 [app.asar.txt](https://lanzouv.com/b04cdi4if)（密码 dyuh，下载完成后，将文件名中的`.txt`去掉），并覆盖至安装路径的 resources 文件夹内。参考路径：

D:\Typora\resources

1. 打开 typora ，点击输入序列号；

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101204770.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101204770.png)

1. 邮箱一栏中任意填写（但须保证邮箱地址格式正确），输入序列号，点击激活。

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101205325.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101205325.png)

 可选序列号：

> - DZTX2H-6MCQZT-QL4GCT-5EBWFX
> - G7LPKN-HP4NLD-FA3BGF-6JDQ5R
> - 3MH4Y8-YJWT37-G5JL9Y-UHNQDJ
> - 85ZPHY-ELQ9FQ-94J3VP-D92YLU
> - VEZ7NV-USYN3G-8TL2N3-DADUG4

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101206454.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101206454.png)

### 3.3 在Typora中书写MarkDown

|                      | Markdown语法             | Typora快捷键  |
| :------------------: | :----------------------- | :-----------: |
|       一级标题       | `#`                      |    ctrl+1     |
|       二级标题       | `##`                     |    ctrl+2     |
|       三级标题       | `###`                    |    ctrl+3     |
|       四级标题       | `####`                   |    ctrl+4     |
|       五级标题       | `#####`                  |    ctrl+5     |
|       六级标题       | `######`                 |    ctrl+6     |
|         加粗         | `**粗体**`               |    ctrl+B     |
|         斜体         | `*斜体*`                 |    ctrl+I     |
|        下划线        | `<u>下划线</u>`          |    ctrl+U     |
|        删除线        | `~~删除线~~`             |  alt+shift+5  |
|       创建表格       |                          |    ctrl+T     |
|      创建超链接      | `[超链接名](超链接地址)` |    ctrl+K     |
|       插入图片       | `![alt](图片地址)`       | ctrl+shift+I  |
|      插入公式块      | `$$公式$$`               | ctrl+shift+M  |
|       添加引用       | `>内容`                  | ctrl+shift+Q  |
|       无序列表       | `+ 内容`                 | ctrl+shift+]  |
|       有序列表       | `1. 内容`                | ctrl+shift+[  |
|     粘贴为纯文本     |                          | ctrl+shift+V  |
|    返回Typora顶部    |                          |   ctrl+Home   |
|    返回Typora底部    |                          |   ctrl+End    |
| 启用/退出 源代码模式 |                          |    ctrl+/     |
|         搜索         |                          |    ctrl+F     |
|      搜索并替换      |                          |    ctrl+H     |
|    选中光标所在行    |                          |    ctrl+L     |
|     生成文档目录     |                          | `[toc]`+Enter |
|   快速打开最新文档   |                          |    ctrl+P     |

> TOC从文档中提取所有标题，其内容将自动更新。

### 3.4 图片插入

插入图片除了使用插入语句外，还可以：

- ctrl+C/V 将网络图片、剪贴板图片复制到文档中
- 拖动本地图片到文档中

Typora 会自动帮你插入符合 Markdown 语法的图片语句，并给它添加`alt`。

### 3.5 打字机模式和专注模式

通过 视图→→打字机模式/专注模式 开启或关闭：

- 「打字机模式」使得你所编辑的那一行永远处于屏幕正中央。
- 「专注模式」使你正在编辑的那一行保留颜色，而其他行的字体呈灰色。

### 3.6 空格与换行

- **空格：**在输入连续的空格后，Typora 会在编辑器视图里为你保留这些空格，但当你打印或导出时，这些空格会被省略成一个。
  你可以在源代码模式下，为每个空格前加一个 `\` 转义符，或者直接使用 HTML 风格的 `&nbps;` 来保持连续的空格。

> 需要说明的是，在 Markdown 语法中，换行（line break）与换段是不同的，且换行分为软换行和硬换行。

- **软换行**：在 Typora 中，你可以通过shift+enter完成一次软换行。软换行只在编辑界面可见，当文档被导出时换行会被省略。
- **硬换行：**你可以通过 空格+ 空格+ shift+enter完成一次硬换行，而这也是许多 Markdown 编辑器所原生支持的。硬换行在文档被导出时将被保留，且没有换段的段后距。
- **换段：**你可以通过enter完成一次换段。Typora 会自动帮你完成两次shift+enter的软换行，从而完成一次换段。这也意味着在 Markdown 语法下，换段是通过在段与段之间加入空行来实现的。
- **Windows 风格（CR+LF）与 Unix 风格（LF）的换行符：**CR表示回车`\r`，即回到一行的开头，而LF表示换行`\n`，即另起一行。
  所以 Windows 风格的换行符本质是「回车+换行」，而 Unix 风格的换行符是「换行」。这也是为什么 Unix/Mac 系统下的文件，如果在 Windows 系统直接打开会全部在同一行内。你可以在「文件 - 偏好设置 - 编辑器 - 默认换行符」中对此进行切换。

### 3.7 支持emoji 表情

在 Typora 中，你可以用 `:emoji:` 的形式来打出 emoji，软件会自动给出图形的提示。

### 3.8 Little Tips

安利一个快捷键提示工具，轻量级+快捷方便。
官网：[LittleTips](http://www.redisant.cn/ltip)
它本身支持的软件列表并不包含Typora，但给出了 [自定义软件快捷键](http://www.redisant.cn/ltip/newapp) 的方式，所以，我就自己捣鼓了一下：

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101206876.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101206876.png)

自行选择下载：[typora.json](https://www.aliyundrive.com/s/WjQsc88Xf7q)。 LittleTips不含开机自启的选项，如果你想要设置成开机自启，可参考如下方法：

1. 将需要自启动软件创建一个快捷方式
2. 按 win+ R，键入`shell:startup`，打开 「启动」 文件夹
3. 将需要开机自启动的软件的快捷方式拖到启动文件夹中

### 3.9 Typora设置图片自动上传

> Typora固然好用，MarkDown也固然好用，但图片该怎么处理？
> 总不能自己一张张的上传，然后在复制网络连接吧，也不是不可以🤔

下面介绍两种方式实现自动上传。

#### 3.9.1 使用 PicGo-Core

下载 PicGo-Core

- 依次点击 **文件** -> **偏好设置** -> **图像** 来到下图所示界面：

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101207252.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101207252.png)

\+ 点击**①**位置选择 `PicGo-Gore(command line)`选项后，点击**②**位置的下载或更新，在弹出的界面中选择下载。

选择sm.ms作为图床并配置 token

> 免费版存储容量 5GB，每分钟限制上传20张，每小时限制上传100张，每天限制上传200张，每周限制上传500张，每月限制上传1000张，单张图片最大5M。
> 该图床建立于2015年，目前免费用户无法使用香港节点因此速度比较慢（白嫖党没这么多事）。

1. 打开官网 https://sm.ms/，注册后登录。
2. 打开该网址 https://sm.ms/home/apitoken，生成 token。

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101207538.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101207538.png)

1. 最后点击**③**位置配置 token，放置如下代码：



```json
{
  "picBed": {
    "uploader": "smms",
    "smms": {
      "token": "xxxxxxxxxxxxxxxxxxxxxx"
    }
  },
  "picgoPlugins": {}
}
```

> token 换成刚刚生成的 sm.ms 的token。

1. 按照步骤配置好后，点击验证图片上传选项，如果提示验证成功，那么恭喜，你毕业了🎊；
2. 拖拽图片到 typora 实现自动上传并更改 url 的功能。

#### 3.9.2 使用 PicGo+Gitee

安装 Node.js

> 因为PicGo中默认不支持 gitee，所以我们需要安装`Node.js`插件。

下载地址：

- 阿里云：https://www.aliyundrive.com/s/W18SWY8Ti8X
- 官网：https://nodejs.org/en/

安装步骤：

1. 双击``node-v16.14.2-x64.msi`进行安装。
2. 自定义安装路径

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101426467.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101426467.png)

\> 注意：不要勾选附加选项

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101311191.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101311191.png)

\4. 安装完成记得**重启电脑**。

Gitee相关

1. 打开 Gitee（官网：https://gitee.com/），如果没有账户，新建一个。
2. 新建仓库

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101311826.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101311826.png)

1. 仓库开源设置

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101429291.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101429291.png)

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101314485.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101314485.png)

1. 生成私人令牌

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101316705.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101316705.png)

> 注意保存好私人令牌的序列号，该令牌只显示这一次。
> 如果你不幸忘记了该令牌，那就是好重新生成一个了🐤。

安装 PicGo

下载地址：

- 阿里云：https://www.aliyundrive.com/s/GjNGu1SGur1
- 官网：https://github.com/Molunerfinn/PicGo/releases

> 在官网上下载要选择正式稳定的版本。

 安装步骤：

1. 双击`PicGo-Setup-2.3.0-x64.exe`进行安装。
2. 自定义安装路径

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101316353.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101316353.png)

\3. 插件安装，选择`github-plus`或者`gitee-uploader`，二者择其一即可，我选择的是`git-plus`。

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101316972.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101316972.png)

\4. 配置 gitee，并设置为默认图床：

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101317194.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101317194.png)

\> token放置上述过程生成的序列号即可

1. 重启 PicGO 软件（关闭后重新打开）。

Typora配置

重新打开 Typora，选择 文件->偏好设置->图像：

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101318376.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101318376.png)

如果出现如下选项：

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101318881.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101318881.png)

恭喜你，你拥有了自己的图床了😃。

#### 3.9.3 我的配置

对于我而言，我更倾向于先将图像保存到本地：

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101319959.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101319959.png)

最后可以选择统一上传：

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101319745.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101319745.png)

#### 3.9.4 注意事项

注意事项

1. 自定义的HTML中的图片无法上传
2. PicGo最好设置上「时间戳重命名」，防止上传同名文件时报错

[![img](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101319893.png)](https://gitee.com/melephant/picture/raw/master/typora/assets/202204101319893.png)

\3. 使用「上传所有本地图片」可能会出现图片顺序错乱的情况，所以还是建议单张上传

TinyPNG

既然提到了图床，那就顺带安利一个图片压缩工具：

- 在线压缩：[TinyPNG – Compress WebP, PNG and JPEG images intelligently](https://tinypng.com/)
- 可视化工具：https://download.redisant.com/package/TinyGUI-1.0.5.0.exe
- GitHub地址：[TinyGUI/TinyGUI at main · chenjing1294/TinyGUI · GitHub](https://github.com/chenjing1294/TinyGUI/tree/main/TinyGUI)

> 如果使用TinyGUI可视化工具，在获取API的时候，若长时间未收到反馈邮件，去垃圾邮件看看，会有意想不到的收货💨

## 四、Typora主题

1. 使用 Typora 内置主题：点击状态栏「主题」，选择喜欢的主题样式
2. 自定义主题：通过「文件-偏好设置-外观-打开主题文件夹」打开Typora的主题文件夹 `Typora\themes`，将自定义的 CSS 文件导入到 `themes` 文件夹中并重启Typora，在「主题」中选择你导入的主题样式即可

主题预览及下载：[Typora主题](https://theme.typoraio.cn/)

## 五、结尾

肝了一下午终于完成了这篇惊世之作🐶，初入 Typora，也参考了不少文档，一一罗列出来，在此表示感谢👍。

完结撒花😀

## 六、更新

Typora1.2.4 破解版来了，有需要的同学自行选择下载。

阿里云：https://www.aliyundrive.com/s/L2pYCmgumEN
