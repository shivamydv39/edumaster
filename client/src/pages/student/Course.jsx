import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Users, Play } from "lucide-react";

const Course = ({course}) => {
  return (
    <Link to={`/course-detail/${course._id}`}>
      <Card className="group overflow-hidden rounded-xl dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="relative overflow-hidden">
          <img
            src={course.courseThumbnail}
            alt="course"
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Course level badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-xs rounded-full font-medium shadow-lg">
              {course.courseLevel}
            </Badge>
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
              <Play className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="currentColor" />
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 space-y-4">
          <div>
            <h1 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {course.courseTitle}
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-blue-100 dark:ring-blue-900">
              <AvatarImage src={course.creator?.photoUrl || "https://github.com/shadcn.png"} alt="instructor" />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                {course.creator?.name?.charAt(0) || "I"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm text-gray-900 dark:text-white">
                {course.creator?.name || "Instructor"}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {course.enrolledStudents?.length > 1000 
                      ? `${(course.enrolledStudents.length / 1000).toFixed(1)}k` 
                      : course.enrolledStudents?.length || 0} enrolled
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Play className="h-4 w-4" />
                <span>{course.lectures?.length || 0} lessons</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.enrolledStudents?.length || 0} students</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                ₹{course.coursePrice || 0}
              </div>
              {course.coursePrice && (
                <div className="text-xs text-gray-500 line-through">₹{Math.round(course.coursePrice * 1.5)}</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
