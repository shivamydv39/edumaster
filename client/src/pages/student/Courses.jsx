import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import React from "react";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";
import { BookOpen, Star, TrendingUp, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
 
const Courses = () => {
  const {data, isLoading, isError} = useGetPublishedCourseQuery();
  const navigate = useNavigate();
 
  if(isError) return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Oops! Something went wrong</h1>
          <p className="text-red-500 dark:text-red-300">We're having trouble loading the courses. Please try again later.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Premium Learning Experience
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Explore Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Expert Courses
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Master new skills with industry-leading courses designed by experts. 
            Join thousands of professionals who are advancing their careers with EduMaster.
          </p>

          {/* Course stats - only show real data */}
          {data?.courses && data.courses.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">{data.courses.length}</div>
                  <div className="text-sm">Courses Available</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">
                    {Math.round((data.courses.reduce((total, course) => total + (course.lectures?.length || 0), 0) / data.courses.length))}+
                  </div>
                  <div className="text-sm">Avg Lessons</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">
                    {(() => {
                        const totalStudents = data.courses.reduce((total, course) => total + (course.enrolledStudents?.length || 0), 0);
                        return totalStudents > 1000 ? `${(totalStudents / 1000).toFixed(1)}K+` : `${totalStudents}+`;
                      })()}
                  </div>
                  <div className="text-sm">Total Students</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CourseSkeleton key={index} />
            ))
          ) : (
           data?.courses && data.courses.map((course, index) => <Course key={index} course={course}/>) 
          )}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/course/search?query')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <Skeleton className="w-full h-48" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-8" />
              <Skeleton className="h-3 w-6" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="text-right space-y-1">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-3 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
};
