
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="bg-blue-500 text-white p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 16 4-4-4-4"/>
                <path d="m6 8-4 4 4 4"/>
                <path d="m14.5 4-5 16"/>
              </svg>
            </div>
            <span className="text-xl font-bold">EduFlow</span>
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">კეთილი იყოს თქვენი დაბრუნება</h1>
          <p className="text-gray-500">შედით თქვენს ანგარიშში</p>
        </div>
        
        <Card className="p-6">
          <form>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">იმეილი</Label>
                <Input id="email" type="email" placeholder="შეიყვანეთ თქვენი იმეილი" />
              </div>
              
              <div>
                <Label htmlFor="password">პაროლი</Label>
                <Input id="password" type="password" placeholder="შეიყვანეთ თქვენი პაროლი" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link to="/forgot-password" className="text-blue-500 hover:underline">
                    დაგავიწყდათ პაროლი?
                  </Link>
                </div>
              </div>
              
              <Button type="submit" className="w-full">შესვლა</Button>
            </div>
          </form>
        </Card>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            არ გაქვთ ანგარიში?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              რეგისტრაცია
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
