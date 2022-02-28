---
title: python微信wxpy机器人
date: 2022-02-28
tags:
 - python
 - wxpy
categories:
 - my-project
---


## 话不多说直接上代码

```angular2html
from wxpy import *
import requests

#bot = Bot()
bot = Bot(cache_path=True)


my_friends = bot.friends(update=False)
#打印自己好友信息
print(my_friends.stats_text())

#筛选出来一个好友
my_friend = my_friends.search(u"isEmpty")[0]

# 智能自动回复消息
def get_reply(keyword):
try:
url = f"https://open.drea.cc/bbsapi/chat/get?keyWord={keyword}&userName=type%3Dbbs"
res = requests.get(url)
data = res.json()
return data['data']['reply']
except:
return "哦豁"

# 转发消息到文件助手
def forward_reply(msg):
if msg.member:
msg.forward(bot.file_helper, prefix='群组:\n' + msg.chat.name + '\n用户:\n' + msg.member.name + '\n发送内容:\n')
else:
msg.forward(bot.file_helper, prefix='用户:\n' + msg.chat.name + '\n发送内容:\n')

# 回复 my_friend 发送的消息
@bot.register(my_friend)
def reply_my_friend(msg):
print(f"触发my_friend 发送的\n{str(msg.text)}\n")
return get_reply(msg.text)

# 回复发送给自己的消息，可以使用这个方法来进行测试机器人而不影响到他人
@bot.register(bot.self, except_self=False)
def reply_self(msg):
print(f"触发自己发送的\n{str(msg.text)}\n")
return get_reply(msg.text)

# 打印出所有群聊中@自己的文本消息，并自动回复相同内容
# 这条注册消息是我们构建群聊机器人的基础
# 他会和下面的冲突
@bot.register(Group)
def print_group_msg(msg):
if msg.is_at:
print(f"触发被@\n{str(msg)}\n")
else:
print(f"正常监听群组\n{str(msg)}\n" )

# except_self 是否筛选自己
@bot.register(except_self=True)
def print_others(msg):
print(f"正常监听\n{str(msg)}\n")
# forward_reply(msg)
# return get_reply(msg.text)

bot.join()

```
