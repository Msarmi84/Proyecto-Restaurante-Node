const multer = require('multer');

function uploadImage(){

    var storage = multer.diskStorage({
        destination: `./public/images`,
        filename: function (req, file, cb) {
            const extension = file.originalname.slice((file.originalname.lastIndexOf('.')))
          cb(null,   Date.now() + '-' + file.originalname   )
        }
      }) 
      var upload = multer({ storage }).single('image');
       return upload;
}

module.exports = uploadImage;