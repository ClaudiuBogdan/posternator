import formidable from "formidable"
import type { NextApiRequest, NextApiResponse } from "next"
import sharp from "sharp"
import logger from "global/logger"

type Data = {
  imageData?: {
    width: number
    height: number
  }
}

// Formidable image upload needs original body
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  logger.info({msg: "Image data request received"})
  const form = formidable({ keepExtensions: true })

  const parseImage = async () => new Promise<Data>((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if(err) {
        return reject(err)
      }

      const file = Array.isArray(files.file) ? files.file[0] : files.file
      const image = await sharp(file.filepath)
      const metadata = await image.metadata()

      if(!metadata.width || !metadata.height) {
        reject(new Error("Image size not available"))
      }

      const data: Data = {
        imageData: {
          width: metadata.width!,
          height: metadata.height!,
        },
      }

      return resolve(data)
    })
  })

  try{
    // TODO: read image size
    const data = await parseImage()
    res.status(201).send(data)
    logger.info({msg: "Image data request completed successfully", data})
  }
  catch(err){
    logger.error({msg: "Image data request completed failed", err})
    return res.status(500).json({})
  }

  // if (req.url === "/api/upload" && req.method === "POST") {

  // }
}

// const saveFile = async (file: File) => {
//   const data = fs.readFileSync(file.filepath)
//   fs.writeFileSync(`./public/${file.originalFilename}`, data)
//   await fs.unlinkSync(file.filepath)
//   return
// }