
const connection = require('../../database/connection');
const generateUniquiId = require('../../Utils/generateUniqueId');

class OngController {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }

  async store(req, res) {
    const {
      name, email, whatsapp, city, uf,
    } = req.body;

    const id = generateUniquiId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }
}
module.exports = new OngController();
