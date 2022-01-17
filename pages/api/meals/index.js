import dbConnect from "../../../server/lib/mongo"
import Meal from "../../../server/models/Meal"

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    if (method === "GET") {
        try {
            const meals = await Meal.find()
            res.status(200).json(meals)
        } catch(error) {
            res.status(500).json(error)
        }
    }

    if (method === "PUT") {

    }

    if (method === "POST") {
        try {
            const meal = await Meal.create(req.body)
            res.status(201).json(meal)
        } catch(error) {
            res.status(500).json(error)
        }
    }

    if (method === "DELETE") {

    }
  }
