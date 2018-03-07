import angular from "angular";
import {CourseViewerComponent} from "./course-viewer.component";
import {UserStatusComponent} from "./user-status.component";
import {MainNavigationComponent} from "./main-navigation.component";
import {HomeComponent} from "./home.component";

export const CourseViewer = angular
    .module("courseViewer", [])
    .component("courseViewer", CourseViewerComponent)
    .component("userStatus", UserStatusComponent)
    .component("mainNavigation", MainNavigationComponent)
    .component("home", HomeComponent);
