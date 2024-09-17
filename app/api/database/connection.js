import { connect } from 'mongoose';

const db = async () => {
    try {
        await connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit the process with failure
    }
};

export default db;
