import config from './config.json'

class PhotoService {
    getImage(imageSrc) {
        return config.serviceUrl + config.photoService + imageSrc;
    }
}

const photoService = new PhotoService();
export default photoService;