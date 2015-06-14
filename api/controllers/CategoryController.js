/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  ByName: (req, res)=> {
    Category.findOneByName(req.params.name)
      .then((category, err)=> {
        if (err) {
          return res.serverError(err);
        } else {
          return res.json(category);
        }
      });
  },
  ByParent: (req, res) => {
    Category.find({
      parent: req.params.id == 'null' ? null : req.params.id
    }).then((categories, err) => {
      if (err) {
        return res.serverError(err);
      } else {
        return res.json(categories);
      }
    });
  },
  GetChildren: (req, res)=> {
    Category.find({
      parent: req.param('id')
    }).then((categories, err)=> {
      if (err) {
        return res.serverError(err);
      } else {
        return res.json(categories);
      }
    });
  },
  GetChildrenByName: (req, res) => {
    Category.find({
      name: req.param('name')
    }).then((categories, err) => {
      if (err) {
        return res.serverError(err);
      } else {
        return res.json(categories);
      }
    });
  }
};
