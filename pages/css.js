
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Page() {
  return (
<div className="container mx-auto px-4 bg-blue-gray-50  h-screen">
<div className="rounded-md p-2  bg-white">
<header className="flex items-center justify-between px-4 py-3 bg-gray-900">
      <div className="flex items-center">
        <img
          src="#"
          alt="Logo"
          className="w-10 h-10 mr-2"
        />
        <h1 className="text-white text-xl font-bold">Your Website</h1>
      </div>
      <div className="flex items-center">
        <Button>登录</Button>
        <Button>注册</Button>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          登录
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
          注册
        </button> */}
      </div>
    </header>
</div>
<div className="h-1/6">share</div>
<div className="h-3/6 flex  justify-center items-center">
123

</div>
<div className="">music</div>
<div className="">foot</div>
</div>

  )
  
 
}