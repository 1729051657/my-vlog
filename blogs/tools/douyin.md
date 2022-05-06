---
title: 抖音去水印 java版本 js版本
date: 2021-05-02
tags:
- 抖音去水印
categories:
- 实用工具
---

# java版的抖音去水印

## 1.获取视频链接
```angular2html
String url="https://v.douyin.com/efKYWbU/"
```
## 2.获取视频mid
```angular2html
String mid=HttpUtil.createGet(url).addHeaders(headers).execute().header("Location").split("/")[5];
```
## 3.通过视频mid获取视频详情
```angular2html
String body= HttpUtil.createGet("https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids="+mid).addHeaders(headers).execute().body();
```
### 下面数据返回结果
```angular2html
{
	"status_code": 0,
	"item_list": [{
		"statistics": {
			"aweme_id": "6963866852413984007",
			"comment_count": 188,
			"digg_count": 110794,
			"play_count": 0,
			"share_count": 207
		},
		"share_info": {
			"share_desc": "在抖音，记录美好生活",
			"share_title": "#河南 #安阳 宝宝玩耍胳膊脱臼，还没有来得及哭，正骨师傅就治好了@抖音小助手",
			"share_weibo_desc": "#在抖音，记录美好生活##河南 #安阳 宝宝玩耍胳膊脱臼，还没有来得及哭，正骨师傅就治好了@抖音小助手"
		},
		"comment_list": null,
		"geofencing": null,
		"aweme_id": "6963866852413984007",
		"cha_list": [{
			"cid": "1573440268653582",
			"cha_name": "河南",
			"connect_music": null,
			"type": 0,
			"hash_tag_profile": "",
			"is_commerce": false,
			"desc": "",
			"user_count": 0,
			"view_count": 0
		}],
		"images": null,
		"is_preview": 0,
		"group_id": 6963185692679736000,
		"video_text": null,
		"image_infos": null,
		"is_live_replay": false,
		"music": {
			"status": 1,
			"id": 6963867018181463000,
			"mid": "6963867018181462792",
			"cover_large": {
				"uri": "1080x1080/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351",
				"url_list": ["https://p26.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172", "https://p3.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172", "https://p9.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172"]
			},
			"cover_thumb": {
				"uri": "168x168/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351",
				"url_list": ["https://p29.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_168x168.jpeg?from=116350172", "https://p11.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_168x168.jpeg?from=116350172", "https://p6.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_168x168.jpeg?from=116350172"]
			},
			"play_url": {
				"uri": "https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6963867021574556429.mp3",
				"url_list": ["https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6963867021574556429.mp3", "https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/6963867021574556429.mp3"]
			},
			"position": null,
			"title": "@河南广播电视台驻马店站创作的原声",
			"author": "河南广播电视台驻马店站",
			"cover_hd": {
				"uri": "1080x1080/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351",
				"url_list": ["https://p26.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172", "https://p3.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172", "https://p9.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172"]
			},
			"cover_medium": {
				"uri": "720x720/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351",
				"url_list": ["https://p29.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_720x720.jpeg?from=116350172", "https://p26.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_720x720.jpeg?from=116350172", "https://p6.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_720x720.jpeg?from=116350172"]
			},
			"duration": 15
		},
		"aweme_type": 4,
		"share_url": "https://www.iesdouyin.com/share/video/6963866852413984007/?region=&mid=6963867018181462792&u_code=48&titleType=title&did=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1",
		"video_labels": null,
		"duration": 15394,
		"label_top_text": null,
		"create_time": 1621401607,
		"video": {
			"play_addr": {
				"uri": "v0300fg10000c2i9vhn1u1atmr5f2o1g",
				"url_list": ["https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300fg10000c2i9vhn1u1atmr5f2o1g&ratio=720p&line=0"]
			},
			"height": 1906,
			"ratio": "720p",
			"duration": 15394,
			"vid": "v0300fg10000c2i9vhn1u1atmr5f2o1g",
			"bit_rate": null,
			"cover": {
				"uri": "tos-cn-p-0015/56ac3f2f30c64a789c0211193afc1137",
				"url_list": ["https://p3.douyinpic.com/img/tos-cn-p-0015/56ac3f2f30c64a789c0211193afc1137~c5_300x400.jpeg?from=4257465056_large", "https://p29.douyinpic.com/img/tos-cn-p-0015/56ac3f2f30c64a789c0211193afc1137~c5_300x400.jpeg?from=4257465056_large", "https://p11.douyinpic.com/img/tos-cn-p-0015/56ac3f2f30c64a789c0211193afc1137~c5_300x400.jpeg?from=4257465056_large"]
			},
			"width": 1080,
			"dynamic_cover": {
				"uri": "tos-cn-p-0015/455f60e0025a45e3a3066d6327b71534_1621401611",
				"url_list": ["https://p29.douyinpic.com/obj/tos-cn-p-0015/455f60e0025a45e3a3066d6327b71534_1621401611?from=4257465056_large", "https://p9.douyinpic.com/obj/tos-cn-p-0015/455f60e0025a45e3a3066d6327b71534_1621401611?from=4257465056_large", "https://p26.douyinpic.com/obj/tos-cn-p-0015/455f60e0025a45e3a3066d6327b71534_1621401611?from=4257465056_large"]
			},
			"origin_cover": {
				"url_list": ["https://p6.douyinpic.com/tos-cn-p-0015/75ff489e43244f7cad033f151ef4d822_1621401609~tplv-dy-360p.jpeg?from=4257465056&s=&se=false&sh=&sc=&l=202105192144590102120551985D00C6F2&biz_tag=feed_cover", "https://p9.douyinpic.com/tos-cn-p-0015/75ff489e43244f7cad033f151ef4d822_1621401609~tplv-dy-360p.jpeg?from=4257465056&s=&se=false&sh=&sc=&l=202105192144590102120551985D00C6F2&biz_tag=feed_cover", "https://p11.douyinpic.com/tos-cn-p-0015/75ff489e43244f7cad033f151ef4d822_1621401609~tplv-dy-360p.jpeg?from=4257465056&s=&se=false&sh=&sc=&l=202105192144590102120551985D00C6F2&biz_tag=feed_cover"],
				"uri": "tos-cn-p-0015/75ff489e43244f7cad033f151ef4d822_1621401609"
			},
			"has_watermark": true
		},
		"author": {
			"nickname": "河南广播电视台驻马店站",
			"avatar_thumb": {
				"uri": "100x100/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351",
				"url_list": ["https://p3.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_100x100.jpeg?from=116350172", "https://p26.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_100x100.jpeg?from=116350172", "https://p6.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_100x100.jpeg?from=116350172"]
			},
			"avatar_medium": {
				"uri": "720x720/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351",
				"url_list": ["https://p11.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_720x720.jpeg?from=116350172", "https://p9.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_720x720.jpeg?from=116350172", "https://p5-ipv6.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_720x720.jpeg?from=116350172"]
			},
			"unique_id": "hntvzmd",
			"followers_detail": null,
			"platform_sync_info": null,
			"uid": "103678413906",
			"short_id": "1362266613",
			"type_label": null,
			"geofencing": null,
			"policy_version": null,
			"signature": "求助帮忙爆料请先关注\n并添加VX：hntvzmdnews\n注明：时间+地点+事件+联系电话",
			"avatar_larger": {
				"uri": "1080x1080/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351",
				"url_list": ["https://p26.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172", "https://p3.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172", "https://p29.douyinpic.com/img/tos-cn-avt-0015/c753d5f2aeb9eba805ea30b93dad0351~c5_1080x1080.jpeg?from=116350172"]
			}
		},
		"promotions": null,
		"long_video": null,
		"forward_id": "0",
		"text_extra": [{
			"start": 33,
			"end": 39,
			"user_id": "6796248446",
			"type": 0,
			"hashtag_name": "",
			"hashtag_id": 0
		}, {
			"start": 0,
			"end": 3,
			"type": 1,
			"hashtag_name": "河南",
			"hashtag_id": 1573440268653582
		}, {
			"type": 1,
			"hashtag_name": "安阳",
			"hashtag_id": 1572864661377038,
			"start": 4,
			"end": 7
		}],
		"risk_infos": {
			"warn": false,
			"type": 0,
			"content": ""
		},
		"desc": "#河南 #安阳 宝宝玩耍胳膊脱臼，还没有来得及哭，正骨师傅就治好了@抖音小助手",
		"author_user_id": 103678413906
	}],
	"extra": {
		"now": 1621431899000,
		"logid": "202105192144590102120551985D00C6F2"
	}
}
```

