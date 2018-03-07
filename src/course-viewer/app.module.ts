import angular from "angular";
import {CourseViewerComponent} from "./course-viewer.component";
import {UserStatusComponent} from "./user-status.component";
import {MainNavigationComponent} from "./main-navigation.component";
import {HomeComponent} from "./home.component";
import {CourseListModule} from "./course/course-list.module";
import {AuthorListModule} from "./author/author-list.module";

export const CourseViewer = angular
    .module("courseViewer", [
        CourseListModule,
        AuthorListModule
    ])
    .component("courseViewer", CourseViewerComponent)
    .component("userStatus", UserStatusComponent)
    .component("mainNavigation", MainNavigationComponent)
    .component("home", HomeComponent);
