import StatisticsModel from "../models/StatisticsModel";
import LeadModel from "../models/LeadModel";

export default class Statistics {
  async landShow(req, res) {
    const body = req.body;
    const cookies = req.cookies;
    const ip = req.headers["x-real-ip"];
    console.log(ip);

    try {
      await StatisticsModel.create({
        uid: cookies.uid,
        landName: body.landName,
        offerId: body.offerId,
        isMobile: body.isMobile
      });
    } catch (err) {
      res.json({ ok: false });
    }

    res.json({ ok: true });
  }

  async get(req, res) {
    try {
      const [leads, uniqLead, show, uniqShow] = await Promise.all([
        LeadModel.count(),
        LeadModel.aggregate("uid", "DISTINCT", { plain: false }),
        StatisticsModel.count(),
        StatisticsModel.aggregate("uid", "DISTINCT", { plain: false })
      ]);

      res.json({
        Лиды: leads,
        "Уникальные лиды": uniqLead.length,
        Показы: show,
        "Уникальные показы": uniqShow.length
      });
    } catch (err) {
      res.json(err);
    }
  }
}
