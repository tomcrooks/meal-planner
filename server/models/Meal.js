import { Schema, model, models } from "mongoose";

const MealSchema = new Schema({
        title: {
            type: String,
            required: true,
            maxLength: 60
        },
        description: String,
        ingrediants: String,
        method: String,
        rating: Number,
        servings: Number,
        preparationTime: Number,
        cookingTime: Number,
        source: String,
        sourceUrl: String,
        images: [String]
    },
    {timestamps: true}
)

export default models.Meal || model("Meal", MealSchema)
