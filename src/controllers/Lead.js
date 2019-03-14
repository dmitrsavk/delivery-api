import LeadModel from "../models/LeadModel";
import fetch from "node-fetch";

const { URLSearchParams } = require("url");

export default class Lead {
  async send(req, res) {
    const body = req.body;
    const cookies = req.cookies;

    try {
      const params = new URLSearchParams();

      params.append("key", "gX7CIBR0MJ2lejhrNHdcRVjgWyGIc7BXTlcaI1axr");
      params.append("name", body.name);
      params.append("phone", body.phone);
      params.append("offer_id", body.offerId);
      params.append("country", "Россия");
      params.append("ip_address", req.headers["x-real-ip"]);

      await fetch("https://cpa.tl/api/lead/send", {
        method: "post",
        body: params
      });

      await LeadModel.create({
        uid: cookies.uid,
        landName: body.landName,
        offerId: body.offerId,
        isMobile: body.isMobile,
        name: body.name,
        phone: body.phone,
        offerId: body.offerId,
        formId: body.formId
      });

      res.json({ ok: true });
    } catch (err) {
      res.json({ ok: false });
    }
  }
}
