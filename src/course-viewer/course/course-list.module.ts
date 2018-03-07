import angular from "angular";
import {CourseListComponent} from "./course-list.component";

export const CourseListModule = angular
    .module("courseList", [])
    .component("courseList", CourseListComponent)
    .name;
