import app from './src/server';

import 'dotenv/config';

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});






