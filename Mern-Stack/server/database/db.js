import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://ipandey2000:Skp977904@ac-eqdh4qi-shard-00-00.rjcew2t.mongodb.net:27017,ac-eqdh4qi-shard-00-01.rjcew2t.mongodb.net:27017,ac-eqdh4qi-shard-00-02.rjcew2t.mongodb.net:27017/?ssl=true&replicaSet=atlas-ly8b0o-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;