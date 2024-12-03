import React from 'react'

export default function page() {
  return (
    <div>
      <div className="flex flex-col items-center py-8 px-4">
  {/* Your Details Container */}
  <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Your Details</h2>
    <div className="flex flex-col gap-4">
      <label htmlFor="name" className="font-medium">Name:</label>
      <input
        type="text"
        id="name"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Enter your name"
      />
      <label htmlFor="email" className="font-medium">Email:</label>
      <input
        type="email"
        id="email"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Enter your email"
      />
    </div>
  </div>

  {/* Your Review Container */}
  <div className="w-full max-w-2xl bg-gray-100 p-6 mt-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Your Review</h2>
    <div className="flex flex-col gap-6">
      {/* First Question: How did you go to input us? */}
      <div className="flex flex-col">
        <label htmlFor="input-us" className="font-medium">How did you go to input us?</label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Google</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">Other</button>
        </div>
      </div>

      {/* Second Question: Would you visit again? */}
      <div className="flex flex-col">
        <label htmlFor="visit-again" className="font-medium">Would you visit again?</label>
        <div className="flex gap-4">
          <div className="flex items-center">
            <input type="radio" id="yes" name="visit" value="yes" className="mr-2" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="no" name="visit" value="no" className="mr-2" />
            <label htmlFor="no">No</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="maybe" name="visit" value="maybe" className="mr-2" />
            <label htmlFor="maybe">Maybe</label>
          </div>
        </div>
      </div>

      {/* Comment Box */}
      <div className="flex flex-col">
        <label htmlFor="comment" className="font-medium">Additional Comments:</label>
        <textarea
          id="comment"
          rows={4}
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Leave your comment here"
        ></textarea>
      </div>

      {/* Email Update Checkbox */}
      <div className="flex items-center">
        <input type="checkbox" id="email-update" className="mr-2" />
        <label htmlFor="email-update" className="font-medium">Sign me up for email updates</label>
      </div>

      {/* Submit Review Button */}
      <div className="flex justify-center mt-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit Review</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}