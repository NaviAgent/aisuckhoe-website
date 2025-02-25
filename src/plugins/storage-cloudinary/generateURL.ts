import type { GenerateURL } from '@payloadcms/plugin-cloud-storage/types'
import { CloudinaryService } from 'payload-cloudinary-plugin/dist/services/cloudinaryService'
import { v2 as cloudinary, UploadApiOptions } from 'cloudinary'

interface Args {
  getStorageService: () => CloudinaryService
  cloud_name?: string
  options?: UploadApiOptions
}

export const getGenerateURL =
  ({ getStorageService }: Args): GenerateURL =>
  ({ data, filename, prefix }) => {
    console.log('getGenerateURL')
    console.log(data, filename, prefix)
    return `http://res.cloudinary.com/ivanistao/image/upload/v1740487862/aisuckhoe/${filename}`
  }
