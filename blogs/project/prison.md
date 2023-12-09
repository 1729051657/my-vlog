---
title: 白城市，马鞍山，淄川，淄博，桓台县看守所钱款顾送+刷脸点餐
date: 2022-01-03
tags:
 - spring-boot
 - vue
 - minio
 - uniapp
 - uniapp原生插件
 - docker
 - echarts
categories:
 - my-project
---

[返回简历](../other/my.md)
## 项目介绍
监狱项目，提供平板，给犯人刷脸点餐
步骤 ：
- 犯人录入系统 采集人脸
- 初始化犯人余额
- 安装调试刷脸平板(初始化人脸)
- 刷脸点餐（也可直接后台选择犯人进行点餐）
- 后台每日汇总出商品账单 以及各种明细
## 使用到的技术 
- 利用`docker`部署项目 脚本定期备份数据库
- `oss`作为图片存储
- 利用`uniapp` 开发安卓
- 由于刷脸需要调用原生sdk，所以刷脸使用的是自己开发的`uniapp原生插件`
- 由于语音生成需要调用原生sdk，所以语音生成也使用的是自己开发的`uniapp原生插件`
## 测试项目地址文档
[小程序文档](https://doc.icbcyct.com/)
[后台文档](https://doc.yourtools.icu/)
[项目测试地址](https://yunyusuo.yourtools.icu/)
[安卓APP下载地址](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ce2a3b14-ff17-44c7-a7e1-c5704a867607/b22b512a-9124-4d9d-9d6f-643442867575.apk)

## 刷脸设备演示视频
<video style="width: 100%" controls src="./file/prison.mp4"/>

<video style="width: 100%" controls src="./file/prison1.mp4"/>

<video style="width: 100%" controls src="./file/prison2.mp4"/>