## 4.获取到视频链接记得替换playwm 成play
```angular2html
JSONObject jsonObject = new JSONObject(body).getJSONArray("item_list").getJSONObject(0);
String videoSrc=jsonObject.getJSONObject("video")
        .getJSONObject("play_addr").getJSONArray("url_list").get(0).toString()
        .replace("playwm","play");
```
## 5.然后获取去水印后的视频地址
```angular2html
String videoUrl=HttpUtil.createGet(videoSrc).addHeaders(headers).execute().header("Location");
```
## 6.剩下的就是视频的基本信息了 标题，背景音乐
```angular2html
String title=jsonObject.get("desc").toString();
String img=jsonObject.getJSONObject("video").getJSONObject("origin_cover").getJSONArray("url_list").get(0).toString();
String gif=jsonObject.getJSONObject("video").getJSONObject("dynamic_cover").getJSONArray("url_list").get(0).toString();
String music=jsonObject.getJSONObject("music").getJSONObject("play_url").getJSONArray("url_list").get(0).toString();
```
# js版的抖音去水印
---------------------下面是js版本的原理同上------------------------

## 1.获取视频链接
```angular2html
let res=await uniCloud.httpclient.request("https://v.douyin.com/efKYWbU/",{method:"GET",dataType: 'text'})
```
## 2.视频获取mid
```angular2html
let mid=res.headers.location.split("/")[5]
```
## 3.通过mid获取视频详情
```angular2html
let body= await uniCloud.httpclient.request("https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids="+mid,{dataType: 'text'});
body=JSON.parse(body.data)
```
## 4.初始化得到的视频结果信息
```angular2html
res={   
    desc:body.item_list[0].desc,
    video:body.item_list[0].video.play_addr.url_list[0].replace("playwm","play"),
    image:body.item_list[0].video.origin_cover.url_list[0],
    music:body.item_list[0].music.play_url.url_list[0]
}
```



