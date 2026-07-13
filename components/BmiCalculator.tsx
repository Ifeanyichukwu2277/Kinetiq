"use client"

// We need useState because this section is interactive — the user types in
// their height/weight and we need to remember those values and update the
// screen live as they type or press calculate.
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

// This is just a list of BMI ranges and what they mean, so we can show
// them in a little reference table like in the picture (BELOW 18.5 =
// UNDERWEIGHT, etc). Keeping it as an array makes it easy to loop over
// with .map() instead of writing out each row by hand.
const bmiRanges = [
  { range: "Below 18.5", status: "Underweight" },
  { range: "18.5 - 24.9", status: "Normal" },
  { range: "25 - 29.9", status: "Overweight" },
  { range: "30 and Above", status: "Obese" },
]

const BmiCalculator = () => {
  // These four pieces of state hold whatever the user types into the form.
  // We start them as empty strings because the inputs are empty at first.
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  // This holds the actual calculated BMI number once the user hits the button.
  // It starts as null, meaning "nothing calculated yet".
  const [bmi, setBmi] = useState<number | null>(null)

  // This function runs when the user clicks "Calculate".
  // BMI formula: weight (kg) divided by height (in meters) squared.
  const handleCalculate = () => {
    // Turn the text the user typed into actual numbers we can do math with.
    const heightInCm = parseFloat(height)
    const weightInKg = parseFloat(weight)

    // Basic safety check — if either field is empty or not a real number,
    // don't try to calculate (this avoids showing "NaN" on the screen).
    if (!heightInCm || !weightInKg) return

    // Convert height from centimeters to meters, since the formula needs meters.
    const heightInMeters = heightInCm / 100

    // The actual BMI formula.
    const result = weightInKg / (heightInMeters * heightInMeters)

    // Save the result (rounded to 1 decimal place, like "22.4") into state,
    // which will cause the component to re-render and show it on screen.
    setBmi(parseFloat(result.toFixed(1)))
  }

  // A small helper that looks at the calculated BMI number and returns
  // which category it falls into, so we can highlight it below.
  const getBmiStatus = (value: number) => {
    if (value < 18.5) return "Underweight"
    if (value < 25) return "Normal"
    if (value < 30) return "Overweight"
    return "Obese"
  }

  return (
    // Section background is light/white like the reference, sitting right
    // after the darker "IMPROVE YOUR LIFE" section above it.
    // Added px-4 (mobile) and xl:px-28 (desktop) so content doesn't sit
    // flush against the screen edges — matches the Testimonial section's pattern.
    <section className="bg-white py-24 px-4 xl:px-28" id="BMI">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE — heading + the reference range table, like the picture */}
        <motion.div
         variants={fadeIn("right", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.2 }}
        >
          {/* small eyebrow label above the heading, like "SET HIGH FITNESS GOALS" */}
          <p className="uppercase text-xs tracking-[3px] font-bold text-black/60 mb-2">
            Set High Fitness Goals
          </p>
          <h2 className="h2 text-accent mb-6">Calculate Your BMI</h2>

          {/* the little reference table showing what each BMI range means */}
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/10">
                <th className="py-3 uppercase text-xs tracking-[2px] font-bold">BMI</th>
                <th className="py-3 uppercase text-xs tracking-[2px] font-bold">Weight Status</th>
              </tr>
            </thead>
            <tbody>
              {/* looping through our bmiRanges array so we don't have to
                  write four rows by hand */}
              {bmiRanges.map((item, index) => (
                <tr key={index} className="border-b border-black/5">
                  <td className="py-3 font-bold">{item.range}</td>
                  <td className="py-3 text-black/60">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* RIGHT SIDE — the actual input form where the user types their stats */}
        <motion.div
         variants={fadeIn("left", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.2 }}
         className="bg-[#f5f5f5] rounded-md p-8"
        >
          {/* two-column grid so Height sits next to Weight, and Age next to Gender */}
          <div className="grid grid-cols-2 gap-6 mb-6">

            {/* HEIGHT input */}
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-[2px] font-bold mb-2">
                Height / cm
              </label>
              <input
                type="number"
                placeholder="e.g. 175"
                value={height}
                // whenever the user types, update our "height" state with
                // whatever is currently in the box
                onChange={(e) => setHeight(e.target.value)}
                className="bg-white border border-black/10 rounded-sm px-4 py-3 outline-none focus:border-accent"
              />
            </div>

            {/* WEIGHT input */}
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-[2px] font-bold mb-2">
                Weight / kg
              </label>
              <input
                type="number"
                placeholder="e.g. 80"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-white border border-black/10 rounded-sm px-4 py-3 outline-none focus:border-accent"
              />
            </div>

            {/* AGE input */}
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-[2px] font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                placeholder="e.g. 25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-white border border-black/10 rounded-sm px-4 py-3 outline-none focus:border-accent"
              />
            </div>

            {/* GENDER dropdown */}
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-[2px] font-bold mb-2">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-white border border-black/10 rounded-sm px-4 py-3 outline-none focus:border-accent"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* the button that actually runs our calculation function above */}
          <button
            onClick={handleCalculate}
            className="w-full bg-accent text-white uppercase text-sm tracking-[2px] font-bold py-4 rounded-sm hover:opacity-90 transition-all duration-300"
          >
            Calculate BMI
          </button>

          {/* this whole block only shows up AFTER bmi has a value —
              "bmi !== null &&" means "only render what's after this if
              bmi is not null" */}
          {bmi !== null && (
            <div className="mt-6 bg-white rounded-sm p-6 text-center">
              <p className="uppercase text-xs tracking-[2px] font-bold text-black/50 mb-1">
                Your BMI
              </p>
              <p className="text-4xl font-bold text-accent mb-1">{bmi}</p>
              <p className="uppercase text-sm tracking-[1px] font-semibold">
                {getBmiStatus(bmi)}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default BmiCalculator