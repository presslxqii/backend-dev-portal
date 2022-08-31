import app from './application';
import log from './log';

const serverPort = process.env.OPENSHIFT_NODEJS_PORT || 8001;

// @ts-ignore
app.listen(serverPort, (err) => {
    if (err) {
        return log.error(err);
    }
    
    return log.info(`server is listening on ${serverPort}`);
});
