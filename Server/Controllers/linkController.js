import LinkModel from "../Models/LinkModel.js";

const LinksController = {
  getList: async (req, res) => {
    try {
      const Links = await LinkModel.find();
      res.json({ Links });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const Link = await LinkModel.findById(req.params.id);
      res.json(Link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { originalUrl } = req.body;
    try {
      const newLink = await LinkModel.create({ originalUrl });
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { originalUrl } = req.body;
    try {
      const updatedLink = await LinkModel.findByIdAndUpdate(id, { originalUrl }, {
        new: true,
      });
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await LinkModel.findByIdAndDelete(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  redirect: async (req, res) => {
    const { id } = req.params;
    const ipAddress = req.ip; // ניתן לקבל את כתובת ה-IP מהבקשה
    const targetParamValue = req.query[req.targetParamName] || ""; 

    try {
      const link = await LinkModel.findById(id);
      if (!link) {
        return res.status(404).json({ message: "Link not found" });
      }

      link.clicks.push({ ipAddress, targetParamValue });
      await link.save();

      res.redirect(link.originalUrl);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getClickStats: async (req, res) => {
    const { id } = req.params;

    try {
      const link = await LinkModel.findById(id);
      if (!link) {
        return res.status(404).json({ message: "Link not found" });
      }

      const clickStats = link.clicks.reduce((acc, click) => {
        const target = click.targetParamValue;
        if (!acc[target]) {
          acc[target] = 0;
        }
        acc[target]++;
        return acc;
      }, {});

      res.json({ clickStats });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
};


export default LinksController;
