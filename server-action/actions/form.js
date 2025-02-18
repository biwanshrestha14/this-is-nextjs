"use server"
import fs from 'fs/promises'
export const handleform = async (e) => {

  console.log(e.get("name"), e.get("add"))
  fs.writeFile("biwan.txt", "this is biwan shrestha learing next js")
}