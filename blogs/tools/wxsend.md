---
title: 51假期给好友批量发送祝福语
date: 2022-05-01
tags:
- python
- 微信工具
- 便捷脚本
categories:
- python
---

## 首先介绍一下这个工具
> 主要语言：`python`

> 用到了[wxpy](https://wxpy.readthedocs.io/zh/latest/)插件，[wxpy](https://wxpy.readthedocs.io/zh/latest/)是一个微信操作的插件，可以用来操作微信，比如发送消息，接收消息，查看群聊，查看好友列表等等。

## 网上随便爬的51祝福语
```
1.越来越多的车，我们堵了。越来越多的楼，我们矮了。越来越多的妆，我们丑了。繁华落尽，始见内心;简单是纯，快乐是真!劳动节将至，让自己轻松一下!
2.五一到，假期好，短信到，来问好，烦忘掉，乐来抱，心情妙，精神好，跑一跑，身体好，健康到，永不老，聊一聊，感情好，祝福到，乐淘淘。祝五一快乐!
3.把手边的工作放一放，享受假期的休闲;把赚钱的脚步缓一缓，感受难得的安详;把忙碌和奔波忘一忘，体会节日的愉快。五一快乐!
4.淡淡雨中情，思念为你开，细雨迎面来，浇灭我心伤。晴空万里云，挂念在心间，五月红日照，念你放不下。五一到，想你无边。
5.劳动，创造了价值，创造了未来，创造了人类，创造了世界，创造了财富，创造了一切。劳动节，愿你快乐吉祥，开心欢畅，幸福安康!
6.喜迎五一劳动节，舒展眉头度五一，繁忙工作终得歇，劳累之余开心些，出外走走散散心，在家休息换心情，我用短信祝福你，天天快乐好心情!
7.劳动节到，愿你劳有所获，爱情，一劳就获;事业，少劳多获;生活，多劳多获，越劳越获，最好还能不劳而获。请回短信，别让我劳而无获哦，劳动节快乐!
8.节日还未到，短信先报到，我把快乐邀，再把平安邀，又把幸福邀，短信来打包，把你手机叫，祝你和家人，五一乐陶陶，五四乐逍遥!
9.忙忙碌碌要停歇，东风吹来劳动节。糊口就要开心些，给你思念不枯竭，祝福拥有新世界，快乐伴你不换届，幸福陪你永不谢。
10.节福来到，趁此机会休息好;健康身体才叫妙，睡好结伴玩出跑;游山玩水多逍遥，还有聚会逃不掉;诸多如意身边绕，让你畅意每一秒!
11.送走忙碌，忘掉烦恼，脱去疲惫，丢弃压力。睡个懒觉，动动身体，让微笑始终围绕，让轻松成为主调，在这里轻轻的说一句：五一劳动节快乐!
12.我很想K你一顿，T你一脚。但五一节到了，我想你请我去KTV，因为我好像，做一个V的手势!曳~~!节日愉快!
13.你是书本我是包，你是耗子我是猫，你是木头我是胶，你是猪肉我是刀，我们关系这么好，五一吃饭你来掏，节日快乐!
14.动节到，共同来劳动，拿上快乐铲，除掉烦恼丝，抡起幸福锄，斩断忧愁草，挥起如意斧，砍去哀伤枝，五一愿你乐相伴，福相随，五一快乐!
15.假期年年有，但你想要一个独特的能留给你美好回忆的假期吗来，心动不如行动。现在就行动起来吧!假如你打算去行街睇戏，我绝对乐意奉陪，连直落唱埋卡拉OK，我都没问题。
16.你金饭桶，装满饲料美味香;五一送你金脸盆，盛上清水美美容;五一送你流行曲，哼哼小调没烦恼;五一送你祝福语：小猪，节日要快乐哦!
17.七天的假期，你就打算一直泡在家里发霉吗快快出来跟我一起投入夏日骄阳吧。
18.今天劳动节，花儿含苞，蝶儿在闹，我的短信把祝福送到：祝你劳动过后身体棒，假期过后精神旺，天天握着财神手，健康快乐向前走，祝五一劳动节快乐!
19.笑是世界上服用最方便，营养最丰富，功效最神奇，最无忧伤，烦恼等毒副作用的绿色环保型美容补品。五一上我家来抹美容补品吧!
20.都说劳动最光荣，你就是履行这光荣职责的人;都说节日最快乐，你就是享受这轻松假期的人。生活就该这样的劳逸结合，五一节要到了，记得好好休息哟!
```

## 首先要了解的一些知识点

### 1.引入wxpy创建机器人登陆微信
```angular2html
from wxpy import *

# 初始化机器人，扫码登陆
bot = Bot(cache_path=True)

# 在结尾加上这个下次就不用登陆了
bot.join()
```

### 2.打印自己所有的好友信息
```angular2html
#打印自己好友信息
my_friends = bot.friends(update=False)
print(my_friends.stats_text())
```

### 3.筛选出来你想要的好友
```angular2html
#筛选出来你想要的好友
my_friend = my_friends.search(u"祖宗要秒回")[0]
print(my_friend)
```
### 4.遍历好友列表，发送消息
```angular2html
# 遍历好友列表，发送消息
for friend in my_friends:
    # 发送文本消息
    friend.send('Hello, this is a test message from wxpy!')
    # 发送图片消息
    friend.send_image('wechat.jpg')
    # 发送语音消息
    friend.send_voice('voice.mp3')
    # 发送视频消息
    friend.send_video('video.mp4')
    # 发送文件消息
    friend.send_file('file.txt')
    # 发送链接消息
    friend.send_link('')
```

## 接下来正事 利用脚本批量给好友发祝福语
```angular2html
from wxpy import *
import time
import random

# 初始化机器人，扫码登陆
bot = Bot(cache_path=True)

# 打印自己好友信息
my_friends = bot.friends(update=False)
print(my_friends.stats_text())

# 筛选出来一个好友
my_friend = my_friends.search(u"隔壁")
print(my_friend)
# 定义一些51劳动节祝福语list
blessing_list = [
    '越来越多的车，我们堵了。越来越多的楼，我们矮了。越来越多的妆，我们丑了。繁华落尽，始见内心;简单是纯，快乐是真!劳动节将至，让自己轻松一下!',
    '五一到，假期好，短信到，来问好，烦忘掉，乐来抱，心情妙，精神好，跑一跑，身体好，健康到，永不老，聊一聊，感情好，祝福到，乐淘淘。祝五一快乐!',
    '把手边的工作放一放，享受假期的休闲;把赚钱的脚步缓一缓，感受难得的安详;把忙碌和奔波忘一忘，体会节日的愉快。五一快乐!',
    '淡淡雨中情，思念为你开，细雨迎面来，浇灭我心伤。晴空万里云，挂念在心间，五月红日照，念你放不下。五一到，想你无边。',
    '劳动，创造了价值，创造了未来，创造了人类，创造了世界，创造了财富，创造了一切。劳动节，愿你快乐吉祥，开心欢畅，幸福安康!',
    '喜迎五一劳动节，舒展眉头度五一，繁忙工作终得歇，劳累之余开心些，出外走走散散心，在家休息换心情，我用短信祝福你，天天快乐好心情!',
    '劳动节到，愿你劳有所获，爱情，一劳就获;事业，少劳多获;生活，多劳多获，越劳越获，最好还能不劳而获。请回短信，别让我劳而无获哦，劳动节快乐!',
    '节日还未到，短信先报到，我把快乐邀，再把平安邀，又把幸福邀，短信来打包，把你手机叫，祝你和家人，五一乐陶陶，五四乐逍遥!',
    '忙忙碌碌要停歇，东风吹来劳动节。糊口就要开心些，给你思念不枯竭，祝福拥有新世界，快乐伴你不换届，幸福陪你永不谢。',
    '节福来到，趁此机会休息好;健康身体才叫妙，睡好结伴玩出跑;游山玩水多逍遥，还有聚会逃不掉;诸多如意身边绕，让你畅意每一秒!',
    '送走忙碌，忘掉烦恼，脱去疲惫，丢弃压力。睡个懒觉，动动身体，让微笑始终围绕，让轻松成为主调，在这里轻轻的说一句：五一劳动节快乐!',
    '我很想K你一顿，T你一脚。但五一节到了，我想你请我去KTV，因为我好像，做一个V的手势!曳~~!节日愉快!', '你是书本我是包，你是耗子我是猫，你是木头我是胶，你是猪肉我是刀，我们关系这么好，五一吃饭你来掏，节日快乐!',
    '动节到，共同来劳动，拿上快乐铲，除掉烦恼丝，抡起幸福锄，斩断忧愁草，挥起如意斧，砍去哀伤枝，五一愿你乐相伴，福相随，五一快乐!',
    '假期年年有，但你想要一个独特的能留给你美好回忆的假期吗来，心动不如行动。现在就行动起来吧!假如你打算去行街睇戏，我绝对乐意奉陪，连直落唱埋卡拉OK，我都没问题。',
    '你金饭桶，装满饲料美味香;五一送你金脸盆，盛上清水美美容;五一送你流行曲，哼哼小调没烦恼;五一送你祝福语：小猪，节日要快乐哦!', '七天的假期，你就打算一直泡在家里发霉吗快快出来跟我一起投入夏日骄阳吧。',
    '今天劳动节，花儿含苞，蝶儿在闹，我的短信把祝福送到：祝你劳动过后身体棒，假期过后精神旺，天天握着财神手，健康快乐向前走，祝五一劳动节快乐!',
    '笑是世界上服用最方便，营养最丰富，功效最神奇，最无忧伤，烦恼等毒副作用的绿色环保型美容补品。五一上我家来抹美容补品吧!',
    '都说劳动最光荣，你就是履行这光荣职责的人;都说节日最快乐，你就是享受这轻松假期的人。生活就该这样的劳逸结合，五一节要到了，记得好好休息哟!'
]

# 遍历好友列表，发送消息
for friend in my_friends:

    try:
        # 生成随机数
        num = random.randint(0, len(blessing_list))
        # 拿到随机一条祝福语
        blessing = blessing_list[num]
        # 发送文本消息
        friend.send(blessing)
        print("发送消息给：" + str(friend) + "-----内容：" + blessing)
        time.sleep(1)
        
        # 注意⚠️下面功能不稳定 
        # 因为同一个图片以及文件重复多个人发送会限制发送失败，如果需要可以自己做个图片集和语音集随机发送
        
        
        # 发送图片消息
        # friend.send_image('resources/五一快乐.jpeg')
        # time.sleep(1)
        # 发送语音消息
        # friend.send_file('resources/兄弟们51节日快乐.mp3')
        # time.sleep(3)
        # # 发送视频消息
        # friend.send_video('video.mp4')
        # # 发送文件消息
        # friend.send_file('file.txt')
        # # 发送链接消息
        # friend.send_link('')
    except:
        print("发送消息失败给：" + str(friend))



bot.join()
# embed()

```

## 下面是效果

![img_1.png](./img6.png)


