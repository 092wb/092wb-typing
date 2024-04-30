import type { Dictionary, DictionaryResource } from '@/typings/index'
import { calcChapterCount } from '@/utils'

// 092五笔词典
const ShanRenMaLTSDict: DictionaryResource[] = [
  {
    id: 'ShanRenMaLTS003',
    name: '基本字根',
    description: '元字根',
    category: '入门',
    url: '/dicts/基本字根.json',
    length: 467,
    chapterName: ['横区', '竖区', '撇区', '捺区', '折区', '综合'],
    chapterNum: [81, 87, 85, 94, 120, 467],
    tags: ['字根'],
    language: 'zh',
    languageCategory: 'zh',
  },
  {
    id: 'ShanRenMaLTS004',
    name: '增补字根',
    description: '元字根 + 增补',
    category: '入门',
    url: '/dicts/增补字根.json',
    length: 734,
    chapterName: ['横区增补', '竖区增补', '撇区增补', '捺区增补', '折区增补', '综合增补'],
    chapterNum: [122, 124, 142, 148, 198, 734],
    tags: ['字根'],
    language: 'zh',
    languageCategory: 'zh',
  },
  //   {
  //     id: 'ShanRenMaLTS004',
  //     name: '字根变体主码',
  //     description: '学习字根的同形或同源变体，该词典下词条均不需要输入小码',
  //     category: '入门',
  //     url: '/dicts/字根主码进阶.json',
  //     length: 326,
  //     chapterName: ['自然类', '生命类', '民生类', '字形类', '难记字根'],
  //     chapterNum: [39, 61, 82, 48, 96],
  //     tags: ['字根'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
  //   {
  //     id: 'ShanRenMaLTS004',
  //     name: '常用字主码练习',
  //     description: '学习字根的同形或同源变体，该词典下词条均不需要输入小码',
  //     category: '入门',
  //     url: '/dicts/字根主码进阶.json',
  //     length: 326,
  //     chapterName: ['自然类', '生命类', '民生类', '字形类', '难记字根'],
  //     chapterNum: [39, 61, 82, 48, 96],
  //     tags: ['字根'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
  //   {
  //     id: 'ShanRenMaLTS004',
  //     name: '字根小码',
  //     description: '学习字根的同形或同源变体，该词典下词条均不需要输入小码',
  //     category: '入门',
  //     url: '/dicts/字根主码进阶.json',
  //     length: 326,
  //     chapterName: ['自然类', '生命类', '民生类', '字形类', '难记字根'],
  //     chapterNum: [39, 61, 82, 48, 96],
  //     tags: ['字根'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
  //   {
  //     id: 'ShanRenMaLTS004',
  //     name: '常用字练习',
  //     description: '学习字根的同形或同源变体，该词典下词条均不需要输入小码',
  //     category: '入门',
  //     url: '/dicts/字根主码进阶.json',
  //     length: 326,
  //     chapterName: ['自然类', '生命类', '民生类', '字形类', '难记字根'],
  //     chapterNum: [39, 61, 82, 48, 96],
  //     tags: ['字根'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
  //   {
  //     id: 'ShanRenMaLTS004',
  //     name: '拆分练习',
  //     description: '学习字根的同形或同源变体，该词典下词条均不需要输入小码',
  //     category: '入门',
  //     url: '/dicts/字根主码进阶.json',
  //     length: 326,
  //     chapterName: ['自然类', '生命类', '民生类', '字形类', '难记字根'],
  //     chapterNum: [39, 61, 82, 48, 96],
  //     tags: ['字根'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
  //   {
  //     id: 'ShanRenMaLTS004',
  //     name: '难记字根复习',
  //     description: '学习字根的同形或同源变体，该词典下词条均不需要输入小码',
  //     category: '入门',
  //     url: '/dicts/字根主码进阶.json',
  //     length: 326,
  //     chapterName: ['自然类', '生命类', '民生类', '字形类', '难记字根'],
  //     chapterNum: [39, 61, 82, 48, 96],
  //     tags: ['字根'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
  //   {
  //     id: 'ShanRenMaLTS004',
  //     name: '词组练习',
  //     description: '学习字根的同形或同源变体，该词典下词条均不需要输入小码',
  //     category: '入门',
  //     url: '/dicts/字根主码进阶.json',
  //     length: 326,
  //     chapterName: ['自然类', '生命类', '民生类', '字形类', '难记字根'],
  //     chapterNum: [39, 61, 82, 48, 96],
  //     tags: ['字根'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
  
  //   {
  //     id: 'ShanRenMaLTS001',
  //     name: '通用规范汉字表',
  //     description:
  //     '来自中华人民共和国教育部、国家语言文字工作委员会组织制定的《通用规范汉字表》（2013年6月），释义引用自《〈通用规范汉字表〉使用说明》',
  //     category: '进阶',
  //     url: '/dicts/通用规范汉字表.json',
  //     length: 8105,
  //     tags: ['单字'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
  //   {
  //     id: 'ShanRenMaLTS101',
  //     name: '现代常用字部件',
  //     description: '来自中华人民共和国教育部、国家语言文字工作委员会组织制定的《现代常用字部件及部件名称规范（GF 0014-2009）》（2009年7月）',
  //     category: '进阶',
  //     url: '/dicts/现代常用字部件.json',
  //     length: 514,
  //     tags: ['单字'],
  //     language: 'zh',
  //     languageCategory: 'zh',
  //   },
]

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaryResources: DictionaryResource[] = [...ShanRenMaLTSDict]

export const dictionaries: Dictionary[] = dictionaryResources.map((resource) => {
  if (resource.chapterNum) {
    return {
      ...resource,
      chapterCount: calcChapterCount(resource.length, resource.chapterNum.length),
    }
  } else {
    return {
      ...resource,
      chapterCount: calcChapterCount(resource.length),
    }
  }
})

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, Dictionary> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
