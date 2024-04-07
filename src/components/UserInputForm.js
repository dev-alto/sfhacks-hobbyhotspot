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
    <div className="w-full"> 
      <form className="bg-primred w-full flex flex-col justify-center items-center gap-4" onSubmit={onSubmit}>
        <label className="text-lg text-white font-semibold">List your Hobbies</label> 
        <input className="bg-white w-[40%] h-[20vh] text-center text-wrap" type="text" name="Hobbys" placeholder="Basketball, Gaming" />
        <label className="text-lg text-white font-semibold">List your Interests</label>
        <input className="bg-white w-[40%] h-[20vh] text-center text-wrap" type="text" name="Intrest" placeholder="Movies, Music"/>
        <button className="bg-darkblue text-white" type="submit">Submit</button>
      </form>
    </div>
    )
  }
