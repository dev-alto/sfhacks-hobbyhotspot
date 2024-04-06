export default function UserInputForm() {

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    
    // ...
  }

  return (
    <form className="flex flex-column " onSubmit={onSubmit}>
      <label /> 
      <input type="text" name="Input your Hobbys." />
      <input type="text" name="Input your Intrest." />
      <button type="submit">Submit</button>
    </form>
    )
  }