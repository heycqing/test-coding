// 请使用优化以下代码：

// 假设已经存在以下3个函数，3个函数的功能都是向服务器上传文件，根据不同的上传类型参数都会不一样。内容的实现这里无须关注
// 请重新设计一个功能，根据不同文件的后缀名，上传到不同的服务器。
// txt 上传到 ftp
// exe 上传到 sftp
// doc 上传到 http
function uploadByFtp(_file: string): Promise<boolean> {
  return new Promise(resolve => resolve(true))
}
function uploadBySftp(_file: string[], cb: (ret: boolean) => void): void {
  cb(true)
}
function uploadByHttp(_file: string): boolean {
  return true
}

const fileAfterName = (file: string) => {
  console.log('info fileAfterName -> file', file)
  return file.match(/\.(\w+)$/)?.[1] || ''
}


const uploadFnMap:any = {
  'txt': uploadByFtp,
  'exe': uploadBySftp,
  'doc': uploadByHttp,
}

// 实现如下
function upload(files: string[], cb: (ret: boolean) => void): Promise<boolean> {
  console.log('info upload -> files', files)
  console.log('info upload -> cb', cb)
  return Promise.all(
    files.filter((file: string) => !Object.keys(uploadFnMap).includes(fileAfterName(file)))
      .map((fileItem:string) => {
        return new Promise((resolve, reject) => {
          try {
            console.log('info getUploadFnMap -> fileItem', fileItem)
            resolve(uploadFnMap[fileAfterName(fileItem)](fileItem, cb))
          } catch (e) {
            console.log('warn getUploadFnMap -> fileItem', fileItem)
            reject(e)
          }
        }).then(res => {
          console.log('info upload -> _res', res)
          cb && cb instanceof Function && cb(true)
          return true
        }, rej => {
          console.log('info upload -> rej', rej)
          return false
        })
      }),
  ).then(res => {
    return res.every(Boolean)
  })
}

upload(['1.txt','2.exe'], () => true).then(res => {
  console.log(res)
})

