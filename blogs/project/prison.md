---
title: 吉林省白城市看守所刷脸点餐
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
- `minio`作为本地图片存储
- 利用`uniCloud` 免费阿里云 存一些非隐私图片
- 利用`uniapp` 开发安卓
- 由于刷脸需要调用原生sdk，所以刷脸使用的是自己开发的`uniapp原生插件`
- 由于语音生成需要调用原生sdk，所以语音生成也使用的是自己开发的`uniapp原生插件`
## 测试项目地址文档
[小程序文档](https://doc.icbcyct.com/)
[后台文档](https://doc.yourtools.icu/)
[项目测试地址](https://yunyusuo.yourtools.icu/)
[安卓APP下载地址](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ce2a3b14-ff17-44c7-a7e1-c5704a867607/b22b512a-9124-4d9d-9d6f-643442867575.apk)

## 刷脸设备演示视频
<video controls src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ce2a3b14-ff17-44c7-a7e1-c5704a867607/84eb4232-a836-4864-8540-3677ffa614c4.mp4"/>






