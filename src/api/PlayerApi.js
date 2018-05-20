import axios from 'axios';
import config from '../config';

class PlayerApi {
    static getAllPlayers() {
        return axios.get(config.api + 'players.json');
    }
}

export default PlayerApi