
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
<div className="container mx-auto px-4 bg-amber-100  h-screen">
<div className="h-1/6">


</div>
<div className="h-1/6">share</div>
<div className="h-3/6 flex  justify-center items-center">

    <Card className="mt-6 w-96">
      
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
 

</div>
<div className="">music</div>
<div className="">foot</div>
</div>

  )
  
 
}