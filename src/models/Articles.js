import mongoose from 'mongoose';

const articlesSchema = new mongoose.Schema(
    {
        featured: {
            type: Boolean,
            default: false 
        },
        title: String,
        url: String,
        imageUrl: String,
        newsSite: String,
        summary: String,
        publishedAt: {
            type: Date
        },
        launches: [
            {
                id: String,
                provider: String
            }
        ],
        events: [
            {
                id: String,
                provider: String
            }
        ]
    }
)


export default mongoose.model('Articles', articlesSchema);