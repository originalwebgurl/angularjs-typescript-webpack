import angular from "angular";
import {AuthorListComponent} from "./author-list.component";

export const AuthorListModule = angular
    .module("authorList", [])
    .component("authorList", AuthorListComponent)
    .name;
