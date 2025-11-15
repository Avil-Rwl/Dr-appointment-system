import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {
  // If a full URL is provided, prefer that
  const cloudinaryUrl = process.env.CLOUDINARY_URL
  if (cloudinaryUrl && typeof cloudinaryUrl === 'string') {
    cloudinary.config(cloudinaryUrl)
    return
  }

  // Otherwise use discrete vars
  const cloudName = process.env.CLOUDINARY_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_SECRET_KEY || process.env.CLOUDINARY_API_SECRET || process.env.CLOUDINARY_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    console.warn('Cloudinary env missing:', {
      CLOUDINARY_NAME: !!cloudName,
      CLOUDINARY_API_KEY: !!apiKey,
      CLOUDINARY_SECRETPRESENT: !!apiSecret
    })
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
  })
}

export default connectCloudinary