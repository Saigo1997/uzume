const axiosBase = require('axios');
const fs = require('fs');
const FormData = require('form-data')

export type ResImage = {
  image_id: string
  file_name: string
  ext: string
  memo: string
  author: string
  created_at: string
  // TODO: tagsを実装
}

export type ResImages = {
  page: number
  images: ResImage[]
}

export default class Image {
  static readonly IMAGE_SIZE_THUMBNAIL: string = "thumbnail";
  static readonly IMAGE_SIZE_ORIGINAL: string = "original";

  workspaceId: string
  accessToken: string

  constructor(workspaceId: string, accessToken: string) {
    this.workspaceId = workspaceId
    this.accessToken = accessToken
  }

  private authorizeAxiosBase(contentType: string) {
    let encodedString = Buffer.from(`${this.workspaceId}:${this.accessToken}`).toString('base64')
    let authorizeString = `Basic ${encodedString}`

    let axios = axiosBase.create({
      baseURL: 'http://localhost:1323/api/v1/images',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorizeString
      },
      responseType: 'json'
    })
    axios.interceptors.request.use((request:any) => {
      console.log('request: ', request)
      return request
    });
    axios.interceptors.response.use((response:any) => {
      console.log('response: ', response.data)
      return response
    });
    return axios;
  }

  private authorizeAxios() {
    return this.authorizeAxiosBase('application/json')
  }

  private authorizeAxiosMultipart() {
    return this.authorizeAxiosBase('multipart/form-data')
  }

  public async create(filePathList: string[]) {
    try {
      for (let i = 0; i < filePathList.length; i++) {
        let filePath = filePathList[i]
        const params = new FormData();
        params.append('image', fs.createReadStream(filePath), filePath)
        await this.authorizeAxiosMultipart().post('/', params, { headers: params.getHeaders() } as any)
      }
      return 0
    } catch (error) {
      console.log(`image post error [${error}]`)
    }
  }

  public async getList(page: number): Promise<ResImages> {
    try {
      let res = await this.authorizeAxios().get('/', { params: { page: page} })
      return JSON.parse(JSON.stringify(res.data)) as ResImages
    } catch (error) {
      console.log(`image get error [${error}]`)
    }

    return null as any
  }

  public async getImage(imageId: string, imageSize: string): Promise<string> {
    try {
      let encodedString = Buffer.from(`${this.workspaceId}:${this.accessToken}`).toString('base64')
      let authorizeString = `Basic ${encodedString}`
      let res = await axiosBase.create({
        baseURL: `http://localhost:1323/api/v1/images/${imageId}/file?image_size=${imageSize}`,
        responseType: 'arraybuffer',
        headers: {
          'Authorization': authorizeString,
          'Content-Type': 'image'
        },
      }).get()
      return res.data.toString('base64')
    } catch (error) {
      console.log(`image get error [${error}]`)
    }

    return null as any
  }
}