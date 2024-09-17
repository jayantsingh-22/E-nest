import { find } from '../models/reviewModel';

export async function getReviews(req, res) {
    try {
        const reviews = await find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
