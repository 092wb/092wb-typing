import styles from './index.module.css'
import type { ExportProgress, ImportProgress } from '@/utils/db/data-export'
import { exportDatabase, importDatabase } from '@/utils/db/data-export'
import * as Progress from '@radix-ui/react-progress'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useCallback, useState } from 'react'

export default function Version() {
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState(0)

  const [isImporting, setIsImporting] = useState(false)
  const [importProgress, setImportProgress] = useState(0)

  const exportProgressCallback = useCallback(({ totalRows, completedRows, done }: ExportProgress) => {
    if (done) {
      setIsExporting(false)
      setExportProgress(100)
      return true
    }
    if (totalRows) {
      setExportProgress(Math.floor((completedRows / totalRows) * 100))
    }

    return true
  }, [])

  const onClickExport = useCallback(() => {
    setExportProgress(0)
    setIsExporting(true)
    exportDatabase(exportProgressCallback)
  }, [exportProgressCallback])

  const importProgressCallback = useCallback(({ totalRows, completedRows, done }: ImportProgress) => {
    if (done) {
      setIsImporting(false)
      setImportProgress(100)
      return true
    }
    if (totalRows) {
      setImportProgress(Math.floor((completedRows / totalRows) * 100))
    }

    return true
  }, [])

  const onStartImport = useCallback(() => {
    setImportProgress(0)
    setIsImporting(true)
  }, [])

  const onClickImport = useCallback(() => {
    importDatabase(onStartImport, importProgressCallback)
  }, [importProgressCallback, onStartImport])

  return (
    <ScrollArea.Root className="flex-1 select-none overflow-y-auto ">
      <ScrollArea.Viewport className="h-full w-full px-3">
        <div className={styles.tabContent}>
          <div className={styles.section}>
            <span className={styles.sectionLabel}>练习方式</span>
            <span className={styles.sectionDescription}>
              <p className="indent-4 text-sm text-gray-500 dark:text-gray-300">
              1. 按顺序边打边记大致字根所在键位。
              </p>
              <p className="indent-4 text-sm text-gray-500 dark:text-gray-300">
                2. Ctrl + V 关闭键位提示后练习数遍。
              </p>
              <p className="indent-4 text-sm text-gray-500 dark:text-gray-300">
                3. 设置 → 高级设置 → 开启章节乱序练习数遍。
              </p>
            </span>
            <span className={styles.sectionLabel}>问题反馈</span>
            <span className={styles.sectionDescription}>
              <p className=" text-black-500 text-sm dark:text-gray-300">
                您可以点击
                <a className="text-emerald-400" href="https://092wb.github.io/" target="_blank" rel="noreferrer">
                  该链接
                </a>
                以获取交流社区与问题反馈的方式。
              </p>
            </span>
            <span className={styles.sectionLabel}>项目说明</span>
            <span className={styles.sectionDescription}>
              <p className="indent-4 text-sm text-gray-500 dark:text-gray-300">
                1、本网页是
                <strong>
                  <a className="text-emerald-400" href="https://092wb.github.io/" target="_blank" rel="noreferrer">
                    【092五笔】
                  </a>
                </strong>
                的配套打字练习平台。
              </p>
              <p className="indent-4 text-sm text-gray-500 dark:text-gray-300">
                2、本网页使用开源项目
                <strong>
                  <a className="text-emerald-400" href="https://siuze.github.io/ShanRenMaLTS/" target="_blank" rel="noreferrer">
                    {' '}
                    山人码{' '}
                  </a>
                </strong>{' '}
                修改搭建，这是一个纯前端项目网页，用户数据只保存在本地，<strong>没有任何数据收集行为</strong>，请放心使用。
              </p>
              <p className="indent-4 text-sm text-gray-500 dark:text-gray-300">
                3、目前网站的词条语音是通过调用有道API实现的，调用时仅上传词汇发音文本，不包含任何用户个人数据。
              </p>
            </span>
            <span className={styles.sectionLabel}>交流群</span>
            <span className={styles.sectionDescription}>
            <p className=" text-black-500 text-sm dark:text-gray-300">
                您可以
                <a className="text-emerald-400" href="https://qm.qq.com/q/p5MH3kXWT0" target="_blank" rel="noreferrer">
                  点击加群
                </a>
                或使用群号7390600。
              </p>
            </span>
            <span className={styles.sectionLabel}>感谢</span>
            <span className={styles.sectionDescription}>
              <p className=" text-black-500 text-sm dark:text-gray-300">
                山人码、Qwerty Learner、有道
              </p>
            </span>
          </div>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="flex touch-none select-none bg-transparent " orientation="vertical"></ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
