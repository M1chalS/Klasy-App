import express from "express";
import compression from "compression";

const app = express();

const app_folder = "./public";
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html', 'js', 'ico', 'css'],
    index: false,
    maxAge: '1y',
    redirect: true,
}

app.use(compression());
app.use(express.static(app_folder, options));

app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: app_folder});
});

export {app as front}