import config from './config.json'

class PhotoService {
    getImage(imageSrc) {
        return config.serviceUrl + config.photoService + "?imgPath=" + imageSrc; //todo should use QS here
    }
}

const photoService = new PhotoService();
export default photoService;