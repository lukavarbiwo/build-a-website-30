
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { AlertCircle } from "lucide-react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !password) {
      toast({
        title: "შეცდომა",
        description: "გთხოვთ შეავსოთ ყველა სავალდებულო ველი",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await signUp(email, password, fullName);
      
      if (error) {
        toast({
          title: "რეგისტრაცია ვერ მოხერხდა",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "რეგისტრაცია წარმატებულია",
          description: "თქვენი ანგარიში წარმატებით შეიქმნა",
        });
      }
    } catch (error: any) {
      toast({
        title: "რეგისტრაცია ვერ მოხერხდა",
        description: error?.message || "დაფიქსირდა შეცდომა, სცადეთ თავიდან",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect if user is already logged in
  if (user) {
    return <Navigate to="/dashboard" />;
  }

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
          
          <h1 className="text-3xl font-bold mb-2">შექმენით თქვენი ანგარიში</h1>
          <p className="text-gray-500">დაიწყეთ თქვენი უფასო ანგარიშით</p>
        </div>
        
        <Card className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">სრული სახელი</Label>
                <Input 
                  id="fullName" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="შეიყვანეთ თქვენი სრული სახელი" 
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <Label htmlFor="email">იმეილი</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="შეიყვანეთ თქვენი იმეილი" 
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <Label htmlFor="password">პაროლი</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="შექმენით პაროლი" 
                  disabled={isLoading}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "მიმდინარეობს..." : "ანგარიშის შექმნა"}
              </Button>
            </div>
          </form>
        </Card>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            უკვე გაქვთ ანგარიში?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              შესვლა
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
