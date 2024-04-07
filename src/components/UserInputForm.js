'use client'

export default function UserInputForm() {

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    console.log(response)
    const data = await response.json()
    console.log("Response completed")
    console.log(data)
  }

  return (
    <form className="flex flex-col w-full justify-center items-center gap-4" onSubmit={onSubmit}>
      <label className="text-lg font-semibold">List your Hobbies</label> 
      <input className="bg-yellow-100 w-[40%] h-[20vh] text-center break-words" type="text" name="Hobbys" placeholder="Basketball, Gaming" />
      <label className="text-lg font-semibold">List your Interests</label>
      <input className="bg-yellow-100 w-[40%] h-[20vh] text-center break-words" type="text" name="Intrest" placeholder="Movies, Music"/>
      <button type="submit">Submit</button>
    </form>
    )
  }
