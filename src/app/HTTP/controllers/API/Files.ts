import { Request, Response } from 'express';
import * as multer from 'multer';

import * as app from 'app';
const log = app.log('upload');

export default {
	uploadText: async function(req: Request, resp: Response) {
		// Reading an uploaded file.
		var upload = multer({
			storage: multer.memoryStorage(),
		}).single('file');

		try {
			await new Promise<void>((resolve, reject) => {
				upload(req, resp, (err) => {
					if (err) {
						reject(err);
						return;
					}

					(req as any).file && (req.body.file = (req as any).file.buffer);
					resolve();
				});
			});
		} catch(err) {
			log(`/upload Error:`, err);
		}

		const file = (req as any).file;

		log(`Uploaded ${file.buffer.length} bytes of ${file.mimetype} content.`);
		
		resp.status(200).json({
			filename: file.originalname,
			MIME: file.mimetype,
			length: file.size,
		});
	},
}