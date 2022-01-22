export class IpcId {
  static readonly NAME_SPACE: string = "images";
  static readonly UPLOAD_IMAGES: string = IpcId.NAME_SPACE + "upload-images";
  static readonly SHOW_IMAGES: string = IpcId.NAME_SPACE + "show-images";
  static readonly SHOW_IMAGES_REPLY: string = IpcId.NAME_SPACE + "show-images-reply";
  static readonly REQUEST_THUMB_IMAGE: string = IpcId.NAME_SPACE + "request-thumb-image";
  static readonly REQUEST_THUMB_IMAGE_REPLY: string = IpcId.NAME_SPACE + "request-image-thumb-reply";
  static readonly REQUEST_ORIG_IMAGE: string = IpcId.NAME_SPACE + "request-orig-image";
  static readonly REQUEST_ORIG_IMAGE_REPLY: string = IpcId.NAME_SPACE + "request-image-orig-reply";
  static readonly GET_IMAGE_INFO_LIST: string = IpcId.NAME_SPACE + "get-image-info-list";
  static readonly GET_IMAGE_INFO_LIST_REPLY: string = IpcId.NAME_SPACE + "get-image-info-list-reply";
  static readonly ADD_TAG: string = IpcId.NAME_SPACE + "add-tag";
  static readonly REMOVE_TAG: string = IpcId.NAME_SPACE + "remove-tag";
  static readonly UPDATE_IMAGE_INFO_REPLY: string = IpcId.NAME_SPACE + "update-image-info";
  static readonly IMAGE_INFO_LIST_UPDATED_REPLY: string = IpcId.NAME_SPACE + "image-info-list-updated-reply";
}

export type ImageFiles = {
  workspaceId: string
  imageFileList: string[]
  tagIds: string[]
  searchType: string
}

export type ShowImages = {
  workspaceId: string
  page: number
  tagIds: string[]
  searchType: string
  uncategorized: boolean
}

export type RequestImage = {
  workspaceId: string
  imageId: string
  isThumbnail: boolean
}

export type ImageData = {
  imageId: string
  imageBase64: string
}

export type RequestImageInfo = {
  workspaceId: string
  imageIds: string[]
}

export type ImageInfo = {
  image_id: string
  file_name: string
  ext: string
  width: number
  height: number
  memo: string
  author: string
  created_at: string
  tags: string[]
}

export type ImageInfos = {
  workspaceId: string
  page: number
  images: ImageInfo[]
}

export type AddTagToImage = {
  workspaceId: string
  imageIds: string[]
  tagId: string
}

export type RemoveTagFromImage = {
  workspaceId: string
  imageIds: string[]
  tagId: string
}
