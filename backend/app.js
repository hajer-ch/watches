const express = require('express');
const path = require('path');
const app = express();
const auth = require('./middelware/auth');
const bodyParser = require('body-parser');
const Montre = require('./models/montre');
const Contact = require('./models/contact');
const mongoose = require('mongoose');
const multer = require('multer');
const userRoutes = require('./routes/user');
mongoose.connect('mongodb://localhost:27017/watches', { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/images', express.static(path.join('backend/images')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime Type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + extension);
    }
})
app.post('/api/montres', multer({ storage: storage }).single('image'), (req, res, next) => {

    console.log("req file", req.file);
    url = req.protocol + '://' + req.get('host');
    console.log('This is my host url', url);
    const montre1 = new Montre({
        price: req.body.price,
        marque: req.body.marque,
        image: url + '/images/' + req.file.filename,
        description: req.body.description
    });
    montre1.save();
    console.log("Montre added successfully", montre1);
    // 201: Requête traitée avec succès et création d’un document.
    res.status(201).json({
        message: "Montre added successfully"
    });

});

app.delete("/api/montres/:id", (req, res) => {
    console.log("Id params", req.params.id);
    Montre.deleteOne({ _id: req.params.id }).then(
        result => {
            console.log("Delete result", result);
        }
    );
    // 200: Requête traitée avec succès. La réponse dépendra de la méthode de requête utilisée.
    res.status(200).json({
        message: "Delete successfully"
    });

});

app.put('/api/montres/:id', multer({ storage: storage }).single('image'),
    (req, res, next) => {
        let image = req.body.image;
        console.log("BG image", image);

        if (req.file) {
            url = req.protocol + '://' + req.get('host');
            image = url + '/images/' + req.file.filename;
            console.log("BG image file", image);


        }
        const montre = new Montre({
            _id: req.body._id,
            price: req.body.price,
            marque: req.body.marque,
            image: image,
            description: req.body.description

        });
        Montre.updateOne({ _id: req.body._id }, montre).then(
            result => {
                if (result) {
                    res.status(200).json({
                        message: "Updated Successfully"
                    });
                } else {
                    console.log("error in update");

                }
            }
        );

    });

app.get('/api/montres/:id', (req, res, next) => {

    Montre.find({ _id: req.params.id }).then(montre => {
        if (montre) {
            res.status(200).json(montre);
        } else {
            console.log("Montre by ID not found");
            res.status(404).json({ message: "montre not found!" });
        }
    });
});

app.get('/api/montres', auth, (request, response) => {

    Montre.find((err, documents) => {
        response.status(200).json({
            message: "Success",
            montres: documents
        });

    });
});

app.use('/api/user', userRoutes);
module.exports = app;