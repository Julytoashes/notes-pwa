### 置顶区

编辑-P:添加置顶 ↓:位置下移

☂:弹出置顶区 ☄:弹出收回

![置顶](https://i.imgur.com/w4Y4Lwd.jpeg)

### 切换标签，共有帖子保持播放
切换标签页，含video,audio,iframe的共同帖子保持播放状态，在所点标签第一页(50条内)的会自动置顶(纵向)

多个标签之间记得换行
![Demo GIF](https://i.imgur.com/Lyxsj7k.gif)

## 嵌入示例
油管视频下方点分享:

https://youtu.be/1j57iDpR1C0

ok.ru电影即替代封面(删除😁，支持封面轮播，多个图片之间不要换行:

<😁!-- poster="https://image.tmdb.org/t/p/w780/j0PhlZkyedbgjgobLSNz5PBRBOl.jpg" -->
https://ok.ru/video/11956760087090  

bilibili:https://www.bilibili.com/video/😁

图片:直接输入链接

mp3链接：
https://ipaudio4.com/wp-content/uploads/PLAY/Light%20in%20August/15.mp3?_=15

https://audio.jukehost.co.uk/3NRdlGYCu0BZHXbE7BNjEnZnH1mrPU6F.mp3

mp4链接类似(暂时没弄样式和替代封面，主要是不怎么用：

const mp4Regex = /https?:\/\/.+\.mp4(\?.+)?$/i;

音乐播放器：

<iframe src="https://music-xi-black.vercel.app/?playlist=13494662713&theme=dark&themeColor=%231d1d5c" width="100%" height="110" style="border: none; border-radius: 0px;" frameborder="0"></iframe>

## 文字、手写笔记长图
多个图片的帖子会轮播而非拼接

上传图床:pichoro

1. https://www.67tool.com/: 文字转长图，可自定义背景色，选最宽，字号最大，全部H2
2. 拼图全能王: 不会压缩画质，导出选标准
3. gadfly: 勉强能用
4. 直接粘贴进txt用静读天下打开长截图
   ![静读设置](https://i.imgur.com/ulfCdKn.jpeg)

摘抄文字备份:纯纯写作，自动备份云盘

简单绘图/拼截图导出png:
1. excalidraw: 笔的颜色多一点，默认中文字体好看，只有当前这一张
2. tldraw:更流畅，可登录存多张记录，可从ex里直接复制粘贴进去备份(字的颜色会变)

共同点:都可以像笔记app一样直接从相册或网页拖入png，缺点尺寸不直观，导出的图经常巨大无比，需要用picsart压缩(宽度2200)

## 基本
左下角：检索，导入导出json数据

右下角：添加，编辑(编辑，删除)，标签管理

导入json自动合并当前页面没有的，有过编辑记录的对比选择使用哪个版本

缺陷：当前页面已删除的可能还会被导入，有编辑记录的每次导入都会对比版本。。(解决：只在一个设备编辑，其他设备只读或换浏览器编辑，或用flomo当草稿同步)






