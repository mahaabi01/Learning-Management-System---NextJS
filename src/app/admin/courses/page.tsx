"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCallback, useEffect, useState } from "react";
import Modal from "./components/Modal";
import { deleteCourse, fetchCourses } from "@/store/courses/courseSlice";
import { redirect } from "next/navigation";

function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { courses } = useAppSelector((store) => store.courses);
  const dispatch = useAppDispatch();
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.price.toString().includes(searchTerm) ||
      course.category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default Courses