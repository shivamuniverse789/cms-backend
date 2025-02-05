import Page from "../models/page.js"

// Create a Page
export const createPage = async (req, res) => {
  try {
    const { parent_id, slug, title, content } = req.body;
    const page = new Page({ parent_id, slug, title, content });
    await page.save();
    res.status(201).json(page);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Page by Dynamic Slug
export const getPageBySlug = async (req, res) => {
  try {
    const path = req.params[0]; // Get full path from route
    const slugs = path.split("/");

    let parent = null;
    let currentPage = null;

    for (const slug of slugs) {
      currentPage = await Page.findOne({ slug, parent_id: parent ? parent._id : null });
      if (!currentPage) {
        return res.status(404).json({ error: "Page not found" });
      }
      parent = currentPage;
    }

    res.status(200).json(currentPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
