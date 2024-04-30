![Social Preview](https://github.com/siuze/ShanRenMaLTS-Typing/assets/54578647/85d83552-2537-4b4a-8b64-569b97860e68)

<h1 align="center">
  <a href="https://siuze.github.io/ShanRenMaLTS-Typing/" target="_blank">山人码LTS · 悟道</a>
</h1>

<p align="center">
  为 <a href="https://siuze.github.io/ShanRenMaLTS-Typing/" target="_blank">山人码LTS</a> 学习者搭建的配套打字练习平台，点击上方大字即可跳转到平台网页。
</p>

## 支持的功能

- 切换词库
- 朗读词条和编码（听写模式下只朗读词条）
- 临摹编码（看得见字词和编码，听得见朗读，跟着打）
- 听写编码（看不见编码，听得见朗读，自己打）
- 默写编码（看不见编码，听不见朗读）
- 错题复习
- 数据统计（本地）

## 项目说明

本项目是使用开源项目 [Qwerty-Learner](https://github.com/RealKai42/qwerty-learner) 修改定制而实现的，在此声明和感谢。

## 如何贡献词典

我们欢迎任何用户以山人码 LTS 为编码方案构建词典，以方便大家的打字练习。请按照规定的格式自行构建词典文本文件，并发起 issue，issue 需要提供词典的基本信息，并附带上传词典文本文件。我会对提交的词典进行检查，没问题的话就会添加到本项目中。

### 词典基本信息示例

```json
{
  "name": "国内地名", //词典的名称
  "description": "包括部分省份县市的地名", //词典的简介
  "category": "进阶", //词典的类型，可以参考目前的分区，如入门、基础、进阶
  "length": 805, //词典的词条数量
  "chapterNum": [40, 30, 35], //词典的各个章节下的词条数量
  "chapterName": ["福建省", "台湾省", "广东省"], //词典的各个章节名称，必须与chapterNum共同存在
  "tags": ["地名", "实用"] //词典的标签
}
```

请注意，chapterName 和 chapterNum 信息是可以不填的，如果没有章节信息，山人码·悟道 将自动按照每 20 个词条一个章节的规则进行划分，并且每个章节没有名字。  
如果要自定义章节名称 chapterName，则必须一并给出章节下词条数目 chapterNum，并且后面词典文本文件中的每个词条都要包含章节编号信息，否则将无法正常工作。

### 词典格式示例

标准的词典文本是 json 格式的，其格式形如：

```json
[
	{
		"name": "QhSs",  //必填。词条的山人码LTS编码，对于打词组一般不需要给出全长的编码，给出平常打字所需要的编码长度即可，即2+2规则。按实际打字方法来，单个词组编码不要有空格。大小写区分只是作为展示，不影响打字。
		"notation":"福州", //必填。词条的中文汉字
		"trans":[ //选填，尽量填写。词条的解释说明，可以有好多个，会被用分号分隔展示
			"福州，简称福或榕，古称冶城，别称闽都、榕城，是中华人民共和国福建省的省会",
		],
		"split": "礻一口田 川", //选填。词条汉字的拆分结果，网页显示时会自动加上〔〕方框
		"pronunciation": "福州", //选填。词条的中文部分发音，语音合成可能对一些生僻字不会发音或者多音字发音错误，所以可以在这里把词条替换成同音字（不要直接写拼音，要用汉字），比如【台州】的发音填写为【胎州】。如果不填写则默认直接用中文发音直接使用上面的notation参数
		"chapterId": 0 //选填。词条所述章节的编号，从0开始，对应词典基本信息中chapterNum参数以及chapterName参数的顺序。如果需要自行划分章节则该参数必填。
	},
	{
		"name": "ThAm",
		"notation":"厦门",
		"trans":[
			"厦门市，旧称下门，别称鹭岛，地处福建省东南部，是中国最早对外开放的四个经济特区之一、是计划单列市及副省级城市。",
		],
		"split": "厂一自夊 门",
		"pronunciation": "下门",
		"chapterId": 0
	},
...
]
```

请注意传统 json 标准不支持注释，上文只是进行说明，实际写文件不要带注释进去。

你也可以使用表格或 CSV 文本制作词典：

```csv
chapterId	name	notation	split	pronunciation	trans
0	QhSs	福州	〔礻一口田 川〕	福州	福州，简称福或榕，古称冶城，别称闽都、榕城，是中华人民共和国福建省的省会
0	ThAm	厦门	〔厂一自夊 门〕	下门	厦门市，旧称下门，别称鹭岛，地处福建省东南部，是中国最早对外开放的四个经济特区之一、是计划单列市及副省级城市。

```

最低限度下，您至少应提供如下信息：

```csv
chapterId	notation	trans
```

其余信息可以通过脚本自动生成默认数据。
