import React from 'react'
import { Label, TextInput, Checkbox, Button } from 'flowbite-react' 

const login = () => {
  return (
    <div>
       <form className="flex flex-col gap-4 bg-pink-400 w-full max-w-lg p-6 rounded-lg " action=''>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Your name" />
        </div>
        <TextInput id="username" type="username" placeholder="Username" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </div>
  )
}

export default login
