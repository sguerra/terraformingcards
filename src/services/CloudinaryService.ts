
export const CloudinaryService = {
  async upload (base64Image: string): Promise<string> {
    const formData = new FormData()
    const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    const productEnvironment = import.meta.env.VITE_CLOUDINARY_PRODUCT_ENVIRONMENT
    formData.append('api_key', apiKey)
    formData.append('file', base64Image)
    formData.append('upload_preset', uploadPreset)
    formData.append('timestamp', (Date.now() / 1000).toString())

    return await fetch(`https://api.cloudinary.com/v1_1/${productEnvironment as string}/image/upload`, {
      method: 'POST',
      body: formData
    }).then(async (uploadImage) => {
      return await uploadImage.json()
    }).then((uploadImageJon) => {
      return uploadImageJon.secure_url as string
    })
  }
}
