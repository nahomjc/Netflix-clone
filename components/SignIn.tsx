import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
function SignIn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-black-200 bg-opacity-80 shadow-lg">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          <DialogDescription>Sign In to your Netflix account</DialogDescription>
        </DialogHeader>
        <div className="flex-col justify-center items-center w-full space-y-5">
          <Input
            id="name"
            placeholder="Email or phone number"
            className="col-span-3"
            type="email"
          />

          <Input id="username" placeholder="Password" className="col-span-3" />
          <Button type="submit" variant="destructive" className="w-full">
            Sign In
          </Button>
          <div className="flex items-center space-x-2 justify-between ">
            <label
              htmlFor="Remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <Checkbox id="Remember" /> Remember me
            </label>

            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Need Help ?
            </label>
          </div>
          <div>
            <span className="text-white dark:text-white text-sm">
              {" "}
              New to Netflix? Sign up now. This page is protected by Google
              reCAPTCHA to ensure youre not a bot. Learn more.
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default SignIn;
