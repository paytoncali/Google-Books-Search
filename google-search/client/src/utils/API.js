import axios from 'axios';

export default {
    search: function() {
        return axios.get("https://www.googleapis.com/books")
    }
}