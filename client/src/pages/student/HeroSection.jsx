import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Users, Award, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const searchHandler = (e) => {
    e.preventDefault();
    if(searchQuery.trim() !== ""){
      navigate(`/course/search?query=${searchQuery}`)
    }
    setSearchQuery("");
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 py-32 px-4 text-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Main heading section */}
        <div className="mb-12">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master New Skills with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              EduMaster
            </span>
          </h1>
          <p className="text-gray-200 dark:text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with expert-led courses, hands-on projects, and personalized learning paths designed for today's professionals.
          </p>
        </div>


        {/* Search section */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={searchHandler} className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <div className="flex items-center px-6 py-4">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for courses, skills, or topics..."
                className="flex-grow border-none bg-transparent focus-visible:ring-0 px-0 py-0 text-white placeholder-gray-300 text-lg"
              />
            </div>
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-r-2xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Search
            </Button>
          </form>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => navigate(`/course/search?query`)} 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
