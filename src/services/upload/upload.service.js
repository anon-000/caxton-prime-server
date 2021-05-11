// Initializes the `upload` service on path `/upload`
import {Upload} from './upload.class';
import hooks from './upload.hooks';
import multer from 'multer';
import moment from 'moment';
import fs from 'fs';

export default function (app) {
    const paginate = app.get('paginate');

    const options = {
        paginate,
    };
    const checkAndCreateDirectory = (path, success) => {
        fs.stat(path, (error) => {
            if (error)
                fs.mkdir(path, () => {
                    success();
                });
            else success();
        });
    };
    const storage = multer.diskStorage({
        destination: (_req, _file, cb) => {
            const folder1 = moment(new Date()).format('YYYY');
            const folder2 = moment(new Date()).format('MMDD');
            let path = `public/uploads/${folder1}`;
            checkAndCreateDirectory(path, () => {
                path = `${path}/${folder2}`;
                checkAndCreateDirectory(path, () => {
                    cb(null, path);
                });
            });
        },
        filename: (_req, file, cb) => cb(null, Date.now() + file.originalname),
    });
    const upload = multer({storage: storage}).any();

    app.use(
        '/upload',
        function (req, res, next) {
            upload(req, res, function (err) {
                //console.log('/////////',err);
                if (err instanceof multer.MulterError) {
                    req.body = {
                        result: false,
                        message: err.toString(),
                    };
                } else if (err) {
                    req.body = {
                        result: false,
                        message: err.toString(),
                    };
                } else {
                    //console.log('-------------',req.files);
                    if (req.files && req.files.length > 0) {
                        const files = req.files.map(
                            (each) =>
                                (each.path = `http://${req.feathers.headers.host}/${each.path.replace(
                                    `${each.path.includes('public/uploads') ? 'public/uploads' : 'public\\uploads'}`,
                                    'uploads',
                                )}`),
                        );
                        req.body = {
                            result: true,
                        };
                        if (files.length === 1) req.body.file = files[0];
                        else req.body.files = files;
                    } else {
                        req.body = {
                            result: false,
                            message: 'Please Upload Some Files',
                        };
                    }
                }
                next();
            });
        },
        new Upload(options, app),
    );

    // Get our initialized service so that we can register hooks
    const service = app.service('upload');

    service.hooks(hooks);
}
