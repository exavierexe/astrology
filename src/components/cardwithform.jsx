import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import axios from "axios"




export function CardWithForm() {
  const [uname, setUname] = useState("");
  function handleUnameChange(event){
    setUname(event.target.value);
    
  }
  const [phone, setPhone] = useState("");
  function handlePhoneChange(event){
    setPhone(event.target.value);
    
  }
  const [email, setEmail] = useState("");
  function handleEmailChange(event){
    setEmail(event.target.value);
    console.log
  }
  const [birthday, setBirthday] = useState("");
  function handleBirthdayChange(event){
    setBirthday(event.target.value);
  }
  const [time, setTime] = useState("");
  function handleTimeChange(event){
    setTime(event.target.value);
  }
  const [location, setLocation] = useState("");
  function handleLocationChange(event){
    setLocation(event.target.value);
  }
  const [questions, setQuestions] = useState("");
  function handleQuestionsChange(event){
    setQuestions(event.target.value);
    
  }
  
  const newApp = {uname: uname, phone: phone, email: email, birthday: birthday, time: time, location: location, questions: questions};
    
    
  function handleSubmit(){
    axios.post('postgresql://neondb_owner:4meBOdfAQq2j@ep-orange-frog-a5z7c1dw.us-east-2.aws.neon.tech/neondb?sslmode=require', {newApp})
  }
 
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Get a birth chart reading</CardTitle>
        <CardDescription>$325</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="uname">Name</Label>
              <Input id="uname" placeholder="" onChange={handleUnameChange}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" placeholder="" onChange={handlePhoneChange}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="" onChange={handleEmailChange}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="birthday">Date of birth</Label>
              <Input id="birthday" placeholder="12:00 am" onChange={handleBirthdayChange}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="time">Time of birth</Label>
              <Input id="time" placeholder="MM/DD/YYYY" onChange={handleTimeChange}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Location of birth</Label>
              <Input id="location" placeholder="City, State/District, Country" onChange={handleLocationChange}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="questions">What topics are you interested in?</Label>
              <textarea id="questions" onChange={handleQuestionsChange}></textarea> 
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-1.5">
        <Button onClick={handleSubmit} >Submit</Button>
      </CardFooter>
    </Card>
  )
}
