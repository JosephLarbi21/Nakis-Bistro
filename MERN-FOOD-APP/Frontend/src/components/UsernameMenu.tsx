import { CircleUserRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const UsernameMenu = () =>{
    const {user} = useAuth0();
   return(
   
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-purple-500 gap-2">
         <CircleUserRound className="text-purple-500"/>
         {user?.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-purple-500">
                User Profile
            </Link>
            </DropdownMenuItem>
            <Separator/>
            1:56:07 
            
        </DropdownMenuContent>
    </DropdownMenu>
   )
}


export default UsernameMenu