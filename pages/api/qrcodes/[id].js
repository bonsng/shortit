import QRCode from "@/db/models/QRCode";
import dbConnect from "@/db/dbConnect";
export default async function handler(req, res) {
    await dbConnect();
    const {id} = req.query

    switch (req.method) {
        case 'GET':
            const newQRcode = await QRCode.findById(id);
            res.send(newQRcode);
            break;
        case 'PATCH':
            const updatedQRcode = await QRCode.findByIdAndUpdate(id, req.body, {new : true});
            res.send(updatedQRcode);
            break;
        case 'DELETE':
            await QRCode.findByIdAndDelete(id);
            res.status(204).send();
            break;
        default:
            res.status(404).send();
    }
}