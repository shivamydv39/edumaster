import React from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { useGetSingleLectureQuery } from "@/features/api/courseApi";

const LectureWatch = () => {
  const { courseId, lectureId } = useParams();

  const { data, isLoading, isError } = useGetSingleLectureQuery({
    courseId,
    lectureId,
  });

  if (isLoading) return <p>Loading lecture...</p>;
  if (isError) return <p>Failed to load lecture</p>;

  const { lectureTitle, videoUrl } = data?.lecture;

  // Helper function to format video URL
  const formatVideoUrl = (url) => {
    if (!url) return null;
    // If it's a Cloudinary URL, ensure it has the proper format for video streaming
    if (url.includes('cloudinary.com')) {
      // Add streaming format if not present
      if (!url.includes('f_mp4') && !url.includes('f_auto')) {
        return url.replace('/upload/', '/upload/f_mp4/');
      }
    }
    return url;
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">{lectureTitle}</h1>
      <div className="aspect-video">
        {videoUrl ? (
          <ReactPlayer 
            url={formatVideoUrl(videoUrl)} 
            controls 
            width="100%" 
            height="100%"
            onError={(error) => {
              console.error('ReactPlayer error:', error);
              console.error('Video URL:', formatVideoUrl(videoUrl));
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">No video available for this lecture</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureWatch;
